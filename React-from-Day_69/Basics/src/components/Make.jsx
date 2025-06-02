import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Make = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const [Title, setTitle] = useState('')
    function submitHandler(e){
        e.preventDefault()
        const newTodo = {
            id : nanoid(),
            title:Title,
            isCompleted: false
        }
        
        let copytodos = [...todos]
        copytodos.push(newTodo)
        settodos(copytodos)

        //settodos([...todos,newTodo])
        
    }

    const buttonCss = {
        border:"none",
        background:"blue",
        padding: "6px 10px",
        borderRadius:"5px",
        color:"white",
        fontWeight:"bold"
    }
  return (
    <>
    
        <h2>Create Task</h2>
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder='title'
            onChange={(e)=>setTitle(e.target.value)}
            value={Title}
            /><br />
            
            <br />

            <button style={buttonCss}>Create todo</button>
        </form>
    </>
  )
}

export default Make