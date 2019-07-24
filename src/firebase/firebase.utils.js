import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDljY7fw9QGyH8Fv5uxw02PwyCprhJUuFM",
    authDomain: "crwn-db-abee7.firebaseapp.com",
    databaseURL: "https://crwn-db-abee7.firebaseio.com",
    projectId: "crwn-db-abee7",
    storageBucket: "",
    messagingSenderId: "35899770856",
    appId: "1:35899770856:web:bfa3c31884885e93"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;