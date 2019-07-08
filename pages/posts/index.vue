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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => 
      resolve({
        otherPosts: [
          {id: "3", title: "Another 3 title", previewText: "Some preview text", thumbnail: "http://placekitten.com/400/400"},
          {id: "5", title: "Another 5 title", previewText: "Some preview text", thumbnail: "http://placekitten.com/400/500"},
        ]
      }), 1000);
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e);
    });
  },
  created() {
    this.$store.dispatch('posts/setPosts', this.otherPosts);
  },
  computed: {
    showMeThePosts () {
      return this.$store.state.posts.loadedPosts
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
