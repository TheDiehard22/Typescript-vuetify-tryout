import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { subscription } from './subscription/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
	state: {
		version: '1.0.0'
	},
	modules: {
		subscription
	}
}

export default new Vuex.Store<RootState>(store)
