// Either pages/users/_id.vue OR pages/users/_id/index.vue
<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate (data) {
    // Checks for 1, but in Number format (URL it will be a string)
    // return data.params.id === 1

    // Checks for 1, but without Type
    // return data.params.id == 1

    // Checks for any number using regex
    return /^\d+$/g.test(data.params.id);
  },
  layout: 'users'
}
</script>
