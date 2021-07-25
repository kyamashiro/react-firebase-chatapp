import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYH850VGE0KB8kj7MbjGgub3nAWYzXAgo",
  authDomain: "chat-app-fdb5c.firebaseapp.com",
  projectId: "chat-app-fdb5c",
  storageBucket: "chat-app-fdb5c.appspot.com",
  messagingSenderId: "1040253048339",
  appId: "1:1040253048339:web:89fad4bb30a312cf4751e6",
  measurementId: "G-7X9YKKF2F9",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
