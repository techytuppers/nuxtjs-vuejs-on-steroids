import axios from "axios";

export const state = () => ({
})

export const actions = ({
  nuxtServerInit(vuexContext, context) {
    return axios.get('https://nuxtjs-vuejs-on-steroids.firebaseio.com/posts.json')
      .then(res => {
        console.log(res.data);
        const postArray = [];
        for (const key in res.data) {
          postArray.push({ ...res.data[key], id: key}); 
        }
        vuexContext.commit('posts/setPosts', postArray);
      })
      .catch(e => context.error(e));
  },
})

// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     vuexContext.commit("posts/setPosts", [
//       {id: "1", title: "First post!", previewText: "Some preview text", thumbnail: "http://placekitten.com/400/400"},
//       {id: "2", title: "Second post!", previewText: "Some preview text", thumbnail: "http://placekitten.com/500/500"},
//       {id: "3", title: "Third post!", previewText: "Some preview text", thumbnail: "http://placekitten.com/600/600"},
//       {id: "4", title: "Fourth post!", previewText: "Some preview text", thumbnail: "http://placekitten.com/700/700"},
//       {id: "5", title: "Fifth post!", previewText: "Some preview text", thumbnail: "http://placekitten.com/800/800"}
//     ]);
//     resolve();
//   }, 1000);
// });