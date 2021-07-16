import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import firebase from "firebase";
import { StatusBar } from "expo-status-bar";
import Spinner from "react-native-loading-spinner-overlay";
import EachVen from "./eachVen";
import { UserContext } from "../Context/Context";


export default function ViewVendor({ navigation }) {
  const userContext = useContext(UserContext);

  const [isLoading, setLoad] = useState(true);
  // const getUserData = () => {
  //   let dbRef = firebase.database().ref();
  //   let dbtable = dbRef.child("vendor_details");

  //   dbtable.on("value", (snapshot) => {
  //     const state = Object.values(snapshot.val());

  //     setData(state);
  //   });
  //   console.log("DATA RETRIEVED");
  // };
  const [array, setArray] = useState([]);
  useEffect(() => {
    array.splice(0, array.length);
    userContext.data.vendor_details.forEach((element, index) => {
      // console.log(element);
      array.push(<EachVen key={index} index={index} value={element} />);
    });
    // while (1) {
    //   if (array) {
    setTimeout((array) => {
      // console.log(data);

      setLoad(false);
    }, 4000);
    // break;
    // }
    // }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <View style={styles.headerMain}>
          <Text
            style={{
              fontSize: 25,
              color: "#FFFFFF",
              paddingLeft: 10,
              fontWeight: "bold",
            }}
          >
            Manage Vendors
          </Text>
        </View>
        <View style={{ width: "90%", marginLeft: "7%" }}>
          <Spinner visible={isLoading} textContent={"Loading..."} />
          {!isLoading && <View>{array}</View>}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerMain: {
    backgroundColor: "#008080",
    justifyContent: "center",
    height: 70,
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
