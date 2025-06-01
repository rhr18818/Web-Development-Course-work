import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read.Jsx'

const Day75 = () => {

    const [users,setusers] = useState([
        {name: 'Ratul',age:23},
        {name: 'Hasan',age:22},
        {name: 'Rabbi',age:33},
  ])
  

  
  return (
    <>
        <Create />
        <hr />
        <Read users={users} setusers={setusers}/>
    </>
  )
}

export default Day75