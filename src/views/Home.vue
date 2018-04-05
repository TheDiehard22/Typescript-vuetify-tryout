<template>
  <v-layout >
    <v-flex md4>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Voeg betaling toe</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet exercitationem facere tenetur recusandae at doloremque modi ex.</div>
        </v-card-title>
        <section>
        </section>
        <v-card-text v-cloak>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field label="Titel" v-model="title"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Bedrag per maand" v-model="amountPerMonth"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="success" @click.prevent="addSubscription()">voeg betaling toe</v-btn>
          <v-btn flat color="error">annuleer</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex md8>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card>
            {{ subscriptionState }}
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { State, Action, Getter, Mutation } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import { SubscriptionState, Subscription } from '../store/subscription/types'
import { state } from '@/store/subscription'
import { MutationMethod } from 'vuex'

// TODO: node modules resolver in vue files fixen
// Kijken naar waarom interfaces niet automatisch geupdated worden
@Component
export default class Home extends Vue {
	@State(state => state.subscription)
	public subscriptionState: SubscriptionState
	@Mutation('subscription/ADD_SUBSCRIPTION')
	public ADD_SUBSCRIPTION: MutationMethod

	public title: string = ''
	public amountPerMonth: number = 0

	public addSubscription() {
		const subscription: Subscription = {
			title: this.title,
			amountPerMonth: this.amountPerMonth
		}
		this.ADD_SUBSCRIPTION(subscription)
	}
}
</script>
