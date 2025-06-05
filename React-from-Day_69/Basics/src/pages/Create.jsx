import { useForm } from "react-hook-form"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { recepicontext } from "../context/Recipecontext"

const Create = () => {
    const {register,handleSubmit,reset} = useForm()
    const [Data, setData] = useContext(recepicontext)

    const submitHandler = (recipe)=>{
        recipe.id = nanoid()
        //console.log(recipe);

        // const cpydata= [...Data]
        // cpydata.push(recipe)
        // setData(cpydata)

        setData([...Data,recipe])
        reset()
        
    }
  return (
    <div className="py-7">
        <h1 className="text-2xl text-gray-200 pb-2">Creat Your Own Recipe</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="mt-7">
            <div className="w-[50%] mb-7">
                <input 
                {...register("image")}
                className="p-1 border-b-1 outline-none w-full block focus:border-yellow-600 " 
                type="url" 
                placeholder="Image Url"
                 
                />
                <small className="mt-2 text-red-500 text-sm ">Error will be shown here</small>
            </div>
            <input 
            {...register("title")}
            className="p-1 border-b-1 outline-none w-[50%] block focus:border-yellow-600 mb-7" 
            type="text" 
            placeholder="Title of Recipe" 
            />
            <select className="p-1 border-b-1 outline-none w-fit block focus:border-yellow-600 mb-7 bg-gray-800 " {...register("category")} defaultValue={"Select"}>
                <option value="" disabled>Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
            </select>
            <textarea 
            {...register("ingridients")}
            className="p-1 border-b-1 outline-none w-[50%] block focus:border-yellow-600 mb-7 " 
            type="text" 
            rows="2"
            placeholder="Ingridients Seperated by Comma (,)" 
            > </textarea>
            <textarea 
            {...register("description")}
            className="p-1 border-b-1 outline-none w-[50%] block focus:border-yellow-600 mb-7 " 
            type="text" 
            rows="4"
            placeholder="Description...." 
            > </textarea>

            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded cursor-pointer">Create Recipe</button>
        </form>
    </div>
  )
}

export default Create