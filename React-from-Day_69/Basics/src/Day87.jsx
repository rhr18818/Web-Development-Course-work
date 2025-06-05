import Navbar from "./components/Navbar"
import Reciperoutes from "./routes/Reciperoutes"

const Day87 = () => {
  return (
    <div className="w-full min-h-screen bg-gray-800 text-white pt-7 px-[8%] overflow-auto">
        <Navbar/>
        <Reciperoutes/>
    </div>
  )
}

export default Day87