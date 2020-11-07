<template>
  <div>
    <input v-model="title" placeholder="Movie title" />
    <input v-model="releaseYear" placeholder="Release year" />
    <select v-model="rating">
      <option disabled value="">Rating</option>
      <option>G</option>
      <option>PG</option>
      <option>PG-13</option>
      <option>R</option>
    </select>
    <button v-on:click="submit()">Submit</button>
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      title: "",
      releaseYear: "",
      rating: ""
    };
  },
  methods: {
    submit() {
      if (!isNaN(this.releaseYear)) {
        let movie = {
          id: this.$root.$data.movies.length + 1,
          title: this.title,
          releaseYear: parseInt(this.releaseYear),
          rating: this.rating,
          image: "cars.jpg",
          stars: 5
        };
        this.$root.$data.movies.push(movie);
        this.releaseYear = "";
        this.title = "";
        this.rating = "";
        alert("Movie added succesfully");
      } else {
        alert("Please enter a valid year");
      }
    }
  }
};
</script>