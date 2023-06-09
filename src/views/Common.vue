<template>
  <div class="wrapper-1">
    <h2>Common initial wrapper</h2>
    <p>This component always renders first</p>
    <div class="wrapper-3">
      <h3>This is common's router view</h3>
      <p>It doesnt have default children</p>
      <router-view></router-view>
    </div>
  </div>
</template>
