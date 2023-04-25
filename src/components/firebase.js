import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5tuDpF6_zhAm3g1GN5c788xgJRWkiyPY',
  authDomain: 'practice-a938b.firebaseapp.com',
  projectId: 'practice-a938b',
  storageBucket: 'practice-a938b.appspot.com',
  messagingSenderId: '544604428468',
  appId: '1:544604428468:web:4eb2d509fa5ed707af5fe1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
