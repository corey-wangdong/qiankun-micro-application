import React,{useEffect} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import action from './action';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    action.onGlobalStateChange((state) => {//监听公共状态的变化
      console.log('当前state的值是----', state);
    }, true);
  },[])
  
  return (
    <BrowserRouter>
        <div>
          <NavLink to="/micro-react"/>
        </div>
      <Routes>
        <Route path='/micro-react' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
