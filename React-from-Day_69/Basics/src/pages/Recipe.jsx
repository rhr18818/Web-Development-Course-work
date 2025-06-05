import { useContext } from "react"
import { recepicontext } from "../context/Recipecontext"

const Recipe = () => {
    const [ Data ] = useContext(recepicontext)
    //console.log(Data);
    
    const renderRecipes = Data.map((recepie,index) => (
            //Curly braces {} = Need explicit return
            // Parentheses () = Implicit return (no return needed)
             <div className="p-4 bg-gray-900 rounded w-[16rem]" key={recepie.id}>
                <h1 className="font-semibold text-yellow-500">Recipe No: {index+1}</h1>
                <h1 className="text-xl">Title: {recepie.title}</h1>
                <h1 className="text">Category: {recepie.category}</h1>
                <h1 className="text">Ingridients: {recepie.ingridients}</h1>
            </div>
    ))
  return (
    <div className="">
        <h1 className="text-2xl text-gray-200 pb-2 mb-7">All Recipes</h1>
        <div className="flex gap-3 flex-wrap">{renderRecipes}</div>
    </div>
  )
}

export default Recipe