const App = ()=>{
  let n = 12 //number
  let s = "Ratul" //string
  let b = false //boolean ---> will not show -- reserved for JS
  let nu = null //  ---> will not show -- reserved for JS
  let un = undefined //  ---> will not show -- reserved for JS
  let arr = [12,'Ratul',false,null]
  let arr2 = [<h1>Hey From Array ...</h1>,12,'Ratul']
  let obj = {
    name : 'Ratul',
    age : 35
  }
  return(
    <>
      <h1 style={{color: 'tomato', textAlign: 'center'}}>Hello {2+3}</h1>
      <h2 style={{textAlign: 'center'}}>Number: {n}</h2>
      <h2 style={{textAlign: 'center'}}>String: {s}</h2>
      <h2 style={{textAlign: 'center'}}>Boolean: {b}</h2>
      <h2 style={{textAlign: 'center'}}>Null: {nu}</h2>
      <h2 style={{textAlign: 'center'}}>Undefined: {un}</h2>
      <h2 style={{textAlign: 'center'}}>Array: {arr}</h2>
      <h2 style={{textAlign: 'center'}}>Array with JSX: {arr2}</h2>
      <h2 style={{textAlign: 'center'}}>Object: {obj.name} || {obj.age}</h2>

      
    </>
  )
}
export default App