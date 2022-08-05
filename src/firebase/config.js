  import firebase from "firebase/compat/app";
  import "firebase/compat/firestore";
  import "firebase/compat/storage";
  import 'firebase/compat/auth'


  export const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAL0c3QplzTTpLGtkrMBn9T3J4qVE6ZRrg",
    authDomain: "hackathon-6cb89.firebaseapp.com",
    projectId: "hackathon-6cb89",
    storageBucket: "hackathon-6cb89.appspot.com",
    messagingSenderId: "201499969592",
    appId: "1:201499969592:web:025322986f4eafe4a53ecd",
  });

  const auth = firebase.auth()
  const db = firebase.firestore()

  export {auth,db}