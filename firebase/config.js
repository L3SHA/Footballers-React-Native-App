import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC9-txolgBSQzlet7_t_wZHcfiB10Bk4Ks",
  authDomain: "football-players-29594.firebaseapp.com",
  projectId: "football-players-29594",
  databaseURL: "https://football-players-29594.firebaseio.com",
  storageBucket: "football-players-29594.appspot.com",
  messagingSenderId: "465844985781",
  appId: "1:465844985781:web:132d9461dd092c46ca83fc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);
};

export default firebase;