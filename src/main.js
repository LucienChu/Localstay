import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import globals from './globals'
import Popper from 'popper.js'
import VueTypedJs from 'vue-typed-js'

import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import VueSession from 'vue-session'

export const getStartFormBus = new Vue();
// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.use(VueFormWizard)
Vue.use(VueSession)

// Global RTL flag
Vue.mixin({
  data: globals
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
