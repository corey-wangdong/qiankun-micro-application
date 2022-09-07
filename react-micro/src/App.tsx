import React from 'react';
import './App.css';
import action from './action.js'

function App() {
  React.useEffect(() => {
    action.onGlobalStateChange((state:any) => {
      console.log('子类获取----react', state);
      // setUserList(state.usersInfo);
    }, true)
  }, []);
  return (
    <div className="App">
     hello micro react 
    </div>
  );
}

export default App;
