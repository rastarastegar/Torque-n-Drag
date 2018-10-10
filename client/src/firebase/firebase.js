 // Initialize Firebase
import * as firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyAJwFVfaH7Wl2lt61NgLRPwHqKoQ0ViIJA",
//   authDomain: "torq-n-drag.firebaseapp.com",
//   databaseURL: "https://torq-n-drag.firebaseio.com",
//   projectId: "torq-n-drag",
//   storageBucket: "torq-n-drag.appspot.com",
//   messagingSenderId: "288870094140"
// };

// var config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
//   };

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  };

  

firebase.initializeApp(config);

 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider,database as default };