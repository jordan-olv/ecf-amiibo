<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div id="page-wrapper">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped lang="scss"></style>
