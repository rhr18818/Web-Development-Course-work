import React from 'react'
// import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Make = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    // const [Title, setTitle] = useState('')

    const{
        register,
        handleSubmit,
        formState:{ errors },
        reset,

    }= useForm()

    function submitHandler(data){
        // e.preventDefault() ----> replace e with data
        
        data.isCompleted = false
        data.id = nanoid()
        console.log(data);
      
         // const newTodo = {
        //     id : nanoid(),
        //     // title:Title,
        //     isCompleted: false
        // }
        
        let copytodos = [...todos]
        copytodos.push(data) ///---> newTodos replaced with data
        settodos(copytodos)

        toast.success("Task created Succesfully")
        reset()
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

    console.log(errors);
    
  return (
    <div className='w-full mb-4 md:w-[60%] md:mb-0'>

        <h2 className='text-white text-2xl font-semibold mb-4'>Create <span className='text-orange-400' >Task</span></h2>
        <form onSubmit={handleSubmit(submitHandler)}>
            <input type="text" 
            placeholder='title'
            // onChange={(e)=>setTitle(e.target.value)}
            // value={Title}
            {...register("title",{required:"Field Can't be empty!"})} 
            className='p-2 bg-white w-full md:w-2/3 rounded outline-1 font-medium text-[1rem] focus:outline-orange-400 '
            /><br />
            {/* { errors && errors.title && errors.title.message && <small className='text-red-500 font-normal '>{errors.title.message}</small> } */}
            <small className='text-red-500 font-normal'>{errors?.title?.message}</small>
            <br />

            <button className='cursor-pointer bg-orange-400 hover:bg-amber-600 py-1.5 px-4 font-semibold text-white text-[1rem] rounded'>Create todo</button>
        </form>
    </div>
  )
}

export default Make