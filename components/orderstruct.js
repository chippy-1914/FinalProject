import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ProductContext, VendorContext, CustomerContext } from "../Context";
import firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//   } from 'react-native-fontawesome';

function OrderStruct(props) {
  const prodContext = useContext(ProductContext);
  const venContext = useContext(VendorContext);
  const cusContext = useContext(CustomerContext);
  // const product = prodContext.data.prod_details[props.id];
  // const name = product.product_name;
  // const ven_id = product.vendor_id;
  // const ven_key_index = venContext.data.vendor_key.indexOf(ven_id);
  // const ven_name = venContext.data.vendor_details[ven_key_index].fName;
  // const price = product.final_price;
  // const [count, setCount] = useState(props.deets.unit);
  console.log(props.user[1]);
  const [image, setImage] = useState("");
  const ref = firebase.storage().ref("images/" + props.prod);
  const table = ref
    .getDownloadURL()
    .then((url) => {
      setImage(url);
      // console.log(url);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <View
      style={{
        height: 250,
        backgroundColor: "#e8e8e8",
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          source={{ uri: image }}
          style={{ height: 180, width: 120, marginRight: 15, marginTop: 15 }}
        />
        {/* console.log(props.image) */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
            width: "55%",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              {
                prodContext.data.prod_details[
                  prodContext.data.prod_key.indexOf(props.prod)
                ].product_name
              }
            </Text>
            <Text style={{ fontSize: 15 }}>
              {
                venContext.data.vendor_details[
                  venContext.data.vendor_key.indexOf(props.vendor)
                ].fName
              }
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 17 }}>
              Rs.
              {prodContext.data.prod_details[
                prodContext.data.prod_key.indexOf(props.prod)
              ].final_price * props.unit}
            </Text>

            <Text style={{ marginLeft: 5, fontSize: 17, marginRight: 5 }}>
              Unit {props.unit}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 17 }}>Size- {props.size}</Text>

            <Text style={{ marginLeft: 5, fontSize: 17, marginRight: 5 }}>
              Color-{props.color}
            </Text>
          </View>
          <Text style={{ fontSize: 17 }}>Order Status: {props.status}</Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "lightblue",
                alignSelf: "center",
                width: "45%",
                borderRadius: 15,
                marginTop: 10,
              }}
              onPress={() => {
                firebase
                  .database()
                  .ref()
                  .child("order_details")
                  .child(props.user[1])
                  .update({ order_status: "Cancelled" });
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {props.status != "Cancelled" ? "Cancel" : "Cancelled"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "lightblue",
                alignSelf: "center",
                width: "35%",
                borderRadius: 15,
                marginTop: 10,
              }}
              onPress={() => {
                props.navigation.navigate("Rating"),
                  prodContext.dispatch({
                    type: "set_current",
                    value: props.prod,
                  });
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OrderStruct;
