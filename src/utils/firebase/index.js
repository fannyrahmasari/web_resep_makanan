import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXwfwiXqlA6TbMNEtA3VPGY9xkCD5btfQ",
  authDomain: "webresep-85a63.firebaseapp.com",
  projectId: "webresep-85a63",
  storageBucket: "webresep-85a63.appspot.com",
  messagingSenderId: "112754943529",
  appId: "1:112754943529:web:18d5c16197e71169695e38",
  measurementId: "G-FPT0RT00F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig