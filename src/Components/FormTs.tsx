import React, { useState } from "react";

const FormTs = () => {
    const [name,setName]=useState<string>("")
    const handleNameOnChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value)
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newUser={
            name:name,
        }
        console.log(newUser);
    }
    return (
        <div>
            <h2>Create User</h2>
            <h2>The user name is: {name}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} id="" required  onChange={handleNameOnChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormTs;