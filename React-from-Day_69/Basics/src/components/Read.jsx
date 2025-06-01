
const Read = (props) => {
    console.log(props);
    const users = props.users
    const Data = users.map((profile,index)=>{
    return <li key={index}>
        <span>{profile.name} </span>
        <span> ---{profile.age}</span>
    </li>
  })

  return (
    <>
        <h1>User Data</h1>
        <ol>{Data}</ol>
    </>
  )
}

export default Read