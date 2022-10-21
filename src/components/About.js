import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="about">
      <div className="about-main">
        <Navbar />
        <div class="des"><p>Toolkit is a recommendation tool made to make your life easier by recommending you courses and study material.</p></div>
        <div className="details d-flex">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recommendations</h5>
            <p className="card-text">
              Auto recommendations according to your profile.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Course Link</h5>
            <p className="card-text">
              Provides course links from platforms like Coursera,Udemy and Youtube.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Books Link</h5>
            <p className="card-text">
              Provides online books on various technologies.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Feedback</h5>
            <p className="card-text">
              We take your feedback and continue improving according to your needs.
            </p>
          </div>
        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default About;