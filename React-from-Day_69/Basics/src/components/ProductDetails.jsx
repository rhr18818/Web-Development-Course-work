import { useNavigate, useParams } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate()
    //either use --> navigate(-1) or navigate("/product") the url
    const params = useParams()
    console.log(params.name);
    

  return (
    <div className="my-3">
            <h2 className="text-2xl mb-3 font-normal capitalize">{params.name}</h2>
            <h2 className="text-xl mb-3 font-light">Product Details.....</h2>
            <button onClick={()=> navigate(-1)} className=" mb-3 font-normal uppercase bg-white text-gray-800 px-4 py-1 rounded cursor-pointer"> Go Back</button>
    </div>
  )
}

export default ProductDetails