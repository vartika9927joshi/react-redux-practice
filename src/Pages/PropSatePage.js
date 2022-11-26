import React, { useState } from 'react'
import Testing from '../Component/Testing';

const PropSatePage = () => {
    var [countValue , setCountValue] = useState(0);

    const increment = () =>{
        console.log("hello incremnt",countValue);
        countValue++;
        setCountValue(countValue)
    }
    const decrement = () =>{
        console.log("hello decrement",countValue);
        countValue--;
        setCountValue(countValue)
    }
  return (
    <div style={{display:"flex" ,justifyContent:"center",alignItems:"center" , height:"100vh", cursor:"pointer"}}>
    <button className='plus-btn' style={{width:"150px" ,height:"60px" ,backgroundColor:"green", color:"#fff",fontSize:"23px",marginRight:"20px", cursor:"pointer"}}
    onClick={increment}>
        +
    </button>
    <button className='plus-btn minus'style={{width:"150px" ,height:"60px" ,backgroundColor:"red", color:"#fff",fontSize:"23px"}}
    onClick={decrement}>
        -
    </button>
    <div>
    <Testing sentData={countValue}/>
    </div>
    </div>
  )
}

export default PropSatePage