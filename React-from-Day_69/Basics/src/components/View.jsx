
const View = (props) => {
    const todos = props.todos
    const renderTodo = todos.map(todo =>{
        return <li style={{color: todo.isCompleted ? 'green': 'tomato'}} key={todo.id}>{todo.title}</li>
    })
  return (
    <>
        <h2>Created-Task's</h2>
        <ul>
            {renderTodo}
        </ul>
    </>
  )
}

export default View