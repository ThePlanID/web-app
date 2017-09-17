import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBv1NAkLXaGhJzIwrTloX4zt-9Wm_nUQFU",
  authDomain: "the-planid.firebaseapp.com",
  databaseURL: "https://the-planid.firebaseio.com",
  projectId: "the-planid",
  storageBucket: "the-planid.appspot.com",
  messagingSenderId: "886904178472"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
