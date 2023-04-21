<template>
  <section id="intro" class="container">
    <div class="row">
      <TheCard v-for="card in ThreeCards" :card="card" :key="card.tail" />
    </div>
    <footer>
      <ul class="actions">
        <li>
          <router-link to="liste" class="button large"
            >Liste complète</router-link
          >
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup>
import TheCard from "./TheCard.vue";
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const ThreeCards = ref([]);
const fetchOneCards = async (element) => {
  const response = await axios.get(
    `https://www.amiiboapi.com/api/amiibo/?name=${element}`
  );
  ThreeCards.value.push(response.data.amiibo);
};

const liste = ["Mewtwo", "Pikachu", "Link"];

onBeforeMount(() => {
  liste.forEach(async (element) => {
    await fetchOneCards(element);
  });
});
</script>

<style lang="scss" scoped></style>
