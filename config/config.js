import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCKOv2aO_hrxBUDo_25JmUdJ31knkUxTFA",
  authDomain: "pam2505-e3431.firebaseapp.com",
  projectId: "pam2505-e3431",
  storageBucket: "pam2505-e3431.appspot.com",
  messagingSenderId: "4788089799",
  appId: "1:4788089799:web:a77f570437665e35465fe2"
};

let app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()