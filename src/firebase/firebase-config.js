import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDO6HJP-NpjEjJZvEpNmiIbilOOFA-f0t4",
  authDomain: "fb-clone-cfdb4.firebaseapp.com",
  databaseURL: "https://fb-clone-cfdb4.firebaseio.com",
  projectId: "fb-clone-cfdb4",
  storageBucket: "fb-clone-cfdb4.appspot.com",
  messagingSenderId: "118131300839",
  appId: "1:118131300839:web:b343483d1c7d9ac2c14542",
  measurementId: "G-F5ZTL6J8RM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;