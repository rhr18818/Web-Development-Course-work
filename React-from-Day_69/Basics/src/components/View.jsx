import { toast } from "react-toastify"
import "./View.css"
import { useContext } from "react"
import { todoContext } from "./Wrapper"
// import style from "./View.module.css"
const View = () => {
    // const todos = props.todos
    // const settodos = props.settodos

    const s = useContext(todoContext)
    console.log(s);
    const [todos, settodos] = useContext(todoContext)
    

    const deleteHandler = (id)=>{
        //console.log("Delete Pressed..! ",todos.filter(todo => todo.id != id));
        const filteredTodos = todos.filter(todo => todo.id != id)
        settodos(filteredTodos)
        toast.error("Task Deleted")
    }
    function allClear(){
        settodos([])
    //    const alldelete = todos.filter(todo => todo.id == 0)/// not working ---> empty string put in settodos
    //     settodos(alldelete)
    }
    const renderTodo = todos.map(todo =>{
        return <li className="flex justify-between items-center py-1 px-4 bg-gray-700 rounded-md my-1.5" key={todo.id}>
                {todo.title} <span className="cursor-pointer py-[4px] px-4 bg-red-500 rounded font-thin" onClick={()=>deleteHandler(todo.id)}>Delete</span>
            </li>
    })
    // const buttonCss = {
    //     border:"none",
    //     background:"tomato",
    //     padding: "6px 20px",
    //     borderRadius:"2px",
    //     color:"white",
    //     fontWeight:"bold"
    // }
    
    
  return (
    <div className="w-full md:w-[40%]">
        {/* <h2 className={style.h2Color}>Created-Task's</h2> */}
        <h2 className="'text-white text-2xl font-semibold mb-4 text-white border-b-1 pb-3"><span className='text-orange-400' >Created</span>-Task's</h2>
        <ul className="py-2 px-3 border-1 rounded border-gray-600 font-medium text-base text-white">
            {renderTodo}
        </ul>

        <br />
        {/* <button style={buttonCss} onClick={allClear}> ! All Clear</button> */}
        <button className='cursor-pointer bg-red-600 hover:bg-red-700 py-1.5 px-6 font-semibold text-white text-[1rem] rounded' onClick={allClear}> ! All Clear</button>
    </div>
  )
}

export default View