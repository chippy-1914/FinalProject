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

function CheckProd(props) {
  const prodContext = useContext(ProductContext);
  const venContext = useContext(VendorContext);
  const cusContext = useContext(CustomerContext);
  const product = prodContext.data.prod_details[props.id];
  const name = product.product_name;
  const ven_id = product.vendor_id;
  const ven_key_index = venContext.data.vendor_key.indexOf(ven_id);
  const ven_name = venContext.data.vendor_details[ven_key_index].fName;
  const price = product.final_price;
  const [count, setCount] = useState(props.deets.unit);
  const [image, setImage] = useState("");
  const ref = firebase
    .storage()
    .ref("images/" + prodContext.data.prod_key[props.id]);
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
        height: 150,
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
          style={{ height: 120, width: 120, marginRight: 15 }}
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
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 15 }}>{ven_name}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 17 }}>Rs.{price}</Text>

            <Text style={{ marginLeft: 5, fontSize: 17, marginRight: 5 }}>
              Unit {count}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CheckProd;
