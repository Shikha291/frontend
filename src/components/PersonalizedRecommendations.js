import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import ResourceItem from "./ResourceItem";

const PersonalizedRecommendations = (props) => {
    const [perRecommendations, setperRecommendations] = useState();
    const getRecommendations = async () => {
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
          setperRecommendations(jsonPersonal);
          console.log(jsonPersonal);
    }
  const genResource = props.generalResource;
  
  const resource = [];
  genResource.map((element) => {
    Object.values(element).map((resources) => {
        resources.map((el) => {
            let value = el.image;
            if(value.startsWith('http://books.google.com')) {
                console.log('yes')
                el.image = 'https://americanlibrariesmagazine.org/wp-content/uploads/2015/12/googlebooks.jpg'
            }
            console.log(el.image);
            resource.push(el)
        })
    })
  })
//   for(let lang in languages) {
//         console.log(genResource.lang);
//         resources.push(genResource.lang)
//   }
  return (
    <div className="recommendations">
      <Navbar />
    <div className="container">
      {/* <button onClick={updateResource}>Get resources</button> */}
      
      <div className="row">
        {
            resource.map((el) => {
                return (
                <div className="col-md-4">
                <ResourceItem title = {el.title} imgUrl = {el.image} url = {el.url}/>
                </div>);
            })
            // genResource.map((element) => {
            //     Object.values(element).map((resources) => {
            //         resources.map((el) => {
            //             return (
            //             <div className="col-md-4">
            //             <ResourceItem title = {el.title} image = {el.image} url = {el.url}/>
            //             </div>);
            //         })
            //     })
            //   })
        }
      </div>
    </div>
    </div>
  );
};

export default PersonalizedRecommendations;
