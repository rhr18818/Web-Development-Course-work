import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recepicontext } from '../context/Recipecontext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SinglePageRecipe = () => {
    const navigate = useNavigate()
    const [Data, setData] = useContext(recepicontext)
    // const [data] = useContext(recepicontext)
    const params = useParams()
    const recepie = Data.find((temp) => params.id == temp.id)
    //console.log(recepie);
    const {register,handleSubmit} = useForm({
        defaultValues:{
            title: recepie.title,
            image: recepie.image,
            category: recepie.category,
            ingridients: recepie.ingridients,
            description: recepie.description
        }
    })

    const submitHandler = (recepieData)=>{
        const index = Data.findIndex((temp)=> params.id == temp.id)
        const copydata = [...Data]
        copydata[index] = {...copydata[index],...recepieData}
        setData(copydata)
        //console.log(index,copydata,recepieData);
        toast.success("Recipe Updated Successfuly !")
        
    }
    const deleteHanlder = ()=>{
        const filterData = Data.filter((temp) => params.id != temp.id)
        setData(filterData)
        toast.error("Data Deleted Successfuly")
        navigate('/recipe')
    }
    
  return (
    <div className='flex justify-between'>
        <div className='w-[48%] pb-2'>
            <h1 className="mb-4 text-4xl font-bold"> {recepie.title}</h1>
            <img className= "w-full h-60 my-4 object-cover rounded"src={recepie.image}alt="" />
            <h1 className="mb-4 capitalize font-bold text-xl"><span className='uppercase'>Category :</span> {recepie.category}</h1>
            <h1 className="mb-4 text-xl font-light text-justify"><span className='font-bold uppercase'>Ingridients :</span> {recepie.ingridients}</h1>
            <h1 className="mb-4 text-lg font-light tracking-wide text-justify"><span className='font-bold uppercase'>Description :</span> {recepie.description}</h1>
        </div>
        <div className='w-[48%] flex flex-col gap-10'>
            <h1 className="mb-2 text-4xl font-bold"> Update Recipe</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="my-7">
            <div className="w-[80%] mb-7">
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
            className="p-1 border-b-1 outline-none w-[80%] block focus:border-yellow-600 mb-7" 
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
            className="p-1 border-b-1 outline-none w-[80%] block focus:border-yellow-600 mb-7 " 
            type="text" 
            rows="2"
            placeholder="Ingridients Seperated by Comma (,)" 
            > </textarea>
            <textarea 
            {...register("description")}
            className="p-1 border-b-1 outline-none w-[80%] block focus:border-yellow-600 mb-7 " 
            type="text" 
            rows="4"
            placeholder="Description...." 
            > </textarea>

            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded cursor-pointer">Update Recipe</button>
            <button onClick={deleteHanlder} className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded cursor-pointer ml-5">Delete Recipe</button>
        </form>
        </div>
    </div>
  )
}

export default SinglePageRecipe