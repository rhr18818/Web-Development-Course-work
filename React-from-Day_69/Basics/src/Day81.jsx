
import Make from './components/Make';
import View from './components/View';

const Day81 = () => {
    //const [todos, settodos] = useContext(todoContext)
    //console.log(todos);
  return (
    <div className='w-screen h-screen p-6 bg-gray-800'>

        <h1 className='text-4xl mb-[3rem] text-center text-amber-400 font-bold border-b-1 pb-3'>To-Do</h1> 
        <div className='md:flex justify-between'>
        <Make />
        <br />
        
        <View />
        </div>
    </div>
  )
}

export default Day81


