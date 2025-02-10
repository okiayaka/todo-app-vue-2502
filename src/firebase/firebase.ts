// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAas-QzO6enmLJbPpxDsFIO0EuGUCLDQLE",
  authDomain: "test-todo-app-1fd85.firebaseapp.com",
  projectId: "test-todo-app-1fd85",
  storageBucket: "test-todo-app-1fd85.firebasestorage.app",
  messagingSenderId: "967854466849",
  appId: "1:967854466849:web:c367344b2d20f7144f0060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
