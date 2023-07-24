// import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCVG9ms1no1DEExqTRmHtuDLtauNum7F2k',
  authDomain: 'social-1aece.firebaseapp.com',
  projectId: 'social-1aece',
  storageBucket: 'social-1aece.appspot.com',
  messagingSenderId: '734705580129',
  appId: '1:734705580129:web:fa40f7792ddc48c4e25220',
  measurementId: 'G-B3CQ01YSM9'
}

// const analytics = getAnalytics(app)

const firebase = Firebase.initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const { FieldValue } = Firebase.firestore
const deleteDoc = firebase.firestore
const doc = firebase.firestore
const db = firebase.firestore()
// const storage = firebase.storage()

export { firebase, FieldValue, deleteDoc, doc, db, auth }
