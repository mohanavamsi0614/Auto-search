import { useState,useRef } from 'react'
import './App.css'
import data from './data'
function App() {
  const [state, setstate] = useState("")
  let refe=useRef()
  document.body.onkeydown=(e)=>{
    if(e.key=="Escape"){
    refe.current.style.display="none"
    console.log("Escape")
    }}
  return (
    <div>
      <input onChange={(e)=>{setstate(e.target.value)
      refe.current.style.display="block"
      }}
       />
      <div ref={refe}>
        {data.filter((i)=>{return state!==""?i.name.toLowerCase().startsWith(state.toLowerCase()):0}).map((i,ind)=>
        <h1 key={ind} >{i.name}</h1>)
        }
      </div>
    </div>
  )
}

export default App
