import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_PtSGIzA9u0Cv2TRnxORaLQHRbgkUAOQ",
  authDomain: "sistema-ciberseguridad-tesis.firebaseapp.com",
  projectId: "sistema-ciberseguridad-tesis",
  storageBucket: "sistema-ciberseguridad-tesis.firebasestorage.app",
  messagingSenderId: "635893955764",
  appId: "1:635893955764:web:901a2b5bd20662a3b9abe1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
