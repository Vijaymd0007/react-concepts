import React, { useState, useCallback } from 'react';
import List from './List';

const UseCallback = () => {
    const [number,setNumber]=useState(0)
    const [theme,setTheme]=useState(false)
    
    const getItems= useCallback(()=>{
        return [number,number+1,number+2]
    },[number])

 const handleTheme=()=>{
    console.log("button clicked")
    setTheme(!theme)
 }
 const handleClick=()=>{
    setNumber(number+1)
 }
 const darkTheme={
    backgroundColor:theme?"black":"white",
    color:theme?"white":"black"
 }
 
  return (
    <div>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handleTheme}>theme toggle</button>
    
    <div style={darkTheme}>
        <h5>{number}</h5>
        <List number={getItems}/>
    </div>
    </div>
  );
};

export default UseCallback;
