import { useState } from "react";
import "./Random.css";
const Random = (props)=>{
    const Comp = props.comp;
    const[color,setColor]=useState("Color Code");
    const generateRandomColor = ()=>{
    setColor("#" + 
    Math.floor(Math.random()*16777215)
            .toString(16)
            .padStart(6, '0')
            .toUpperCase());
    }
 return(
     <Comp onClick={generateRandomColor} color={color}></Comp>
 )
};

export default Random;