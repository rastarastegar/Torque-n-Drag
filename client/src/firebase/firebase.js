 // Initialize Firebase
import * as firebase from 'firebase';

var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  };

firebase.initializeApp(config);

 const database = firebase.database();

 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider,database as default };