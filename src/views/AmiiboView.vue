<template>
  <section id="main">
    <div class="container">
      <div class="row">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p>
              amiiboSeries: <b>{{ card[0].amiiboSeries }}</b> <br />
              character: {{ card[0].character }}<br />
              gameSeries: {{ card[0].gameSeries }}<br />
              type: {{ card[0].type }}
            </p>
          </section>
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>

            <ul class="divided">
              <li v-for="(rel, key) in card[0].release">
                {{ key }} : {{ rel }}
              </li>
            </ul>
          </section>
        </div>
        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a href="#" class="featured"><img :src="card[0].image" alt="" /></a>
            <header>
              <h2>{{ card[0].name }}</h2>
              <p>{{ card[0].type }}</p>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const router = useRoute();

const card = ref([]);
const fetchOneCards = async () => {
  const response = await axios.get(
    `https://www.amiiboapi.com/api/amiibo/?tail=${router.params.tail}`
  );
  card.value = response.data.amiibo;
};

onBeforeMount(async () => {
  await fetchOneCards();
});
</script>

<style lang="scss" scoped></style>
