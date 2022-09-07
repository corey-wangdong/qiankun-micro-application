import { createApp } from 'vue'
import App from './App.vue'
import './public-path';
import routes from './router'
import { createRouter, createWebHistory } from 'vue-router';

let router = null;
let instance = null;
function render(props = {}) {
  const { container, routerBase } = props;
  const base = window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL;
  router = createRouter({
    history: createWebHistory(base),
    routes
  })

  const RootDom = container ? container.querySelector('#app') : '#app';
  instance = createApp(App).use(router).mount(RootDom);
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  console.log('props---', props);
  console.log('instance---', instance);
  // instance.$destroy();
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;

  let RootDom = container ? container.querySelector('#root') : document.querySelector('#root');
  // instance = createApp(App).use(router).mount(RootDom);
  console.log('RootDom---', RootDom);
  RootDom = null;
}