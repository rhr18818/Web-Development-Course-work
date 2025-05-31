import { useState } from "react"

const Json = () => {
  const profiles = [
    {name: 'Ratul',age:23},
    {name: 'Hasan',age:22},
    {name: 'Rabbi',age:33},
  ]
  const updatedProfiles = profiles.map((profile,index)=>{
    return <li key={index}>
              <h2>Name: {profile.name}</h2>
              <h3>Age: {profile.age}</h3>
          </li>
    //console.log(profile.name,profile.age);
  })
  return (
    <>
      <h1>Rendering Json</h1>
      <ol>{updatedProfiles}</ol>
    </>
  )
}
export default Json

const Usestate = ()=>{
  //let userName = 'Ratul'
  const [userName, setuserName] = useState("Ratul")
  const changeHandler = ()=>{//Asyncronous
    setuserName('Rabbi')
    //console.log(userName);//if log here it will rtain ---> Ratul--->synchonus
    
  }
  console.log(userName);
  return (
    <>
      <h1>UserName</h1>
      <h2>{userName}</h2>
      <button onClick={changeHandler}>Change Name</button>
    </>
  )
}

export const A = Usestate