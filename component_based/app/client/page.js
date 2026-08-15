"use client"
import React, {useState, useEffect} from "react";


export default function client(params) {
    const [count, setState]= useState(0)
    function handleClick(e) {
       setState(count+1) 
    }
    return <div>
         <h1>Hello this is client page where the behavior is client side by using "use client"</h1>
         <h1>{count}</h1>
         <button onClick={handleClick}>click me</button>
    </div>
}