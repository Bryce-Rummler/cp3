<template>
  <div>
    <div class="info">
      <h1>{{ movie.title }}</h1>
      <h2>{{ movie.rating }}</h2>
      <p>{{ movie.releaseYear }}</p>
    </div>
    <div class="image">
      <img :src="'/images/movies/' + movie.image" />
    </div>
    <div class="price">
      <p>todo: display stars {{ movie.stars }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewMovie",
  computed: {
    movie() {
      return this.$route.params.movie;
    }
  }
};
</script>