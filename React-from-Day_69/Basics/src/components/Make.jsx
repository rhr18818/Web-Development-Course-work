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

    // const buttonCss = {
    //     border:"none",
    //     background:"blue",
    //     padding: "6px 10px",
    //     borderRadius:"5px",
    //     color:"white",
    //     fontWeight:"bold"
    // }
  return (
    <div className='w-[60%]'>
    
        <h2 className='text-white text-2xl font-semibold mb-4'>Create <span className='text-orange-400' >Task</span></h2>
        <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder='title'
            onChange={(e)=>setTitle(e.target.value)}
            value={Title}
            className='p-2 bg-white w-2/3 rounded outline-1 font-medium text-[1rem] focus:outline-orange-400'
            /><br />
            
            <br />

            <button className='bg-orange-400 hover:bg-amber-600 py-2 px-4 font-semibold text-white text-[1rem] rounded'>Create todo</button>
        </form>
    </div>
  )
}

export default Make