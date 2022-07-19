import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWUJZIeaZ_UFIUELIJY2jSJIObyBEJqvU",
  authDomain: "inshot-premiere.firebaseapp.com",
  projectId: "inshot-premiere",
  storageBucket: "inshot-premiere.appspot.com",
  messagingSenderId: "32978171488",
  appId: "1:32978171488:web:ba1f0fd7a121e57bf7f505",
  measurementId: "G-P00WP0KT5N",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
