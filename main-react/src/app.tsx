import React,{useEffect} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './App.css';
import action from './action';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    action.onGlobalStateChange((state) => {//监听公共状态的变化
      console.log('当前state的值是----++', state);
    }, true);
  },[])

  return (
    <BrowserRouter>
        <h2>main-react</h2>
        <div>
          <NavLink to="/app-react">react 子项目</NavLink>
        </div>
      <Routes>
        <Route path='/app-react' element={<Home/>}/>
      </Routes>
      <div id="container"></div>
    </BrowserRouter>
  );
}

export default App;
