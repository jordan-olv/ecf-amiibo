<template>
  <section id="header">
    <h1><RouterLink class="nav-link ina" to="/">AmiiVue</RouterLink></h1>
    <nav id="nav">
      <ul>
        <li>
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link" to="/liste">Liste Amiibo</RouterLink>
        </li>
      </ul>
    </nav>

    <section id="banner" v-if="isHome">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isHome = computed(() => {
  return route.path === "/";
});
</script>

<style lang="scss" scoped></style>
