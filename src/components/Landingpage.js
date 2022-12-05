import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const Landingpage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="landing">
      <div className="landing-nav">
        <Navbar />
      </div>
      <div className="header-text">
        <h1>
          We provide you the best courses according to your interests and skills
        </h1>
        <h2>
          Toolkit is a personalized toolkit which recommends you the best
          courses from the best online platforms
        </h2>
        <button onClick={handleClick}>Discover more</button>
      </div>
    </div>
  );
};

export default Landingpage;
