import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerMicroApps,loadMicroApp, start ,addGlobalUncaughtErrorHandler} from 'qiankun';
import appsConfig from './micro_app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerMicroApps(appsConfig,{
  beforeLoad: [
    (app:any) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    },
  ],
  beforeMount: [
    (app:any) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app:any) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
} as any);

// 出错时显示的内容
addGlobalUncaughtErrorHandler((event:any) => {
  // console.log(event);
  const { message } = event;
  if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
    console.log('微应用加载失败，请检查应用是否可运行');
  }
});


// 启动 qiankun
start();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
