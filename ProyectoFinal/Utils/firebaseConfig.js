import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const loadFirebaseConfiguration = () => {
      const app = initializeApp(firebaseConfig);
      global.db = getFirestore(app);
};

const firebaseConfig = {
      apiKey: "AIzaSyBHerrFlskLTeC7b9b-aYNW4YnnTh9wUg0",
      authDomain: "bd-proyecto-29773.firebaseapp.com",
      projectId: "bd-proyecto-29773",
      storageBucket: "bd-proyecto-29773.appspot.com",
      messagingSenderId: "475191547928",
      appId: "1:475191547928:web:86de6b5b9f84c392d00b6d",
};
