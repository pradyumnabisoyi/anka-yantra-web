import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import { Form, Card } from 'react-bootstrap';
import { showAlert } from '../../utils/Alerts';
import { getBirthNumber, getDriverNumber, getCompoundNumber } from "../../utils/Numerology";

const UserHeader = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  const updateUser = (updatedUser) => {
    console.log("Updating user:", updatedUser);
    const birthNumber = getBirthNumber(updatedUser.birthDate);
    const driverNumber = getDriverNumber(updatedUser.birthDate);
    const compoundNumber = getCompoundNumber(updatedUser.name, updatedUser.birthDate);
    setUser((prev) => ({ ...prev, birthNumber, destinyNumber: driverNumber, compoundNumber }));
  };

  const handleChange = (e) => {
    const nextUser = { ...user, [e.target.name]: e.target.value };
    if (e.target.id === "mobile") {
      const onlyDigits = e.target.value.replace(/\D/g, "");
      setUser({ ...user, [e.target.name]: onlyDigits });
      updateUser(nextUser);
      return;
    } else if (e.target.id === "birthDate") {
      const selectedYear = parseInt(e.target.value.split("-")[0]);
      if (selectedYear < 1 || selectedYear > 2100) {
        setUser({ ...user, name: user.name, mobile: user.mobile, birthDate: "" });
        showAlert("Invalid Birth Year " + selectedYear + ". Please enter a year between 1 and 2100.");
        return;
      }
    } else {
      if (e.target.id === "name" && e.target.value.trim() === "") {
        showAlert("Invalid Name", "Name cannot be empty.");
        return;
      } else {
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(e.target.value)) {
          showAlert("Invalid Name", "Name can only contain letters and spaces.");
          return;
        }
      }
      setUser({ ...user, [e.target.name]: e.target.value });
      updateUser(nextUser);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
    updateUser(nextUser);
  };

  return (
    <Card className="mb-4 p-3 shadow-sm" onClick={() => !isEditing && setIsEditing(true)}>
      {isEditing ? (
        <Form onBlur={() => setIsEditing(false)}> 
          <Form.Control name="name" value={user.name} onChange={handleChange} 
          id="name"
            maxLength="50"
            minLength="1"
            placeholder="Enter name"/>
          <Form.Control name="mobile" value={user.mobile} onChange={handleChange} 
          id="mobile"
            maxLength="11"
            minLength="9"
            placeholder="Enter mobile number"/>
          <Form.Control name="birthDate" value={user.birthDate} onChange={handleChange} className="mt-2" type="date"
          id="birthDate"
            required />
        </Form>
      ) : (
        <div>
          <h4>{user.name}</h4>
          <p className="text-muted mb-0">Birth Date : {user.birthDate} 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mobile : {user.mobile}(Click to edit)</p>
        </div>
      )}
    </Card>
  );
};

export default UserHeader;