import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'
const Day82 = () => {
    //const [todos, settodos] = useContext(todoContext)
    //console.log(todos);
  return (
    <div className='w-screen h-screen p-6 bg-gray-800 text-white text-xl'>
        {/* <h1>Hello</h1> */}
        <Nav/>
        <Mainroutes/>
    </div>
  )
}

export default Day82


