import { useContext } from "react"
import { recepicontext } from "../context/Recipecontext"
import { Link } from "react-router-dom"


const Recipe = () => {
    const [ Data ] = useContext(recepicontext)
    //console.log(Data);
    
    const renderRecipes = Data.map((recepie,index) => (
            //Curly braces {} = Need explicit return
            // Parentheses () = Implicit return (no return needed)
            
             <Link to={`details/${recepie.id}`} className="p-4 bg-gray-900 rounded-xl w-[30%] hover:scale-102 duration-200" key={recepie.id}>
                <h1 className="font-semibold text-yellow-500 mb-2">Recipe No: {index+1}</h1>
                <h1 className="text-xl mb-2"><small className="text-lg font-semibold">Title:</small> {recepie.title}</h1>
                <img className= "w-full h-[12rem] my-4 object-cover rounded"src={recepie.image}alt="" />
                <h1 className="mb-2 capitalize"><small className="text-lg font-semibold">Category:</small> {recepie.category}</h1>
                <h1 className="mb-2"><small className="text-lg font-semibold">Ingridients:</small> {recepie.ingridients.slice(0,50)}<small className="text-blue-400 cursor-pointer">...more</small></h1>
                <h1 className="mb-2"><small className="text-lg font-semibold">Description:</small> {recepie.description.slice(0,80)}<small className="text-blue-400 cursor-pointer">...more</small></h1>
            </Link>
    ))
  return (
    <div className="">
        <h1 className="text-2xl text-gray-200 pb-2 mb-7">All Recipes</h1>
        <div className="flex gap-8 flex-wrap ">{renderRecipes}</div>
    </div>
  )
}

export default Recipe