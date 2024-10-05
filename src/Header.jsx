import React from "react";
const style={
    color:"red",
    backgroundColor:"black",
    fontSize:"50px",
    padding:"20px",
    margin:"20px",
    borderRadius:"10px",
    border:"2px solid red",
    textAlign:"center",
    boxShadow:"5px 5px 10px 5px red"
}

function Header (){
    return(
        <h1 style = {style}>Header</h1>
    )
}
export default Header;