import AOS from 'aos'

export default ({ app }, inject) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init()
}
