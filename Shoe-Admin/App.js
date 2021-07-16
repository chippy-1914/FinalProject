import React, { useState, useReducer, useEffect } from "react";
// import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';

// import Adminform from './components/admin';
import Navigation from "./routes/homestack";
import firebase from "firebase";
import { UserContext } from "./Context/Context";
import Spinner from "react-native-loading-spinner-overlay";
//Database configuration

const initialState = {
  user: "Admin",
  vendor_details: "",
  vendor_key: "",
  help: "",
  help_key: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Change_User":
      return { ...state, user: action.value };
    case "vendor_view":
      return { ...state, vendor_details: action.value };
    case "vendor_key":
      return { ...state, vendor_key: action.value };
    case "help_view":
      return { ...state, help: action.value };
    case "help_key":
      return { ...state, help_key: action.value };
    case "delete_vendor":
      firebase
        .database()
        .ref()
        .child("vendor_details")
        .child(state.vendor_key[action.value])
        .remove();
      state.vendor_key.splice(action.value, 1);
      state.vendor_details.splice(action.value, 1);
      console.log(state);
      return { state };
    default:
      return state;
  }
};

var firebaseConfig = {
  apiKey: "AIzaSyCIHDCsSmctBT_eagJnFqttRGFd8xI6_VU",
  authDomain: "shoeshop-75160.firebaseapp.com",
  projectId: "shoeshop-75160",
  storageBucket: "shoeshop-75160.appspot.com",
  messagingSenderId: "789844170150",
  appId: "1:789844170150:web:a2fe9a6cf12cb306356b67",
};

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isLoading, setLoad] = useState(true);
  const [data, dispatch] = useReducer(reducer, initialState);
  // const [data, setData] = useState([]);
  const getUserData = () => {
    let dbRef = firebase.database().ref();
    let dbtable = dbRef.child("vendor_details");
    let help = dbRef.child("helpline");
    dbtable.on("value", (snapshot) => {
      const state = Object.values(snapshot.val());
      const stateKey = Object.keys(snapshot.val());
      // console.log(stateKey);
      dispatch({ type: "vendor_view", value: state });
      dispatch({ type: "vendor_key", value: stateKey });
    });
    console.log("DATA RETRIEVED");
    help.on("value", (snapshot) => {
      const state = Object.values(snapshot.val());
      const stateKey = Object.keys(snapshot.val());
      // console.log(stateKey);
      dispatch({ type: "help_view", value: state });
      dispatch({ type: "help_key", value: stateKey });
    });
    console.log("DATA RETRIEVED");
  };
  useEffect(() => {
    getUserData();
    setTimeout((array) => {
      // console.log(data);

      setLoad(false);
    }, 2000);
  }, []);
  return (
    <UserContext.Provider value={{ data: data, dispatch: dispatch }}>
      <Navigation />
    </UserContext.Provider>
  );
}
