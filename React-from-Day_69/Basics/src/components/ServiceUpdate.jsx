import { useNavigate } from "react-router-dom"

const ServiceUpdate = () => {
    const navigate = useNavigate()
  return (
    <div className="my-7">
            <h2 className="text-2xl mb-3 font-normal capitalize">Service Update</h2>
            <h2 className="text-xl mb-3 font-light">Do Service updateion.....</h2>
            <button onClick={()=> navigate(-1)} className=" mb-3 font-normal uppercase bg-white text-gray-800 px-4 py-1 rounded cursor-pointer"> Go Back</button>
    </div>
  )
}

export default ServiceUpdate