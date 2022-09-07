import React,{useEffect} from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import './App.css';
import action from './action';

function App() {
  useEffect(() => {
    action.onGlobalStateChange((state) => {//监听公共状态的变化
    }, true);
  },[])

  return (
    <BrowserRouter>
        <div className='nav-box'>
          <NavLink to="/app-react">react 子项目</NavLink>
          <NavLink to="/app-vue">vue 子项目</NavLink>
        </div>
        <div id="container"></div>
    </BrowserRouter>
  );
}

export default App;
