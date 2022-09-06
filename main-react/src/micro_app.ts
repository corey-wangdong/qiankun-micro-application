const apps = [
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue',
  },
  {
    name: 'angularApp',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app-angular',
  }
];

export default apps;
