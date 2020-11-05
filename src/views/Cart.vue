<template>
  <div>
    <div v-if="cartEmpty()">
        <h2>Cart is empty!</h2>
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
          }
          else return false;
      }
  }
};
</script>

<style>
h2 {
    text-align: center;
}
</style>