import React, { useState, useReducer, useEffect } from "react";
import firebase from "firebase";
import Navigator from "./routes/homestack";
import { CustomerContext } from "./Context";
import { VendorContext } from "./Context";
import { ProductContext } from "./Context";
import Spinner from "react-native-loading-spinner-overlay";

//Database configuration

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

//declaring initialState
const initialStateCus = {
  user: "Customer",
  current_id: "-Mbb9NtwktG-Ozjm6d44",
  cus_details: "",
  cus_key: "",
  cart: "",
  cart_key: "",
  total_cart: 0,
  order: "",
  order_key: "",
};

const initialStateVen = {
  user: "Vendor",
  current_id: "-Mc65ha8Y69IytgOEWXz",
  vendor_details: "",
  vendor_key: "",
};

const initialStateProd = {
  current: "",
  prod_details: "",
  prod_key: "",
  review: "",
  review_key: "",
};

//declaring reducers
const reducerCus = (state, action) => {
  switch (action.type) {
    case "Change_User":
      return { ...state, user: action.value, current_id: action.id };
    case "cus_view":
      return { ...state, cus_details: action.value };
    case "cus_key":
      return { ...state, cus_key: action.value };
    case "cart_add":
      return { ...state, cart: action.value, cart_key: action.key };
    case "order_add":
      return { ...state, order: action.value, order_key: action.key };
    case "set_cart_amount":
      return {
        ...state,
        total_cart: action.value,
      };
    case "delete_cart":
      firebase
        .database()
        .ref()
        .child("cart_details/")
        .child(state.cus_key[action.value])
        .remove();
      state.cart.splice(action.value, 1);
      state.cus_details.splice(action.index, 1);
      console.log(state);
      return { state };
    default:
      return state;
  }
};

const reducerVen = (state, action) => {
  switch (action.type) {
    case "Change_User":
      return { ...state, user: action.value, current_id: action.id };
    case "ven_view":
      return { ...state, vendor_details: action.value };
    case "ven_key":
      return { ...state, vendor_key: action.value };
    case "delete_ven":
      firebase
        .database()
        .ref()
        .child("vendor_details/")
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

const reducerProd = (state, action) => {
  switch (action.type) {
    case "prod_view":
      return { ...state, prod_details: action.value };
    case "prod_key":
      return { ...state, prod_key: action.value };
    case "set_current":
      return { ...state, current: action.value };
    case "add_review":
      return { ...state, review: action.value, review_key: action.key };
    case "delete_prod":
      firebase
        .database()
        .ref()
        .child("prod_details/")
        .child(state.prod_key[action.value])
        .remove();
      state.prod_key.splice(action.value, 1);
      state.prod_details.splice(action.value, 1);
      console.log(state);
      return { state };

    default:
      return state;
  }
};
export default function App() {
  const [isLoading, setLoad] = useState(true);
  const [cus, cusdispatch] = useReducer(reducerCus, initialStateCus);
  const [ven, vendispatch] = useReducer(reducerVen, initialStateVen);
  const [prod, proddispatch] = useReducer(reducerProd, initialStateProd);
  // const [data, setData] = useState([]);
  const getUserData = () => {
    let dbRef = firebase.database().ref();
    let Vdbtable = dbRef.child("vendor_details");
    let Pdbtable = dbRef.child("prod_details");
    let Cdbtable = dbRef.child("cust_details");
    let cart = dbRef.child("cart_details");
    let order = dbRef.child("order_details");
    let review = dbRef.child("review_table");
    Cdbtable.on("value", (snapshot) => {
      const state = Object.values(snapshot.val());
      const stateKey = Object.keys(snapshot.val());

      cusdispatch({ type: "cus_view", value: state });
      cusdispatch({ type: "cus_key", value: stateKey });
      console.log("Customer DATA RETRIEVED");
    });
    Vdbtable.on("value", (snapshot) => {
      const state = Object.values(snapshot.val());
      const stateKey = Object.keys(snapshot.val());
      // console.log(stateKey);
      vendispatch({ type: "ven_view", value: state });
      vendispatch({ type: "ven_key", value: stateKey });
      console.log("Vendor DATA RETRIEVED");
    });

    // cart.on("value", (snapshot) => {
    //   const state = Object.values(snapshot.val());
    //   const stateKey = Object.keys(snapshot.val());
    //   console.log(stateKey);
    //   cusdispatch({ type: "cart_add", value: state });
    //   // cusdispatch({ type: "cart_a", value: stateKey });
    //   console.log("Cart DATA RETRIEVED");
    // });

    Pdbtable.on("value", (snapshot) => {
      const state = Object.values(snapshot.val());
      const stateKey = Object.keys(snapshot.val());
      // console.log(stateKey);
      proddispatch({ type: "prod_view", value: state });
      proddispatch({ type: "prod_key", value: stateKey });
      // console.log(prod);
      review.on("value", (snapshot) => {
        if (snapshot.exists) {
          const state = Object.values(snapshot.val());
          const stateKey = Object.keys(snapshot.val());
          console.log(state, stateKey);
          proddispatch({ type: "add_review", value: state, key: stateKey });
        }
        console.log(prod);
        console.log(" Product DATA RETRIEVED");
      });
    });
    if (cus.current_id !== "") {
      console.log("got in");
      cart.on("value", (snapshot) => {
        if (snapshot.exists) {
          const state = Object.values(snapshot.val());
          const stateKey = Object.keys(snapshot.val());
          // console.log(state, stateKey);
          cusdispatch({ type: "cart_add", value: state, key: stateKey });
        }
      });
      order.on("value", (snapshot) => {
        if (snapshot.exists) {
          const state = Object.values(snapshot.val());
          const stateKey = Object.keys(snapshot.val());
          // console.log(state, stateKey);
          cusdispatch({ type: "order_add", value: state, key: stateKey });
        }
      });
    }
  };
  useEffect(() => {
    getUserData();
    // setTimeout(() => {
    //   // console.log(data);

    //   setLoad(false);
    // }, 4000);
  }, []);

  return (
    <CustomerContext.Provider value={{ data: cus, dispatch: cusdispatch }}>
      <ProductContext.Provider value={{ data: prod, dispatch: proddispatch }}>
        <VendorContext.Provider value={{ data: ven, dispatch: vendispatch }}>
          {/* <Spinner visible={isLoading} textContent={"Loading..."} /> */}
          <Navigator />
        </VendorContext.Provider>
      </ProductContext.Provider>
    </CustomerContext.Provider>
  );
}
