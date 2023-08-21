import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./Posts";

const About: React.FC = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");


    useEffect(() => {
        if (!userDetails.name && !userDetails.phoneNumber && !userDetails.email) {
          navigate("/", { replace: true });
        }
      }, [navigate]);
 
    return (
        <div>
          <Posts></Posts>
        </div>
      );
  }

export default About;
