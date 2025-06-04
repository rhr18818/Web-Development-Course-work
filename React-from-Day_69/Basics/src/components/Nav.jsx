import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div className="flex justify-center gap-5 pt-3 uppercase font-light tracking-wide">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/service'>Service</Link>
    </div>
  )
}

export default Nav