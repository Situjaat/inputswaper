import React, { useState } from 'react'

export const InputField = () => {

    const[inputText1,setInputText1] =useState("");
    const[inputText2,setInputText2] =useState("");

    const _handlechange1 = ()=>{
        setInputText2(inputText1)
        setInputText1("");
    }

    const _handlechange2 = ()=>{
        setInputText1(inputText2)
        setInputText2("");
    }

  return (
    <div className='w-100 border d-flex justify-content-center p-4'> 
        <div className='w-25 d-flex flex-row m-2 justify-content-around'>
         <div className='d-flex flex-column'><input type="text" value={inputText1} onChange={(e)=>setInputText1(e.target.value)} placeholder='Enter Text 1 '/> <div className='d-flex justify-content-end mt-2'><button onClick={_handlechange1}>Move To 2</button></div></div>   
         <div><input type="text" value={inputText2} onChange={(e)=>setInputText2(e.target.value)} placeholder='Enter Text 2'/> <div className='mt-2'><button onClick={_handlechange2}> Move To 1</button></div></div>       
        </div>
    </div>
  )
}