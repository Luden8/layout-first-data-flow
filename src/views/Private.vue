<template>
  <div>
    <button @click="signOut">Log out</button>
    <h3>Private area</h3>
    <div v-if="dataLoading">We loading data inside the mounted</div>
    <router-view :data="loadedData"></router-view>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();

const loadedData = ref(null);
const dataLoading = ref(false);

onMounted(() => {
  dataLoading.value = true;
  setTimeout(() => {
    loadedData.value = 'Hello! Im loaded';
    dataLoading.value = false;
    router.push({
      name: 'account',
      params: {
        id: localStorage.getItem('auth'),
      },
    });
  }, 5000);
});
function signOut() {
  localStorage.removeItem('auth');
  router.push({
    name: 'login',
  });
}
</script>
