import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = { name, phoneNumber, email };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    navigate("/about");
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      {name && email && phoneNumber ? (
        <>
          {" "}
          <input type="submit" value="Submit" />{" "}
        </>
      ) : (
        <><input type="submit" value="Submit"  /></>
      )}
    </form>
  );
};

export default Form;
