<template>
  <div>
    <h2>这是 Home 页面</h2>
  </div>
</template>


<script>
import action from '../action';

export default {
  mounted() {
    action.onGlobalStateChange((state) => {
      console.log('子类获取----', state);
      // this.peopleLists = state.usersInfo;
    }, true)
  }
}
</script>