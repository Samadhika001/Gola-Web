// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANbmN5DwGqUB6UkcNXSyOZXH-2ZdbyzcE",
  authDomain: "gola-5bb7c.firebaseapp.com",
  projectId: "gola-5bb7c",
  storageBucket: "gola-5bb7c.appspot.com",
  messagingSenderId: "1002403156146",
  appId: "1:1002403156146:web:b2cb9f41905d41949df9ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
