import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import VueFire from 'vuefire'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, VueFire)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
