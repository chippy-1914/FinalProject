import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Cartprod from "./cartprod";
import { useState } from "react";
import firebase from "firebase";
import { ProductContext, CustomerContext } from "../Context";

export default function Addtocart({ navigation }) {
  const prodContext = useContext(ProductContext);
  const [data, setData] = useState([]);

  const cusContext = useContext(CustomerContext);
  const [isLoading, setLoad] = useState(true);
  const [arrayCart, setCartArr] = useState([]);
  // const [cart, setCart] = useState();
  const state = {
    total: 0,
  };

  // console.log(cart);
  const cart_index = cusContext.data.cart_key.indexOf(
    cusContext.data.current_id
  );
  const cart_key =
    cart_index != -1 ? Object.keys(cusContext.data.cart[cart_index]) : [];
  // const cart_val=Object.keys
  console.log(cart_key);

  arrayCart.splice(0, arrayCart.length);
  // useEffect(() => {
  //   cusContext.dispatch({
  //     type: "set_cart_amount",
  //     value: 0,
  //   });
  // }, []);
  // const cart = cusContext.data.cart;

  cart_key.forEach((element, index) => {
    // console.log(element);
    // console.log();
    arrayCart.push(
      <Cartprod
        product={element}
        deets={cusContext.data.cart[cart_index][element]}
        id={prodContext.data.prod_key.indexOf(element)}
        index={index}
        icon="trash"
      />
    );
    state.total =
      state.total +
      prodContext.data.prod_details[prodContext.data.prod_key.indexOf(element)]
        .final_price *
        cusContext.data.cart[cart_index][element].unit;
  });
  //   Object.keys(element).forEach((ele, index) => {
  //     console.log(ele);

  //     );
  //   });
  // });
  // });

  return (
    <View style={styles.container}>
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
          Cart
        </Text>
      </View>

      <View style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 16,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}>
            ITEMS {arrayCart.length}
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: "#008080", fontWeight: "bold", fontSize: 17 }}
              onPress={() => navigation.navigate("Searchprod")}
            >
              + ADD NEW
            </Text>
          </TouchableOpacity>
        </View>
        {arrayCart}
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            paddingRight: 5,
            color: "#FFFFFF",
            paddingTop: 10,
          }}
        >
          TO BE PAID: RS. {state.total.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            height: 50,
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
          }}
          onPress={() => {
            cusContext.dispatch({
              type: "set_cart_amount",
              value: state.total,
            });
            navigation.navigate("Checkout");
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              paddingLeft: 5,
              color: "#008080",
            }}
          >
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
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
  footer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    backgroundColor: "#008080",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
