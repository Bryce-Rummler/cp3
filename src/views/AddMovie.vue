<template>
  <div id="container">
    <div id="form">
      <input v-model="title" placeholder="Movie title" class="form-item" />
      <br />
      <input
        v-model="releaseYear"
        placeholder="Release year"
        class="form-item"
      />
      <br />
      <select v-model="rating" class="form-item">
        <option disabled value="">Rating</option>
        <option>G</option>
        <option>PG</option>
        <option>PG-13</option>
        <option>R</option>
      </select>
      <br />
      <button v-on:click="submit()" class="form-item">Submit</button>
    </div>
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

<style scoped>
#container {
    display: flex;
}

#form {
display: flex;
flex-direction: column;
  margin: auto;
  background-color: lightgreen;
  padding: 20px;
}

.form-item {
  margin: 10px;
}
</style>