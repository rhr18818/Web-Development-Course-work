import { useNavigate } from "react-router-dom"

const Product = () => {
    const navigate = useNavigate()
    const navigateHandler = (name)=>{
        navigate(`/product/details/${name}`)
    }
  return (
    <div>
        <h1 className="text-4xl mb-4 text-yellow-500">Products</h1>
        <div className="my-3">
            <h2 className="text-2xl mb-3 font-light">Product 1</h2>
            <button onClick={()=> navigateHandler("product 1")} className=" mb-3 font-normal uppercase bg-white text-yellow-500 px-4 py-2 rounded cursor-pointer">See Details</button>
        </div>
        <div className="my-3">
            <h2 className="text-2xl mb-3 font-light">Product 2</h2>
            <button onClick={()=> navigateHandler("product 2")} className=" mb-3 font-normal uppercase bg-white text-yellow-500 px-4 py-2 rounded cursor-pointer">See Details</button>
        </div>
        <div className="my-3">
            <h2 className="text-2xl mb-3 font-light">Product 3</h2>
            <button onClick={()=> navigateHandler("product 3")} className=" mb-3 font-normal uppercase bg-white text-yellow-500 px-4 py-2 rounded cursor-pointer">See Details</button>
        </div>
    </div>
  )
}

export default Product