<template>
				<section id="main">
					<div class="container">

						<!-- Content -->
							<article class="box post">
								
								<header>
									<h2>Ma Collection</h2>
									<p>{{ allCards.length }} amiibos</p>
								</header>
								<p>
									<table>
										<tr>
										  <th>Character</th>
										  <th>game Series</th>
										  <th>amiibo Series</th>
										  <th>Action</th>
										</tr>
										<tr v-for="card in allCards">
										  <td>{{ card.name }}</td>
										  <td>{{ card.gameSeries }}</td>
										  <td>{{ card.amiiboSeries }}</td>
										  <td><button @click="showCard(card.tail)">voir</button></td>
										</tr>
									</table>
								</p>
								
							</article>

					</div>
				</section>
</template>

<script setup>
import axios from "axios";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const allCards = ref([]);
const fetchAllCards = async () => {
  const response = await axios.get("https://www.amiiboapi.com/api/amiibo/");
  allCards.value = response.data.amiibo;
};

onBeforeMount(async () => {
  await fetchAllCards();
});

const showCard = (tail) => {
  router.push({ path: `/amiibo/${tail}`})
};
</script>

<style lang="scss" scoped></style>
