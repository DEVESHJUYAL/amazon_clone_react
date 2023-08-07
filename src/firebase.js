import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA-eoTWTjCscsYrCRm-Vh87qCg2kWZsDwY",
    authDomain: "clone-4beed.firebaseapp.com",
    projectId: "clone-4beed",
    storageBucket: "clone-4beed.appspot.com",
    messagingSenderId: "976156549625",
    appId: "1:976156549625:web:c7a1dea75dde8361129d28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };