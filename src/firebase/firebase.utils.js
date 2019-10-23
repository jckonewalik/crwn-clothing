import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyA3Smo6bb1xHt3t6w-90qCpitDDy-cSTJo',
  authDomain: 'crwn-db-7885d.firebaseapp.com',
  databaseURL: 'https://crwn-db-7885d.firebaseio.com',
  projectId: 'crwn-db-7885d',
  storageBucket: 'crwn-db-7885d.appspot.com',
  messagingSenderId: '479948046941',
  appId: '1:479948046941:web:5c4028fa10ad804f3043b4',
  measurementId: 'G-QDQMES4TP5',
}
firebase.initializeApp(config)

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
