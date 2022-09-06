/*
 * @Author: wangDong Xu
 * @Date: 2022-09-06 17:04:13
 * @LastEditors: wangDong Xu
 * @LastEditTime: 2022-09-06 17:04:14
 * @Description: file content
 * @FilePath: /qiankun-micro-application/main-react/src/action.js
 * @motto: It's not hard to give up, but it must be cool to persist.
 */
import { initGlobalState } from "qiankun"; 

const initialState = {
    //这里写初始化数据
    usersInfo: [
        {
            userName: '张三',
            userId: '1',
        },
        {
            userName: '李四',
            userId: '2',
        },
    ],
  };

const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {//监听公共状态的变化
    console.log("主应用: 变更前");
    console.log(prev);
    console.log("主应用: 变更后");
    console.log(state);
});

export default actions;


