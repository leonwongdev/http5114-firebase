// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZNeZ5umPmh-_XPsaHszAa4YPCPDnZQjY",
  authDomain: "humber-http5225.firebaseapp.com",
  projectId: "humber-http5225",
  storageBucket: "humber-http5225.appspot.com",
  messagingSenderId: "232089557846",
  appId: "1:232089557846:web:f58ef337b1ed8c97ffd4f7",
  measurementId: "G-12FB2MERRS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connect to the database
const db = getDatabase(app);

// get all messages
const messagesRef = ref(db, "/messages");
onValue(
  messagesRef,
  (snapshot) => {
    const data = snapshot.val();
    // console.log(data);
    const ul = document.getElementById("messages");
    ul.replaceChildren();
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const {name, message, createdAt} = childSnapshot.val();
      const li = document.createElement("li");

      // create a new list item
      li.appendChild(document.createTextNode(`${name}: ${message}`));
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
