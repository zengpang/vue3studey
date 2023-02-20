<script setup>
import Flexselfadaption from './components/flex布局实现自适应/Flexselfadaption.vue';
import HelloWorld from './components/HelloWorld.vue'
import Remandresizeselfadaption from './components/使用rem和resize实现自适应/Remandresizeselfadaption.vue';
import CompationAPI from './components/函数式编程示例/CompationAPI.vue';
import Multirender from './components/十万行渲染示例/Multirender.vue';
import OptionsAPI from './components/组合式API示例/OptionsAPI.vue';

</script>

<template>
 
  <!-- <CompationAPI msg="你好"/> -->
  <!-- <Flexselfadaption></Flexselfadaption> -->
  <!-- <Remandresizeselfadaption></Remandresizeselfadaption> -->
  <Multirender></Multirender>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
