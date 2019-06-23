<template>
  <section class="container">
    <nuxt-link to="/users" class="button">Users</nuxt-link>
    <br />
    <button @click="goToProducts" class="button">Products</button>
    <!-- OR -->
    <button @click="$router.push('/products')" class="button">Products</button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    goToProducts() {
      this.$router.push('/products')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.button {
  display: block;
  background-color: paleturquoise;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
</style>
