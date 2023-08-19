// type UserProps={name:string,age:number,isLogIn:boolean}

import { useState } from "react";
import Button from "./Button";

// const User = ({name,age,isLogIn}:UserProps) => {
    type userDefT={
        user:{
            name:string,
            age:number,
            lang:string[]
        },
        userMul:{
            name:string,
        }[]
    }
    type user={
        name:string,
        age:number
    }[]

const User = ({user,userMul}:userDefT) => {
    const userInfo=[
        {
            name:"Md Lanju Mia",
            age:24
        },
        {
            name:"Md Shakil",
            age:24
        }
    ]
    const [count,setCount]=useState<null | user>(null)
    return (
        <div>
            {/* {
                isLogIn && <><h2>{name}</h2>
                <h3>{age}</h3></>
            } */}
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.lang.map(item=><span>{item}</span>)}</h1>
            <h5>{userMul.map(item=><>{item.name}</>)}</h5>
            <h2>{count?.map(item=><li>{item.name}</li>)}</h2>
            <span onClick={()=>setCount(userInfo)}><Button>Click me</Button></span>
        </div>
    );
};

export default User;