import "./View.css"
// import style from "./View.module.css"
const View = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const deleteHandler = (id)=>{
        //console.log("Delete Pressed..! ",todos.filter(todo => todo.id != id));
        const filteredTodos = todos.filter(todo => todo.id != id)
        settodos(filteredTodos)
    }
    function allClear(){
        settodos([])
    //    const alldelete = todos.filter(todo => todo.id == 0)/// not working ---> empty string put in settodos
    //     settodos(alldelete)
    }
    const renderTodo = todos.map(todo =>{
        return <li style={{color: todo.isCompleted ? 'green': 'tomato'}} key={todo.id}>
                {todo.title} <span style={{cursor:"pointer"}} onClick={()=>deleteHandler(todo.id)}> | ×Delete</span>
            </li>
    })
    const buttonCss = {
        border:"none",
        background:"tomato",
        padding: "6px 20px",
        borderRadius:"2px",
        color:"white",
        fontWeight:"bold"
    }
    
    
  return (
    <div className="w-[40%]">
        {/* <h2 className={style.h2Color}>Created-Task's</h2> */}
        <h2 className="'text-white text-2xl font-semibold mb-4 text-white border-b-1 pb-3">Created-Task's</h2>
        <ul>
            {renderTodo}
        </ul>

        <br />
        <button style={buttonCss} onClick={allClear}> ! All Clear</button>
    </div>
  )
}

export default View