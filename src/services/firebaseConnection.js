
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAszBZcAgz6HVorT533_OTtl3bvZ_ml8mA",
  authDomain: "tickets-chamado-4c829.firebaseapp.com",
  projectId: "tickets-chamado-4c829",
  storageBucket: "tickets-chamado-4c829.appspot.com",
  messagingSenderId: "450056489429",
  appId: "1:450056489429:web:d8a02771ae11f935f1555c"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };