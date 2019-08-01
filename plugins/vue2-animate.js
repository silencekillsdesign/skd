import Vue2animate from 'vue2animate'

export default ({ app }, inject) => {
  // eslint-disable-next-line new-cap
  app.vue2animate = new vue2animate.init()
}
