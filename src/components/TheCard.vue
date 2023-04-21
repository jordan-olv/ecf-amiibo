<template>
  <div class="col-4 col-12-medium" @click="goToCard(card[0].tail)">
    <section class="middle">
      <img :src="card[0].image" />
      <header>
        <h2>{{ card[0].character }}</h2>
      </header>
      <p>{{ card[0].gameSeries }}</p>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const goToCard = (tail) => {
  router.push({ path: `/amiibo/${tail}` });
};
</script>

<style lang="scss" scoped></style>
