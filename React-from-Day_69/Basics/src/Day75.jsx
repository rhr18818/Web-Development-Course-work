import React from 'react'
import { useState } from 'react'

const Day75 = () => {

    const profiles = [
        {name: 'Ratul',age:23},
        {name: 'Hasan',age:22},
        {name: 'Rabbi',age:33},
  ]
  const Data = profiles.map((profile,index)=>{
    return <li key={index}>
        <span>{profile.name} </span>
        <span> ---{profile.age}</span>
    </li>
  })

  const [Name, setName] = useState("")
  const [Age, setAge] = useState(18)
//   const changeHandler = (e)=>{
//     console.log(e.target.value);
//     setName(e.target.value)
//   }
//   console.log(Name);
  const submitHandler = (e)=>{
    e.preventDefault()
    const newUser = {Name,Age}
    console.log(newUser);//api--backend-Database
    
  }
  return (
    <>
        <h1>Registration Form</h1>
        <form onSubmit={submitHandler}>
            <input 
            type="text"
            placeholder='Full-Name' 
            onChange={(e)=> setName(e.target.value)}
            value={Name}
             />
            <input 
            type="number" 
            placeholder='Age' 
            onChange={(e)=> setAge(e.target.value)}
            value={Age}
            />
            {/* <input type="submit" /> */}
            <button>Submit</button>
        </form>
        <hr />
        <h1>User Data</h1>
        <ol>{Data}</ol>
    </>
  )
}

export default Day75