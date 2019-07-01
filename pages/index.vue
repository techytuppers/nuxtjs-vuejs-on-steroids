<template>
  <div class="homepage"> 
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
      <PostPreview 
        id="1"
        title="Well hello there!"
        previewText="This is my first post!"
        thumbnail="http://placekitten.com/700/400"
      />
      <PostPreview 
        id="2"
        title="Hello there!"
        previewText="This is my second post!"
        thumbnail="http://placekitten.com/700/400"
      />
      <PostPreview 
        id="3"
        title="Hello there again!"
        previewText="This is my third post!"
        thumbnail="http://placekitten.com/700/400"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview';
export default {
  components: {
    PostPreview
  }
}
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
