 import React, { useEffect, useState } from "react";
 
 export function Useeffecthook(){
 
    const X= [
        {id:1,title:"apple"},
        {id:2,title:"orange"},
        {id:3,title:"pean"}
    ]
    const [x,setx]=useState(X);
    const [t,sett]=useState('')
    
    // const [t,sett]=useState('')
    useEffect(()=>{
        // setx(X) 
        sett(x)
       
    },[])
  
    console.log(t)
    
    return(
        <>
            
        <h1> {(t!='') ? t[0].id + " " + t[0].title:t}</h1>
       <div> {(x!='') ? x[0].id + " " + x[0].title:x}</div>
        </>
    )

 }