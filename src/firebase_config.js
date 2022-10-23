import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBjiK-0bG9jB8P-jnAIKqh1VH5uqOLAZsk",
    authDomain: "tuduapp-22de1.firebaseapp.com",
    projectId: "tuduapp-22de1",
    storageBucket: "tuduapp-22de1.appspot.com",
    messagingSenderId: "190847375580",
    appId: "1:190847375580:web:32a7aebc6e112611b2bc19"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };