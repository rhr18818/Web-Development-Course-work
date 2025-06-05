import { createContext, useState } from "react"

export const recepicontext = createContext(null)

const Recipecontext = (props) => {
    const [Data, setData] = useState([])
    console.log(Data);
    
  return (
    <recepicontext.Provider value={[Data, setData]}>
        {props.children}
    </recepicontext.Provider>
  )
}

export default Recipecontext