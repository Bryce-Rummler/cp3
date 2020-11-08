<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.png" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/add">
          <div class="menu-item browse">
            <p id="link">Add Movie</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <p>Steven Rummler | Bryce Rummler |  <a href="https://github.com/Bryce-Rummler/cp3"
      target="_blank">Github</a></p>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "brand side";
  margin-bottom: 50px;
}

#menu a {
  color: red;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: flex-start;
}

#brand img {
  height: 150px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#link {
  margin: auto;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100%;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: lightgreen;
  color: white;
  text-align: right;
  padding-right: 25px;
}
</style>
