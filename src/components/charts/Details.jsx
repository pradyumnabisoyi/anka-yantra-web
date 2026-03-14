import { useContext } from "react";
import  UserContext  from "../../context/UserContext";

const Details = () => {
    const {user} = useContext(UserContext);
    return (
        <div className="container">            
            <h2 className="mb-4">Details 📖</h2>
            <p>User Name : {user?.name || 'Not available'}</p>
            <p>Mobile Number : {user?.mobile || 'Not available'}</p>
            <p>Birth Date : {user?.birthDate || 'Not available'}</p>
            <p>Compound Number : {user?.compoundNumber || 'Not available'}</p>
            <p>Birth Number : {user?.birthNumber || 'Not available'}</p>
            <p>Destiny Number : {user?.destinyNumber || 'Not available'}</p>
        </div>
    );
}

export default Details;