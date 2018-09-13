import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAv0KoduS70em1Rvo4tjT6WBMLC0gq-4tg',
  authDomain: 'in-ponto-2018.firebaseapp.com',
  databaseURL: 'https://in-ponto-2018.firebaseio.com',
  projectId: 'in-ponto-2018',
  storageBucket: 'in-ponto-2018.appspot.com',
  messagingSenderId: '829565391085',
}

export const firebaseInit = firebase.initializeApp(config)
export const database = firebase.database()
