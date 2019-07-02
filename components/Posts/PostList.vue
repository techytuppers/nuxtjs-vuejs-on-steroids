<template>
  <section class="post-list">
    <PostPreview 
      id="1"
      :is-admin="isAdmin"
      title="Well hello there!"
      previewText="This is my first post!"
      thumbnail="http://placekitten.com/700/400"
    />
    <PostPreview 
      id="2"
      :is-admin="isAdmin"
      title="Hello there!"
      previewText="This is my second post!"
      thumbnail="http://placekitten.com/700/400"
    />
    <PostPreview 
      id="3"
      :is-admin="isAdmin"
      title="Hello there again!"
      previewText="This is my third post!"
      thumbnail="http://placekitten.com/700/400"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
