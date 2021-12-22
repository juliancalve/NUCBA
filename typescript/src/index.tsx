import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgqxa5swkTwL99XZDTLsh8EVRYvPXrmno",
  authDomain: "typescript-te-odio-mucho.firebaseapp.com",
  projectId: "typescript-te-odio-mucho",
  storageBucket: "typescript-te-odio-mucho.appspot.com",
  messagingSenderId: "668289841662",
  appId: "1:668289841662:web:31cff4ed1476449e12a8af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
