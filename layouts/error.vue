<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <!-- Use a normal anchor incase our JS crashed, JS app might be dead -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>