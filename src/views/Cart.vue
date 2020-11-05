<template>
  <div>
    <div v-if="cartEmpty()">
      <h2>Cart is empty!</h2>
    </div>
    <div class="pure-menu pure-menu-horizontal">
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
           <a @click="surprise()" href="#" class="pure-menu-link"
              >Surprise me</a
            >
          </li>
        </ul>
      </div>
    <CartList :cart="cart" />
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
export default {
  name: "Cart",
  components: {
    CartList
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
    cartEmpty() {
      if (this.$root.$data.cart.length < 1) {
        return true;
      } else return false;
    },
    surprise() {
        let max = this.$root.$data.products.length;
        let min = 1;
        let randProductIndex = Math.floor(Math.random() * (max - min) + min);
        console.log(randProductIndex);
        let product = this.$root.$data.products.filter(product => product.id === randProductIndex);
        this.$root.$data.cart.push(product[0]);
    }
  }
};
</script>

<style>
h2 {
  text-align: center;
}

.pure-menu {
    text-align: center;
}
</style>