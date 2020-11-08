<template>
  <div id="info">
      <h1>{{ movie.title }}</h1>
      <h2>{{ movie.rating }}</h2>
      <p>{{ movie.releaseYear }}</p>
      <img :src="'/images/movies/' + movie.image"  id="image" />
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

<style scoped>
#info {
    text-align: center;
}

#image {
    width: 200px;
}
</style>