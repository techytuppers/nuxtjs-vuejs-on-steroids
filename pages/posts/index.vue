<template>
  <div class="posts-page">
    <PostList :posts="otherPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        otherPosts: [
          {id: "3", title: "Another 3 title", previewText: "Some preview text", thumbnail: "http://placekitten.com/400/400"},
          {id: "5", title: "Another 5 title", previewText: "Some preview text", thumbnail: "http://placekitten.com/400/500"},
        ]
      }), 3000)
    })
  }
}
</script>


<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
