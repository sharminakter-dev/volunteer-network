import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import './App.css'
import EventDetails from "./Components/EventDetails/EventDetails";
import UserEvents from "./Components/UserEvents/UserEvents";
import Auth from "./Components/Auth/Auth";
import SearchedEvent from "./Components/SearchedEvent/SearchedEvent";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
export const EventContext = createContext();

function App() {
  
  const [userInfo, setUserInfo] = useState({isLoggedIn:false});
  const [eventData, setEventData] = useState({});

  return (
  <UserContext.Provider value={[userInfo, setUserInfo]}>
    <EventContext.Provider value={[eventData, setEventData]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/eventDetails/:id" element={<EventDetails/>} />
          <Route element={<PrivateRoute/>} >
            <Route path="/my-events" element={<UserEvents/>} />
          </Route>
          <Route path="/auth" element={<Auth/>} />
          <Route path='/search' element={<SearchedEvent/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </EventContext.Provider>
  </UserContext.Provider>
  )
}

export default App
