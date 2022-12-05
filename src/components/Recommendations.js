import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import ResourceItem from "./ResourceItem";

const Recommendations = (props) => {
    const [flag, setflag] = useState(0);
  const navigate = useNavigate();
  const navigateToProfile = () => {
    console.log(props.ProfileCreated);
    navigate("/profile");
  };
  const PersonalRecommendations = () => {
    setflag(1);
  };
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
  const perResource = props.personalResource;
  
  const resourceper = [];
  perResource.map((element) => {
    Object.values(element).map((resources) => {
        resources.map((el) => {
            let value = el.image;
            if(value.startsWith('http://books.google.com')) {
                console.log('yes')
                el.image = 'https://americanlibrariesmagazine.org/wp-content/uploads/2015/12/googlebooks.jpg'
            }
            console.log(el.image);
            resourceper.push(el)
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
      {!flag && (!props.ProfileCreated ? (
        <button className="recbutton" onClick={navigateToProfile}>Create Profile</button>) :
        (<button className="recbutton" onClick={PersonalRecommendations}>Get Personalized Recommendations</button>))
      }
      {/* <button onClick={updateResource}>Get resources</button> */}
      
      <div className="row">
        {
            
            !flag ?
            (resource.map((el) => {
                console.log('general');
                return (
                <div className="col-md-4">
                <ResourceItem title = {el.title} imgUrl = {el.image} url = {el.url}/>
                </div>);
            })) :
            (
                resourceper.map((el) => {
                    console.log('personal');
                    return (
                    <div className="col-md-4">
                    <ResourceItem title = {el.title} imgUrl = {el.image} url = {el.url}/>
                    </div>);
                })
            )
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

export default Recommendations;
