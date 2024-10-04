// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; //for access to Firestore
import { EmailAuthProvider } from 'firebase/auth'; //for email and password authentication
import { getAuth } from 'firebase/auth'; // for access to authentication
import { getStorage } from 'firebase/storage'; //for access to Firebase storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOrVL1OYApiQTBTp2GEekO_Oia6hy8uvo",
  authDomain: "invoice-app-4ad52.firebaseapp.com",
  projectId: "invoice-app-4ad52",
  storageBucket: "invoice-app-4ad52.appspot.com",
  messagingSenderId: "490637841102",
  appId: "1:490637841102:web:3518e487e40175aba1769f",
  measurementId: "G-B4N9H9D646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new EmailAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { provider, auth, storage };
export default db;