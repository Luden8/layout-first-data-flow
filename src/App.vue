<template>
  <div class="wrapper">
    <pre>{{ route.fullPath }}</pre>
    <h1>App.vue</h1>
    <!-- <n-input-group>
    <n-input
      :style="{ width: '40%' }"
      v-model:value="fruit"
      placeholder="input a fruit"
      :loading="submiting"
    />
    <n-button type="primary" ghost @click="submitFruit" :disabled="submiting"
      >Submit</n-button
    >
  </n-input-group>

  <ul v-if="fruitsList.length > 0">
    <li v-for="item in fruitsList" :key="item">{{ item }}</li>
  </ul> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
// localStorage.setItem('auth', true);
// import { ref } from 'vue';
// import { addFruit } from './api.js';
// import { useRequest } from 'alova';

// const fruit = ref('');
// const fruitsList = ref([]);
// const {
//   loading: submiting,
//   send,
//   onSuccess,
// } = useRequest(() => addFruit(fruit.value), {
//   immediate: false,
// });
// onSuccess(() => {
//   fruitsList.value.push(fruit.value);
//   fruit.value = '';
// });

// const submitFruit = () => {
//   if (!fruit.value) {
//     alert('Please input a fruit');
//     return;
//   }
//   send();
// };
</script>

<style>
#app {
}
.wrapper {
  border: 4px solid green;
  padding: 10px;
}
.wrapper-1 {
  border: 4px solid red;
  padding: 10px;
}
.wrapper-3 {
  border: 4px solid black;
  padding: 10px;
}
.wrapper-4 {
  border: 4px solid orange;
  padding: 10px;
}
</style>
