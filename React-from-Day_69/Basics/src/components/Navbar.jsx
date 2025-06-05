import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 items-center mb-6 text-md uppercase font-normal tracking-wide">
        <NavLink className={(e)=> e.isActive? "text-yellow-500": ""} to='/'>Home</NavLink>
        <NavLink className={(e)=> e.isActive? "text-yellow-500": ""} to='/recipe'>Recipe</NavLink>
        <NavLink className={(e)=> e.isActive? "text-yellow-500": ""} to='/about'>About</NavLink>
        <NavLink className={(e)=> `px-4 py-2 block bg-gray-900 rounded hover:bg-gray-950 ${e.isActive? "bg-yellow-500 hover:bg-yellow-500": ""}`} to='/create-recipe'>Create-Recipe</NavLink>
    </div>
  )
}

export default Navbar