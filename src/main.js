import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.use(Toasted, {
  duration: 1500,
  position: 'top-right'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
