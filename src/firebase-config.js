import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4FGURQgTU1i42IZG5apb39D-ZNphsfwo",
    authDomain: "aneka-rasa.firebaseapp.com",
    projectId: "aneka-rasa",
    storageBucket: "aneka-rasa.appspot.com",
    messagingSenderId: "687993400559",
    appId: "1:687993400559:web:763594e378317ae399ff1a",
    measurementId: "G-G9XKG0N6KS"
  };

  const app = initializeApp(firebaseConfig)
  
  export const auth = getAuth(app)

  export const db = getFirestore(app)