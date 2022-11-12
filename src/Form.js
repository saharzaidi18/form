import React, { useEffect, useState } from 'react'

function Form() {
    const data = {name:"", department:"", subject:""};
    const [inputData, setInputData]= useState(data)
    const [flag, setFlag] = useState(false)

    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.department || !inputData.subject){
        alert("All field are Mandatory")
    }
    else{
        setFlag(true)
    }
}

function clearInput (){
  Array.from(document.querySelectorAll("input")).forEach(
    input => (input.value = "")
  );
}
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'> Hello {inputData.name},
        You've Registered Successfully</h2>:""}</pre>
   <form className='container'>

    <div className='header'>
    <h2> Welcome Back</h2>
     <h1> Registration Form</h1>
    </div>
      <div>
        <input type= 'text' placeholder= "Enter Your Name" 
        name="name" value={inputData.name} onChange={handleData}></input>
      </div>
      <div>
        <input type= 'text' placeholder= "Department Name"
         name="department" value={inputData.department} onChange={handleData}></input>
      </div>
      <div>
        <input type= 'text' placeholder= "Subject Name" 
        name="subject" value={inputData.subject} onChange={handleData}></input>
      </div>
     
      <div>  

      <button type='button' onClick={clearInput}>Clear</button>

        <button type='submit' onClick={handleSubmit}>Save</button> 
      
      </div>
      
      
   </form>
   </>
  )
}

export default Form
