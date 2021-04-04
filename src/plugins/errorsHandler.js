import Vue from 'vue'

export default () => {
  Vue.config.errorHandler = function (err, vm, info) {
    console.error('Error errorHandler', err, vm, info)
  }

  window.onunhandledrejection = (event) => {
    console.error('Error onunhandledrejection', event)
  }
}
