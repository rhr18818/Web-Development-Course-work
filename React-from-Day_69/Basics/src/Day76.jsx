import React from 'react'
import { useState } from 'react'
import Make from './components/Make';
import View from './components/View';

const Day76 = () => {
    const [todos, settodos] = useState([
        {id:1,title:"Something.......",isCompleted: false}
    ])

    
    console.log(todos);

    
  return (
    <>
        <Make todos={todos} settodos={settodos}/>
        <br />
        <hr />
        <View todos={todos}/>
    </>
  )
}

export default Day76


