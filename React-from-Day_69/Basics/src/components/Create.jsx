import { useState } from 'react'

const Create = () => {
    // console.log(props);
    // const users = props.users
    // const setusers = props.setusers

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
    </>
  )
}

export default Create