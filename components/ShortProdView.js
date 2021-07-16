import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ProductContext } from "../Context";
import { CustomerContext } from "../Context";
import firebase from "firebase";

function ShortProdView(props) {
  const prodContext = useContext(ProductContext);
  const cusContext = useContext(CustomerContext);
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
  const cart = cusContext.data.cart;
  const Open = () => {
    prodContext.dispatch({
      type: "set_current",
      value: [
        prodContext.data.prod_key[props.index],
        prodContext.data.prod_details[props.index],
        props.index,
      ],
    });
    props.navigation.navigate("ProductEach");
  };
  // const [cart, setCart] = useState([]);
  // firebase
  //   .database()
  //   .ref()
  //   .child("cart_details/")
  //   .child("-Mbb9NtwktG-Ozjm6d44")
  //   .get()
  //   .then((snapshot) => {
  //     // setCart(snapshot.val())
  //     setCart(snapshot.val());
  //     // console.log(snapshot.val());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <View
      style={{
        flexDirection: "column",
        width: 200,
        height: 250,
        backgroundColor: "rgba(237, 237, 237,0.4)",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 20,
        paddingTop: 10,
        marginRight: 20,
      }}
    >
      <View style={{ width: "90%", height: "80%" }}>
        <ImageBackground
          style={{ width: "100%", height: "97%" }}
          source={{
            uri: image,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
            // onPress={() => {
            //   props.navigation.navigate("Wishlist");
            // }}
            >
              <Icon
                name={"heart"}
                size={20}
                color={"red"}
                style={{ padding: 5 }}
              />
            </TouchableOpacity>
            <Icon name={"tag"} size={15} color={"green"}>
              {props.value.discount}% off
            </Icon>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          height: "20%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Rs.{props.value.final_price}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#008080",
            borderRadius: 15,
            width: 90,
            height: "55%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#FFFFFF", fontSize: 13 }}
            onPress={
              Open
              // console.log(cart);
              // cusContext.dispatch({type:cart_add,value:prodContext.da})
              // props.navigation.navigate("Addtocart");
            }
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ShortProdView;
