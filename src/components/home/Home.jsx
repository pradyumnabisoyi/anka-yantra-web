import { useState, useContext } from "react";
import Details from "../charts/Details";
import Hebrew from "../charts/Hebrew";
import Loso from "../charts/Loso";
import Sapharial from "../charts/Sapharial";
import Form from "../form/Form";
import UserHeader from "../form/UserHeader";
import  UserContext  from "../../context/UserContext";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const {user} = useContext(UserContext);

  const components = {
    details: <Details />,
    hebrew: <Hebrew />,
    loso: <Loso />,
    sapharial: <Sapharial />,
  };

  return (
    <div className="container">
      <div className="nav-icons">
        <button
          onClick={() => setActiveComponent("details")}
          title="Details"
          className="home-icon"
          style={{
            fontSize: "60px",
            margin: "15px",
            borderRadius: "20%",
            opacity: activeComponent === "details" ? 1 : 0.5,
          }}
        >
          📊
        </button>
        <button
          onClick={() => setActiveComponent("hebrew")}
          title="Hebrew"
          style={{
            fontSize: "60px",
            margin: "15px",
            borderRadius: "20%",
            opacity: activeComponent === "hebrew" ? 1 : 0.5,
          }}
        >
          📅
        </button>
        <button
          onClick={() => setActiveComponent("loso")}
          title="Loso"
          style={{
            fontSize: "60px",
            margin: "15px",
            borderRadius: "20%",
            opacity: activeComponent === "loso" ? 1 : 0.5,
          }}
        >
          🔢
        </button>
        <button
          onClick={() => setActiveComponent("sapharial")}
          title="Sapharial"
          style={{
            fontSize: "60px",
            margin: "15px",
            borderRadius: "20%",
            opacity: activeComponent === "sapharial" ? 1 : 0.5,
          }}
        >
          #️⃣
        </button>
      </div>
      <div className="component-view">
        {activeComponent !== "" ? (
          user.birthDate === "" ? (
            <Form />
          ) : (
            <UserHeader />
          )
        ) : null}
        {user.birthDate !== "" ? components[activeComponent] : null}
      </div>
    </div>
  );
};

export default Home;
