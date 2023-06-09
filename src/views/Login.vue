<template>
  <div class="wrapper-4">
    <h3>Login</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" name="login" v-model="login" />
      <br />
      <br />
      <button type="submit">Log in</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let login = ref('');
const router = useRouter();
function onSubmit() {
  localStorage.setItem('auth', login.value);

  // We redirecting to the shared space, to peform required logic first
  router.push('/');
}
</script>
