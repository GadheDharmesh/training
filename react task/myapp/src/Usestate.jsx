import React, { useEffect, useState } from "react";

function  Usestat(){

    const [bool,setbool]= useState(true);
    const [string,setstring]= useState("by");
    const [number,setnum]= useState(1);
    const [arr,setarr]= useState([1]);
    const [obj,setobj]= useState({});
    // var x=3
    // useEffect(()=>{},[]) strucuture of useeffect

  const hi =()=>{
        // x=3+1
        setstring("hi")
        setbool(false)
        setnum(2)
        setarr(["kai pn",1,2,3])
        setobj({id:"bby"})

    }

 return(
    <>
    <h1 onClick={hi}>{string}</h1>
    <div>{(bool)? "t": "f"}</div>
    <div>{number}</div>
     <div>{arr[0]}</div>
    <div>{obj.id}</div>

    </>
 )
}
export default Usestat