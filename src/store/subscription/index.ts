import { Module, ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '../types'
import { SubscriptionState, Subscription } from './types'
import axios from 'axios'
import { db } from '../../firebase'

const namespaced: boolean = true

export const state: SubscriptionState = {
	subscriptions: []
}

// actions
const actions: ActionTree<SubscriptionState, RootState> = {
	fetchData({ commit }): any {
		axios.get('').then(() => {})
	}
}

const mutations: MutationTree<SubscriptionState> = {
	ADD_SUBSCRIPTION(state, payload: Subscription) {
		const obj: Subscription = {
			title: payload.title,
			amountPerMonth: 0,
			created: new Date()
		}

		db
			.ref('subscriptions')
			.push(obj)
			.then(
				resp => {
					// merge returned firebase ID in object
					state.subscriptions.push(payload)
				},
				error => {
					console.log(error)
				}
			)
	}
}

const getters: GetterTree<SubscriptionState, RootState> = {}

export const subscription: Module<SubscriptionState, RootState> = {
	namespaced,
	state,
	actions,
	getters,
	mutations
}
