import React, { useState } from 'react'

export const InputField = () => {

    const[inputText1,setInputText1] =useState("");
    const[inputText2,setInputText2] =useState("")

    const _handlechange1 = ()=>{
        setInputText2(inputText1)
        setInputText1("");
    }

    const _handlechange2 = ()=>{
        setInputText1(inputText2)
        setInputText2("");
    }

  return (
    <div className='Main_div'>
        <h3> INPUT SWAPPER</h3>
        <div className='input_div'>
            <input type="text" value={inputText1} onChange={(e)=>setInputText1(e.target.value)} placeholder='Enter Text 1 '/>
            <input type="text" value={inputText2} onChange={(e)=>setInputText2(e.target.value)} placeholder='Enter Text 2'/>    
        </div>
        <div className='btn_div'>
        <button onClick={_handlechange1}>Move Text 2</button>    
        <button onClick={_handlechange2}> Move Text 1</button>
        </div>
        
        
    </div>
  )
}
