import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8hS6ry4jHk8byF0IgYiRYDkAxEL0SG1M",
  authDomain: "fanup---engagement-project.firebaseapp.com",
  projectId: "fanup---engagement-project",
  storageBucket: "fanup---engagement-project.firebasestorage.app",
  messagingSenderId: "469264407494",
  appId: "1:469264407494:web:36560017e74eebe58bf0c7",
  measurementId: "G-20BWLK5VM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth};