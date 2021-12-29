import React from "react";
import Card from "../card/Card";
import "./imageField.css";

export default function ImageField({photos}) {
    const images = photos.map((p)=>{
        return  <div key={p.id}><Card photo={p} /></div> 
     })
    return (<div className="images">{images}</div>);
}
