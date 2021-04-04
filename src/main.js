// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: () => ({
    formBlock: null
  }),
  components: { App },
  methods: {
    openForm (e) {
      e.preventDefault()
      let openMenuButton = document.getElementById('mobile_menu_icon_input')
      openMenuButton.checked = false
      this.formBlock.classList.add('visible_form')
    },
    closeForm () {
      this.formBlock.classList.remove('visible_form')
    }
  },
  mounted () {
    let form = document.querySelector('.request_form_block')
    this.formBlock = form
  },
  template: '<App/>'
})
