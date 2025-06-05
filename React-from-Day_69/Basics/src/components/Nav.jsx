import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <div className="flex justify-center gap-5 pt-3 uppercase font-light tracking-wide">
        <NavLink className={(e)=> e.isActive?"text-yellow-500" : ""} to='/'>Home</NavLink>
        <NavLink className={(e)=> e.isActive?"text-yellow-500" : ""} to='/about'>About</NavLink>
        <NavLink className={(e)=> e.isActive?"text-yellow-500" : ""} to='/product'>Product</NavLink>
        <NavLink className={(e)=> e.isActive?"text-yellow-500" : ""} to='/service'>Service</NavLink>
    </div>
  )
}

export default Nav