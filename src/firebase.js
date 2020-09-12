import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKCc9lfYuTS8du0R4RMkyKz6OpvC2EMB4",
  authDomain: "clone-74420.firebaseapp.com",
  databaseURL: "https://clone-74420.firebaseio.com",
  projectId: "clone-74420",
  storageBucket: "clone-74420.appspot.com",
  messagingSenderId: "1034984021569",
  appId: "1:1034984021569:web:022be6534c4e44a09130c0",
  measurementId: "G-4X5RY9NC1D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
