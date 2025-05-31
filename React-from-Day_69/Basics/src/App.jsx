
const App = ()=>{
  function handleClick(){
    alert("Button Clicked")
  }
  const handleParamClick = (msg)=>{
    alert(msg)
  }
  // function wrapperFuntion(){
  //   handleParamClick("Hello from Param Function")
  // }

  /// optimized one !!

  //const wrapperFuntion = ()=> handleParamClick("Hello from Param Function")

  return(
    <>
      <h1 style={{color: 'tomato', textAlign: 'center'}}>Hello {2+3}</h1>
      <h2 style={{color: 'tomato', textAlign: 'center'}}>Hi</h2>
      <button onClick={handleClick}>Click</button>
      {/* <button onClick={wrapperFuntion}>Click-2</button> */}
      <button onClick={()=> handleParamClick("Hello from Param Function")}>Click-2</button>
    </>
  )
}
//console.log("checking");
// export const a = "Hello"
// export const b = "World"
export default App