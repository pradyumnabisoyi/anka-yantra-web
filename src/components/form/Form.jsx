import { useContext, useState, useRef } from "react";
import UserContext from "../../context/UserContext";
import { showAlert } from "../../utils/Alerts";
import { getBirthNumber, getDriverNumber, getCompoundNumber } from "../../utils/Numerology";


const Form = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const birthDateRef = useRef(null);
  const nameRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [id]: onlyDigits }));
    } else if (id === "name") {
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (nameRegex.test(value)) {
        setFormData((prev) => ({ ...prev, [id]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      showAlert("Invalid Name","Name is required", "error", nameRef);
      return;
    }
    const selectedYear = parseInt(formData.birthDate.split("-")[0]);
    if (selectedYear < 1 || selectedYear > 2100) {
      setFormData((prev) => ({ ...prev, name: prev.name, mobile: prev.mobile, birthDate: "" }));
      showAlert("Invalid Birth Year " + selectedYear,"Please enter a year between 1 and 2100.", "error", birthDateRef);
      return;
    }
    setUser(formData);
    const birthNumber = getBirthNumber(formData.birthDate);
    const driverNumber = getDriverNumber(formData.birthDate);
    const compoundNumber = getCompoundNumber(formData.name, formData.birthDate);
    setUser((prev) => ({ ...prev, birthNumber, destinyNumber: driverNumber, compoundNumber }));
  };

  return (
    <div className="container">
      <h2 className="mb-4">Birth Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            ref={nameRef}
            className="form-control"
            id="name"
            maxLength="50"
            minLength="1"
            placeholder="Enter name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            maxLength="11"
            minLength="9"
            placeholder="Enter mobile number"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">
            Birth Date <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            ref={birthDateRef}
            className="form-control"
            id="birthDate"
            required 
            onChange={handleChange}
            value={formData.birthDate}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;