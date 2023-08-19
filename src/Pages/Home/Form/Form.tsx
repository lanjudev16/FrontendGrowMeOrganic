import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {

    const userDetails = { name, phoneNumber, email };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));


  };

  return (
    <div>
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
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ width: "200px" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
