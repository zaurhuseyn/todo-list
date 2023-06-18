import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_kKBEb918YgvmGuJrem_Z3I-R-rcTgbw",
  authDomain: "juventus-17c74.firebaseapp.com",
  projectId: "juventus-17c74",
  storageBucket: "juventus-17c74.appspot.com",
  messagingSenderId: "562748972939",
  appId: "1:562748972939:web:7a99b447c4fef404a3998e"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const app = initializeApp(firebaseConfig);