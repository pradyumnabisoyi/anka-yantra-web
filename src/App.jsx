import { useState } from "react";
import AboutPage from "./components/about/AboutPage.jsx";
import HomePage from "./components/home/Home.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    birthDate: "",
    compoundNumber: "",
    birthNumber: "",
    destinyNumber: ""
  });

  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Header />
      <div className="d-flex flex-column min-vh-100">
        <UserContext.Provider value={{ user, setUser }}>
          <div className="container flex-grow-1">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-center gap-2 my-4">
                  <button
                    className={`btn ${activeTab === "home" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("home")}
                  >
                    Home
                  </button>
                  <button
                    className={`btn ${activeTab === "about" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>
                </div>
                <div className="content-wrapper">
                  {activeTab === "home" && <HomePage />}
                  {activeTab === "about" && <AboutPage />}
                </div>
              </div>
            </div>
          </div>
        </UserContext.Provider>
      </div>
      <Footer />
    </>
  );
}

export default App;
