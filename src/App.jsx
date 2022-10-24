import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header.jsx';
import SiteBar from './components/SiteBar.jsx';
import Player from './pages/Player.jsx';
import Home from "./pages/Home.jsx"
import Channel from "./pages/Channel.jsx"
import Login from './pages/Login.jsx';
import {Routes, Route, Navigate} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './context/ContextApi';


function App() {

  const {value} = useContext(AuthContext)

  console.log(value);

  return (
    <div className='home_container'>
     
     
      {
        value
        ?
        (
         <>
          <Header/>
          <div className='d-flex'>
            <SiteBar/>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/player' element = {<Player/>}/>
              <Route path='/channel' element = {<Channel/>}/>
              <Route path='*' element = {<Navigate to= "/"/>}/>
            </Routes>
          </div></>
        )
        :
        <Routes>
          <Route path='/login' element ={<Login/>}/>
          <Route path='*' element = {<Navigate to= "/login"/>}/>
        </Routes>
      }
     

    </div>
  );
}

export default App;
