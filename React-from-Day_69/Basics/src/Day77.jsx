import React from 'react'
import { useState } from 'react'
import Make from './components/Make';
import View from './components/View';

const Day77 = () => {
    const [todos, settodos] = useState([
        {id:1,title:"Something.......",isCompleted: true}
    ])
    console.log(todos);
  return (
    <div className='w-screen h-screen p-6 bg-gray-800'>

        <h1 className='text-4xl mb-[3rem] text-center text-amber-400 font-bold border-b-1 pb-3'>To-Do</h1> 
        <div className='md:flex justify-between'>
        <Make todos={todos} settodos={settodos}/>
        <br />
        
        <View todos={todos} settodos={settodos}/>
        </div>
    </div>
  )
}

export default Day77


