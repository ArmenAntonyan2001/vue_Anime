<template>
  <v-card>
    <div class="anime_headr">
      <div class="icon">
        <h1><span class="a1">Anime</span> <span class="a2">World</span></h1>
      </div>
    </div>
    <v-tabs v-model="tab" color="red">
      <p>
        <a href="#/Anime" class="text-decoration-none"><v-tab>Anime</v-tab></a>
      </p>
      <p>
        <a href="#/Manga" class="text-decoration-none"><v-tab>Manga</v-tab></a>
      </p>
    </v-tabs></v-card
  >

  <div class="contener"><router-view></router-view></div>
  <div class="burger">
    <Serch></Serch>
  </div>
</template>

<script>
import Serch from './components/Serch.vue'
export default {
  data: () => ({
    tab: null,
  }),
  components: {
    Serch
  }
}
</script>
<style>
.contener {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-card {
  display: flex;
  justify-content: space-between;
}
.anime_headr {
  display: flex;
}
.anime_headr > div {
  margin-left: 20px;
}
.icon {
  font-family: Arial, Helvetica, sans-serif;
}
.a1 {
  color: brown;
}
.a2 {
  color: royalblue;
}
</style>