
import React, {  useState} from 'react';
// import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
// import Regiform from './components/Form';
import firebase from "firebase";
import Navigator from './routes/homestack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Cdashboard from './components/Cdashboard';
// import Wishlist from './components/wishlist.js'
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

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
   <Navigator/>
     /* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Cdashboard}  />
        <Drawer.Screen name="Wishlist" component={Wishlist} />
        {/* <Drawer.Screen name="" component={Story} /> */
      // </Drawer.Navigator>
    //  </Navigator> 
  );
}

