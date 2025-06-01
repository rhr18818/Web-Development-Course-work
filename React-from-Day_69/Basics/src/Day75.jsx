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
        <Create users={users} setusers={setusers}/>
        <hr />
        <Read users={users} />
    </>
  )
}

export default Day75