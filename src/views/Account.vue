<template>
  <div class="wrapper-5">
    <h3>Account</h3>
    Router param id:
    {{ route.params.id }}
    <p>Accounts resolved with data {{ props.data }}</p>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  data: '',
});
</script>
