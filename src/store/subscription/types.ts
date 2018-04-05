// TODO: What to do with the ID if I want it to be required sometimes
export interface Subscription {
	id?: string
	title: string
	amountPerMonth: number
	created?: Date
}

export interface SubscriptionState {
	subscriptions: Subscription[]
}
