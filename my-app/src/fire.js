import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyBWfpYtRAnUf5PDzRv6vDEclnpQxBSCVr8",
  authDomain: "reservation-e44c0.firebaseapp.com",
  databaseURL: "https://reservation-e44c0.firebaseio.com",
  projectId: "reservation-e44c0",
  storageBucket: "reservation-e44c0.appspot.com",
  messagingSenderId: "405177996310",
  appId: "1:405177996310:web:9e6b30851ea51f75645137",
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
