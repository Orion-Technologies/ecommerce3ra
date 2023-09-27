import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyClDqUDprAjfFt6wpIAvPE8Ljxn9vPGCC4",
    authDomain: "ecommerce-abel-865e2.firebaseapp.com",
    projectId: "ecommerce-abel-865e2",
    storageBucket: "ecommerce-abel-865e2.appspot.com",
    messagingSenderId: "1006988025669",
    appId: "1:1006988025669:web:161beaa22b7575817fe82c"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)