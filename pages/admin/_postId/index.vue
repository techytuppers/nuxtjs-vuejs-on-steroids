<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
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
    return axios.get(process.env.baseUrl + '/posts/' + context.params.postId + '.json')
    .then(res => {
      console.log(process.env.baseUrl + '/posts' + context.params.postId + '.json');
      console.log(res.data);
      return {
        loadedPost: {...res.data, id: context.params.postId}
      }
    })
    .catch(e => context.error(e));
  },
  methods: {
    onSubmitted(loadedPost) {
      this.$store.dispatch('posts/editPost', loadedPost)
        .then(() => {
          this.$router.push('/admin')
        });
    }
  },
  head: {
    title: "Override the title tag"
  }
  // computed: {
    // Use this for offline individual post loading from static store content
    // loadedPost() {
    //   console.log(this.$route.params.id);
    //   return this.$store.getters['posts/getPost'](this.$route.params.postId);
    // }
  // }
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
