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

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
