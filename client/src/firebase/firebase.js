 // Initialize Firebase
import * as firebase from 'firebase';

// for Development, need to create a local .env.development file within the 'client' master folder
// add details that were Slacked out
// make sure to add .env.development to the .gitignore if it's not there already!
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