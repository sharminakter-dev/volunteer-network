import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleClick = ()=>{
    // console.log('clicked');
    fetch('http://localhost:3000/')
    .then((res)=>res.json())
    .then(data=>console.log(data));
  }

  return (
   <div>
      <button onClick={handleClick} >click</button>
   </div>
  )
}

export default App
