import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPbQmTSE4aIaEeZrlpZKe_nDcTCAC137g",
  authDomain: "ema-john-2fbe0.firebaseapp.com",
  projectId: "ema-john-2fbe0",
  storageBucket: "ema-john-2fbe0.appspot.com",
  messagingSenderId: "390410617617",
  appId: "1:390410617617:web:77f9a4516fe858763982b0"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;