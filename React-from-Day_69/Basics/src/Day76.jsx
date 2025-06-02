import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Day76 = () => {
    const [todos, settodos] = useState([
        {id:1,title:"Something.......",isCompleted: false}
    ])

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
    console.log(todos);

    const renderTodo = todos.map(todo =>{
        return <li key={todo.id}>{todo.title}</li>
    })
  return (
    <>
        <h1>To-Do</h1>
        <h2>Create Task</h2>
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder='title'
            onChange={(e)=>setTitle(e.target.value)}
            value={Title}
            /><br />
            
            <br />

            <button>Create todo</button>
        </form>
        <br />
        <hr />
        <h2>Created-Task's</h2>
        <ul>
            {renderTodo}
        </ul>
    </>
  )
}

export default Day76


