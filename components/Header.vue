
<template>
  <header class="header">
    <ul class="nav-items">
      <li> 
        <nuxt-link to="/" class="button">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users" class="button">Users</nuxt-link>
      </li>
      <li>
        <button @click="goToProducts" class="button">Products</button>
      </li>
        <!-- OR -->
      <li>
        <button @click="$router.push('/products')" class="button">Products</button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    goToProducts() {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:pink;
  }

  .nav-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
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
