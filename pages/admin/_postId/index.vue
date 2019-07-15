<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get('https://nuxtjs-vuejs-on-steroids.firebaseio.com/posts/' + context.params.postId + '.json')
    .then(res => {
      console.log('https://nuxtjs-vuejs-on-steroids.firebaseio.com/posts' + context.params.postId + '.json');
      console.log(res.data);
      return {
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e));
  },
  computed: {
    // Use this for offline individual post loading from static store content
    // loadedPost() {
    //   console.log(this.$route.params.id);
    //   return this.$store.getters['posts/getPost'](this.$route.params.postId);
    // }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
