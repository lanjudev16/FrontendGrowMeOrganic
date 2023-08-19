import React from "react";

type propType={
    children:React.ReactNode
}
const Button = ({children}:propType) => {
    return (
        <button>{children}</button>
    );
};

export default Button;