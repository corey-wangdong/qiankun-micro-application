(function () {
  // 用来判断是否运行在乾坤的框架下
  if (window.__POWERED_BY_QIANKUN__) {
    console.log('运行在乾坤的框架下: vue 子项目');
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
})();
