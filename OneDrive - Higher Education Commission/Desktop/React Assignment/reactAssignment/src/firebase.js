// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNxmrq-5L3f8MC1OmoXgJ_G29uDv-UbLc",
  authDomain: "assignment-53122.firebaseapp.com",
  projectId: "assignment-53122",
  storageBucket: "assignment-53122.firebasestorage.app",
  messagingSenderId: "951038317822",
  appId: "1:951038317822:web:64224660989e0a6fbe41af",
  measurementId: "G-5NHGPL5LTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Authentication
const auth = getAuth(app);
// Export the auth object so you can use it in other files
export { auth };