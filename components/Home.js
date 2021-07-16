import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Home({ navigation }) {
  setTimeout(() => {
    navigation.navigate("Cdashboard");
  }, 8000);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#f7f7f7",
      }}
    >
      <Image
        source={require("E:/Surabhi/TYBCA/Project/Project Code File/App/images/shoe.jpg")}
        style={{
          height: 500,
          width: 500,
          borderRadius: 70,
        }}
      ></Image>
    </View>
  );
}
