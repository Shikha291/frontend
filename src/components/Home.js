import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import Recommendations from "./Recommendations";

// import ResourceItem from './ResourceItem'

const Home = () => {
  const [resource1, setResource1] = useState();
  const [resource2, setresource2] = useState();
  const navigate = useNavigate();
  const [counter, setCounter] = useState();
  const [isProfileCreated, setisProfileCreated] = useState(0)
  const updateResource = async () => {
    const responseProfile = await fetch("http://127.0.0.1:8000/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Request-Headers": "http://127.0.0.1:3000/",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(responseProfile);
    const jsonProfile = await responseProfile.json();
    console.log(jsonProfile);
    const responseGeneral = await fetch(
      "http://127.0.0.1:8000/general_recommendations/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Request-Headers": "http://127.0.0.1:3000/",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(responseGeneral);
  
    const jsonGeneral = await responseGeneral.json();
    setResource1(jsonGeneral);
    console.log(jsonGeneral);
    // console.log(jsonProfile.length)
    if (jsonProfile.length == 1) {
      setisProfileCreated(1);
      const responsePersonal = await fetch(
        "http://127.0.0.1:8000/personalized_recommendations/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Request-Headers": "http://127.0.0.1:3000/",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(responsePersonal);
      const jsonPersonal = await responsePersonal.json();
      setresource2(jsonPersonal);
      console.log(jsonPersonal);
    }


  };

const incCounter = async () => {
  setCounter(1);
}
  useEffect(async () => {
    await updateResource();
    await incCounter();
  }, []);

  return (
    <div>
      {/* {updateResource} */}
    {counter && <Recommendations ProfileCreated={isProfileCreated} generalResource={resource1} personalResource={resource2}/>}
    </div>
  );
};

export default Home;
