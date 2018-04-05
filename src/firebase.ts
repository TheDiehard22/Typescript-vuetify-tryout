import { initializeApp } from 'firebase'
import config from './firebase.config.json'

const firebaseapp: firebase.app.App = initializeApp(config)

export const db = firebaseapp.database()
