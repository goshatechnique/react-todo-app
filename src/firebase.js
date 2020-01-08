import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCsWAaAHjygMyBVO-H__-ixPMSXXwGkBLQ",
  authDomain: "notes-app-57338.firebaseapp.com",
  databaseURL: "https://notes-app-57338.firebaseio.com",
  projectId: "notes-app-57338",
  storageBucket: "notes-app-57338.appspot.com",
  messagingSenderId: "746843144079",
  appId: "1:746843144079:web:9ece533fdea365e96395fa"
};
const firebaseAPI = firebase.initializeApp(firebaseConfig);
export default firebaseAPI;
