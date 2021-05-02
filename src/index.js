import firebase from "firebase";
import "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

firebase.initializeApp({
  apiKey: "AIzaSyCsnrX4YHRM0pGCoIeaTZ70l87EQDdDvr4",
  authDomain: "evernote3456.firebaseapp.com",
  projectId: "evernote3456",
  storageBucket: "evernote3456.appspot.com",
  messagingSenderId: "912934867123",
  appId: "1:912934867123:web:652d05e41409035aa360c6",
  measurementId: "G-NRMBX5ZQV8",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
