import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYH850VGE0KB8kj7MbjGgub3nAWYzXAgo",
    authDomain: "chat-app-fdb5c.firebaseapp.com",
    projectId: "chat-app-fdb5c",
    storageBucket: "chat-app-fdb5c.appspot.com",
    messagingSenderId: "1040253048339",
    appId: "1:1040253048339:web:89fad4bb30a312cf4751e6",
    measurementId: "G-7X9YKKF2F9"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseStore = firebaseApp.firestore();

export default firebase;