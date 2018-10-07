 // Initialize Firebase
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAJwFVfaH7Wl2lt61NgLRPwHqKoQ0ViIJA",
    authDomain: "torq-n-drag.firebaseapp.com",
    databaseURL: "https://torq-n-drag.firebaseio.com",
    projectId: "torq-n-drag",
    storageBucket: "torq-n-drag.appspot.com",
    messagingSenderId: "288870094140"
  };

firebase.initializeApp(config);

 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider,database as default };