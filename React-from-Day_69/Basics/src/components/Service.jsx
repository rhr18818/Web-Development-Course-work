import { Outlet, useNavigate } from "react-router-dom"

const Service = () => {
    const navigate = useNavigate()
    
  return (
    <>
        <h1 className="text-4xl mb-4 text-yellow-500">Service</h1>
        <button onClick={()=> navigate("/service/details")} className="font-normal uppercase bg-white text-yellow-500 px-4 py-2 rounded cursor-pointer mb-7 mx-2">More Details</button>
        <button onClick={()=> navigate("/service/update")} className="font-normal uppercase bg-white text-yellow-500 px-4 py-2 rounded cursor-pointer mb-7 mx-2">Service Update</button>
        <hr />
        <Outlet/>
    </>
  )
}

export default Service