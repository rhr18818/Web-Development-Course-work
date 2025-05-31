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



