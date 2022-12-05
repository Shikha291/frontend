import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const [credentials, setcredentials] = useState({ linkedin: "", github: "", skills_to_learn: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //API Call
    console.log('profile')
    const response = await fetch("http://127.0.0.1:8000/connect/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Request-Headers": "http://127.0.0.1:3000/",
        "Authorization":`Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        linkedin: credentials.linkedin,
        github: credentials.github,
        skills_to_learn: credentials.skills_to_learn
      }),
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      console.log({status: response.status, message: response.statusText});

    } else {
      console.log("worked!!")
      navigate("/home");      
    }
  }
  return (
    <div className="profile-main">
      <Navbar />
      <div className="card">
      <form onSubmit={handleSubmit}>
      <h1>Enter your details</h1>
      <div className="mb-3 form-item">
          <label htmlFor="linkedin" className="col-form-label">
            Enter your Linkedin Profile link
          </label>
            <input
              type="url"
              className="form-control"
              id="linkedin"
              name="linkedin"
              value={credentials.linkedin}
              onChange={handleChange}
            />
        </div>
        <div className="mb-3 form-item">
          <label htmlFor="github" className="form-label">
            Enter your Github Username
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            name="github"
            value={credentials.github}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-item">
          <label htmlFor="skills_to_learn" className="form-label">
            What skills do you want to learn?
          </label>
          <input
            type="text"
            className="form-control"
            id="skills_to_learn"
            name="skills_to_learn"
            value={credentials.skills_to_learn}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </form>
      </div>
    </div>
  )
}

export default Profile