export const state = () => ({
  loadedPosts: []
})

export const mutations = ({
  setPosts(state, posts) {
    state.loadedPosts = posts
  }
})

export const actions = ({
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts);
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

