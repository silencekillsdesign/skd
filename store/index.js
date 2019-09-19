import Vuex from "vuex";

export const state = {
  pageTitle: "",
  pageTitleImage: "/img/pagetitle-bg@2x.jpg"
};

export const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.pageTitle = title;
  },
  SET_PAGE_TITLE_IMAGE(state, image) {
    state.pageTitleImage = image;
  }
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations
  });
};

export default createStore;
