import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_API_KEU}`,
  authDomain: "dev-boost-prototype.firebaseapp.com",
  projectId: "dev-boost-prototype",
  storageBucket: "dev-boost-prototype.appspot.com",
  messagingSenderId: "325367574586",
  appId: "1:325367574586:web:005eaf34b33b970d3f4503",
  measurementId: "G-V2X9Z62G0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);