import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import './App.css'


function App() {
  const handleClick = ()=>{
    fetch('http://localhost:3000/')
    .then((res)=>res.json())
    .then(data=>console.log(data));
  }

  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
      {/* <button onClick={handleClick} >click</button> */}
  </BrowserRouter>
  )
}

export default App
