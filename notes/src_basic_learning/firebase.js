import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBr-MMnTPjp0bwOXVMiY7RIj3Rqduv9BF0",
  authDomain: "learn-6babf.firebaseapp.com",
  projectId: "learn-6babf",
  storageBucket: "learn-6babf.appspot.com",
  messagingSenderId: "812576426474",
  appId: "1:812576426474:web:d89a3b91b2e1c6cad6ca93"
};

// Initialize Firebase
const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();
