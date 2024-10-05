/*
import './App.css'
import Header from './Header'
import React from "react";
import Card from "./Card";
import Avatar from './Avatar';
import contacts from './Contacts';





function createCard(c){
  return <Card
  id = {c.id}
  key ={c.id}
  name= {c.name}
  lname={c.lname}
  imgsrc={c.imgURL}
  phone={c.phone}
  email={c.email}
  />
}
function App(){
  return(

  <div>
 
 {contacts.map(createCard)} 
    
  </div>
  )
}
export default App;





import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    if(inputText === ""){
      alert("Please enter a task");
    }
    else{
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
    
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
