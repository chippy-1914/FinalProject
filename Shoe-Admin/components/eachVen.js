import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { UserContext } from "../Context/Context";

function EachVen(props) {
  const userContext = useContext(UserContext);
  return (
    <View
      style={{
        backgroundColor: "#e8e8e8",
        height: 150,
        width: "95%",
        justifyContent: "center",
        // alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: 10,
        borderRadius: 20,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "notoserif",
            fontSize: 18,
            color: "#005e80",
            fontWeight: "bold",
          }}
        >
          Name-
        </Text>
        <Text
          style={{ fontFamily: "notoserif", fontSize: 18, color: "#005e80" }}
        >
          {" "}
          {props.value.fName} {props.value.lName}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "notoserif",
            fontSize: 18,
            color: "#005e80",
            fontWeight: "bold",
          }}
        >
          Company Name-{" "}
        </Text>
        <Text
          style={{ fontFamily: "notoserif", fontSize: 18, color: "#005e80" }}
        >
          {props.value.CompanyName}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: "notoserif",
            fontSize: 18,
            color: "#005e80",
            fontWeight: "bold",
          }}
        >
          Email-{" "}
        </Text>
        <Text
          style={{ fontFamily: "notoserif", fontSize: 18, color: "#005e80" }}
        >
          {" "}
          {props.value.Email}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 5,
          height: 30,
          width: "30%",
          backgroundColor: "#008080",
          marginLeft: "35%",
          borderRadius: 10,
        }}
        onPress={() => {
          userContext.dispatch({ type: "delete_vendor", value: props.index });
          console.log(props.index);
        }}
      >
        <Text
          style={{
            fontFamily: "notoserif",
            fontSize: 18,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default EachVen;
