<template>
  <div class="wrapper">
    <div class="products">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <div class="info">
          <h1>{{ movie.title }}</h1>
          <h2>{{ movie.rating }}</h2>
          <h2>{{ movie.releaseYear }}</h2>
          <router-link :to="{ name: 'ViewMovie', params: { movie: movie } }"
            >Details</router-link
          >
        </div>
        <div class="image">
          <img :src="'/images/movies/' + movie.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: Array
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.movie img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: lightgreen;
  color: #000;
  padding: 10px 30px;
  height: 175px;
  text-align: center;
}

.info h1 {
  font-size: 28px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>