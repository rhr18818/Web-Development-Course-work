import { createContext } from "react"
import { useState } from "react"

export const todoContext = createContext(null)

const Wrapper = (props) => {
  console.log(props)
  const [todos, settodos] = useState([
        {id:1,title:"Something.......",isCompleted: true}
    ])
  return (
    <todoContext.Provider value={[todos, settodos]}>
      {props.children}
    //props.App
    </todoContext.Provider>
  )
}

export default Wrapper