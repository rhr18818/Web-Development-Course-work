import React from 'react'
import { useState } from 'react'
const Day76 = () => {
    const [todos, settodos] = useState([
        {id:1,title:"Something.......",isCompleted: false}
    ])

    const [Title, setTitle] = useState('')
    const [Completed, setCompleted] = useState(true)
    const [gender, setgender] = useState('male')
    const [city, setcity] = useState("dhaka")
  return (
    <>
        <h1>To-Do</h1>
        <h2>Create Task</h2>
        <form >
            <input type="text" 
            placeholder='title'
            onChange={(e)=>setTitle(e.target.value)}
            value={Title}
            /><br />
            <input 
            type="checkbox" 
            onChange={(e)=> setCompleted(e.target.checked)}
            checked={Completed}
            /> Completed
            <br />

            <input 
            type="radio" 
            value="male"
            checked={gender=="male" && true}
            onChange={(e)=> setgender(e.target.value)}
            //onChange={(e)=> console.log(e)}
            /> Male
            <input 
            type="radio" 
            value="female"
            checked={gender=="female" && true}
            onChange={(e)=> setgender(e.target.value)
            }
            /> Female
            <br />
            <br />
            <select value={city} onChange={(e)=> setcity(e.target.value)}>
                <option value="khulna">Khulna</option>
                <option value="dhaka">Dhaka</option>
                <option value="sylhet">Sylhet</option>
            </select>
            <br />

            <button>Create todo</button>
        </form>
    </>
  )
}

export default Day76