import PostService from "@/services/PostService.js";
export const state = () => ({
  posts: []
});
export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  }
};
export const actions = {
  fetchPosts({ commit }) {
    return PostService.getPosts().then(response => {
      commit("SET_POSTS", response.data);
    });
  }
};
