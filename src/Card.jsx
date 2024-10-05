import React from "react";
import './Card.css'
import Avatar from "./Avatar";


function Card(props){
return(
    <>

     <div className="card">
        <p>{props.id}</p>
    <h1>{props.name}</h1>

    <h2>{props.lname}</h2>
    <Avatar imgsrc={props.imgsrc}/>
    <p>{props.phone}</p>
    <p>{props.email}</p>
    </div>

    </>
)
}
export default Card;