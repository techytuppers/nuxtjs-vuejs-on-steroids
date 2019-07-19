import axios from "axios";

export const state = () => ({
  loadedPosts: []
})

export const mutations = ({
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPost.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
    state.loadedPosts[postIndex] = editedPost
  }
})

export const actions = ({
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts);
  },
  addPost(vuexContext, post) {
    const createdPost = {
      ...post,
      updatedDate : new Date()
    }
    return axios
    .post('https://nuxtjs-vuejs-on-steroids.firebaseio.com/posts.json', createdPost)
    .then(result => {
      vuexContext.commit('addPost', {...createdPost, id: result.data.name})
    })
    .catch(e => console.log(e));
  },
  editPost(vuexContext, editedPost) {
    return axios.put('https://nuxtjs-vuejs-on-steroids.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost);
      })
      .catch(e => console.log(e))
  }
})

export const getters = ({
  loadedPosts(state) {
    return state.loadedPosts
  },
  // To get get post from loaded history
  getPost: (state) => (payload) => {
      return state.loadedPosts.find(post => post.id == payload);
    }
})

