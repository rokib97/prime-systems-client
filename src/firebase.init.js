// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoeRlO-_Wtn9BogMPPf8QMrar0yQRYyRo",
  authDomain: "hi-tech-f766c.firebaseapp.com",
  projectId: "hi-tech-f766c",
  storageBucket: "hi-tech-f766c.appspot.com",
  messagingSenderId: "327986869043",
  appId: "1:327986869043:web:8df0c4e6764e791037c446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
