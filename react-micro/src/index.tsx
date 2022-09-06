import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function render(props:any) {
  const { container,routerBase } = props;
  const RootDom= container ? container.querySelector('#root') : document.querySelector('#root');
  const root = ReactDOM.createRoot(RootDom);
  const base = (window as any).__POWERED_BY_QIANKUN__ ? routerBase : '/';
  console.log('base----',base);

  root.render(
    <Router basename={base}>
      <App />
    </Router>
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props:any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props:any) {
  const { container } = props;
  const RootDom= container ? container.querySelector('#root') : document.querySelector('#root');
  const root = ReactDOM.createRoot(RootDom);
  root.unmount();
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
