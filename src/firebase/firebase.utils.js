import firebase from "firebase/app";
import "firebase/firestore";
import "firebase//auth";

const config = {
  apiKey: "AIzaSyD-NsIfcHoAsqdGPO_ZbgiQCIzXgPH3cxI",
  authDomain: "crown-db-e8eb4.firebaseapp.com",
  databaseURL: "https://crown-db-e8eb4.firebaseio.com",
  projectId: "crown-db-e8eb4",
  storageBucket: "crown-db-e8eb4.appspot.com",
  messagingSenderId: "844372310427",
  appId: "1:844372310427:web:f8df02034b7331f87bc93e",
  measurementId: "G-7PVH3NHV54"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
