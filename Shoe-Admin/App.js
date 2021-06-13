
import React, {  useState} from 'react';
// import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
// import Adminform from './components/admin';
import Navigation from './routes/homestack'
import firebase from "firebase";

//Database configuration

var firebaseConfig = {
  apiKey: "AIzaSyCIHDCsSmctBT_eagJnFqttRGFd8xI6_VU",
  authDomain: "shoeshop-75160.firebaseapp.com",
  projectId: "shoeshop-75160",
  storageBucket: "shoeshop-75160.appspot.com",
  messagingSenderId: "789844170150",
  appId: "1:789844170150:web:a2fe9a6cf12cb306356b67"
};

// Initialize Firebase

if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig);
}



export default function App() {
  return (
      <Navigation/>
      
      
  );
}

