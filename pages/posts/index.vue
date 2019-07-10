<template>
  <div class="posts-page">
    <PostList :posts="showMeThePosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  computed: {
    showMeThePosts () {
      return this.$store.getters[`posts/loadedPosts`];
    }
  },
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
