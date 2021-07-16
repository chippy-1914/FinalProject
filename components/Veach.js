import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import firebase from "firebase";
import { ProductContext } from "../Context";
import { VendorContext } from "../Context";
export default function Veach(props) {
  const prodContext = useContext(ProductContext);
  const venContext = useContext(VendorContext);
  const [image, setImage] = useState("");
  const ref = firebase
    .storage()
    .ref("images/" + prodContext.data.prod_key[props.index]);
  const table = ref
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {
      console.log(error);
    });
  const Open = () => {
    prodContext.dispatch({
      type: "set_current",
      value: [
        prodContext.data.prod_key[props.index],
        prodContext.data.prod_details[props.index],
        props.index,
      ],
    });
    props.navigation.navigate("ProductVen");
  };
  const ven_id = props.value.vendor_id;
  const ven_key_index = venContext.data.vendor_key.indexOf(ven_id);
  const ven_name = venContext.data.vendor_details[ven_key_index].fName;
  return (
    <View
      style={{
        height: 470,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
      }}
    >
      <TouchableOpacity onPress={Open}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 220,
            width: "75%",
            margin: "10%",
            marginLeft: 50,
            borderWidth: 1,
            borderColor: "lightgrey",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: 0,
          paddingBottom: 10,
          paddingLeft: 12,
          width: "97%",
        }}
      >
        <Text style={{ fontSize: 16, color: "grey" }}>{ven_name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={Open}>
            <Text style={{ fontSize: 20, fontWeight: "bold", width: "75%" }}>
              {props.value.product_name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name={"heart"} size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            ₹{props.value.final_price}
          </Text>
          <View style={{ flexDirection: "row" }}></View>
        </View>
      </View>
    </View>
  );
}
