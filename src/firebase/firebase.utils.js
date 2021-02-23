import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD1HQy6XJ8Hu222Csq--5shiDomqhW0zFw",
  authDomain: "crown-clothing-fecee.firebaseapp.com",
  projectId: "crown-clothing-fecee",
  storageBucket: "crown-clothing-fecee.appspot.com",
  messagingSenderId: "647663631608",
  appId: "1:647663631608:web:47e750211a5a0887130f0d",
  measurementId: "G-J3GKXRPPJS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
