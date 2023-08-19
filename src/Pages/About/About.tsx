import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");

  if (!userDetails.name && !userDetails.phoneNumber && !userDetails.email) {
    navigate("/"); 
    return <>Use Real info</>
  }else{
    return (
        <div>
          <h2>About Page</h2>
          <p>Name: {userDetails.name}</p>
          <p>Phone Number: {userDetails.phoneNumber}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      );
  }
};

export default About;
