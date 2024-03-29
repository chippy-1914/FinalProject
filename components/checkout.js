import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from "react-native";
// import  Icon from 'react-native-vector-icons/FontAwesome5';
import CheckProd from "./checkProd";
import { StatusBar } from "expo-status-bar";
import firebase from "firebase";
import { ProductContext, CustomerContext } from "../Context";
function Checkout({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const prodContext = useContext(ProductContext);
  const [arrayCart, setCartArr] = useState([]);

  arrayCart.splice(0, arrayCart.length);
  const cus_key = cusContext.data.cus_key.indexOf(cusContext.data.current_id);
  const customer = cusContext.data.cus_details[cus_key];
  const cart_index = cusContext.data.cart_key.indexOf(
    cusContext.data.current_id
  );
  const cart_key =
    cart_index != -1 ? Object.keys(cusContext.data.cart[cart_index]) : [];
  cart_key.forEach((element, index) => {
    // console.log(element);
    // console.log();
    arrayCart.push(
      // <Cartprod
      //   product={element}
      //   deets={cusContext.data.cart[element]}
      //   id={prodContext.data.prod_key.indexOf(element)}
      //   index={index}
      // />
      <CheckProd
        product={element}
        deets={cusContext.data.cart[cart_index][element]}
        id={prodContext.data.prod_key.indexOf(element)}
        index={index}
      />
    );
  });
  // const display = [];
  // const prod = [
  //   {
  //     prod_name: "Nike Shoe",
  //     vendor_name: "ABC Retailers",
  //     prod_image:
  //       "https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  //     item_count: 1,
  //     price: 230,
  //   },
  //   {
  //     prod_name: "Heels",
  //     vendor_name: "CDF Retailers",
  //     prod_image:
  //       "https://i.pinimg.com/originals/26/8e/2d/268e2d5a945661c6bff2a83c5da9e77c.jpg",
  //     item_count: 2,
  //     price: 230,
  //   },
  // ];

  const [user, setUser] = useState({
    name: customer.fName + " " + customer.lName,
    address: customer.Add1 + " " + customer.Add2 + " " + customer.Landmark,
    address2: customer.District + " " + customer.City + " " + customer.State,
    pincode: customer.Pincode,
    ph: customer.Contact,
    email: customer.Email,
  });
  const [visible, setVisible] = useState(false);
  const state = {
    total: 0,
  };

  // for (var i = 0; i < prod_len; i++) {
  //   display.push(
  //     <CheckProd
  //       name={prod[i].prod_name}
  //       image={prod[i].prod_image}
  //       count={prod[i].item_count}
  //       price={prod[i].price * prod[i].item_count}
  //       vendor={prod[i].vendor_name}
  //       icon="trash"
  //     />
  //   );
  //   state.total = state.total + prod[i].price * prod[i].item_count;
  // }

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
            Checkout
          </Text>
        </View>

        <View style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 20 }}>
          <View
            style={{
              marginBottom: 20,
              backgroundColor: "#e8e8e8",
              borderRadius: 10,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}>
              Shipping Address-
            </Text>
            <Text style={{ fontSize: 17, paddingLeft: 5, marginTop: 5 }}>
              {user.name}
            </Text>
            <Text style={{ fontSize: 17, paddingLeft: 5 }}>{user.address}</Text>
            <Text style={{ fontSize: 17, paddingLeft: 5 }}>
              {user.address2}
            </Text>
            <Text style={{ fontSize: 17, paddingLeft: 5 }}>{user.pincode}</Text>
            <Text style={{ fontSize: 17, paddingLeft: 5 }}>{user.email}</Text>
            <Text style={{ fontSize: 17, paddingLeft: 5 }}>+91 {user.ph}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#008080",
                height: 25,
                width: "45%",
                marginTop: 5,
                borderRadius: 15,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: 5,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
                onPress={() => setVisible(true)}
              >
                Change User Information
              </Text>
            </TouchableOpacity>

            <Modal
              animationType={"fade"}
              visible={visible}
              transparent={true}
              onRequestClose={() => {
                setVisible(!visible);
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <View
                  style={{
                    padding: 15,
                    backgroundColor: "#fff",
                    borderRadius: 30,
                    margin: 20,
                    alignItems: "stretch",
                    width: "90%",
                    height: 300,
                  }}
                >
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      height: 40,
                      paddingLeft: 10,
                      marginBottom: 10,
                    }}
                    onChangeText={(text) => setUser({ ...user, name: text })}
                    placeholder={"Name"}
                    placeholderTextColor="black"
                  />
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      height: 60,
                      paddingLeft: 10,
                      marginBottom: 10,
                    }}
                    onChangeText={(text) => setUser({ ...user, address: text })}
                    placeholder={"Address line 1"}
                    // multiline={true}
                    placeholderTextColor="black"
                  />
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: "black",
                      borderRadius: 10,
                      height: 60,
                      paddingLeft: 10,
                      marginBottom: 10,
                    }}
                    onChangeText={(text) =>
                      setUser({ ...user, address2: text })
                    }
                    placeholder={"Address line 2"}
                    // multiline={true}
                    placeholderTextColor="black"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        height: 40,
                        paddingLeft: 10,
                        marginBottom: 10,
                        width: "40%",
                      }}
                      keyboardType="numeric"
                      onChangeText={(text) =>
                        setUser({ ...user, pincode: text })
                      }
                      placeholder={"Pincode"}
                      placeholderTextColor="black"
                    />
                    <TextInput
                      style={{
                        borderWidth: 1,
                        borderColor: "black",
                        borderRadius: 10,
                        height: 40,
                        paddingLeft: 10,
                        marginBottom: 10,
                        width: "50%",
                      }}
                      keyboardType="numeric"
                      onChangeText={(text) => setUser({ ...user, ph: text })}
                      placeholder={"Alternate Phone no"}
                      placeholderTextColor="black"
                    />
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#008080",
                      height: 50,
                      width: "60%",
                      marginLeft: "20%",
                      borderRadius: 15,
                      justifyContent: "center",
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 19,
                        fontWeight: "bold",
                        paddingLeft: 5,
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                      onPress={() => setVisible(false)}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}>
            Your Order {arrayCart.length}
          </Text>

          {arrayCart}
          <View style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 20 }}>
            <View
              style={{
                marginBottom: 20,
                backgroundColor: "#e8e8e8",
                borderRadius: 10,
                paddingTop: 20,
                paddingBottom: 20,
                // paddingLeft: 5,
                paddingRight: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}
                >
                  Total Amount-
                </Text>
                <Text style={{ fontSize: 17, paddingLeft: 5 }}>
                  Rs.{cusContext.data.total_cart}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  paddingLeft: 5,
                  textAlign: "center",
                  color: "red",
                }}
              >
                (including shipping charges,discount and taxes*)
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", paddingLeft: 5 }}
                >
                  Payment Mode-
                </Text>
                <Text style={{ fontSize: 17, paddingLeft: 5 }}>
                  Cash on delivery (Default)
                </Text>
              </View>
              {/* <Text style={{fontSize:17, paddingLeft:5}}>+91 9964871258</Text> */}
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#008080",
            height: 50,
            width: "60%",
            marginLeft: "20%",
            borderRadius: 15,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              paddingLeft: 5,
              color: "#FFFFFF",
              textAlign: "center",
            }}
            onPress={() => {
              Alert.alert(
                "Order Confirmed",
                "Your Order Request has been sucessfully sent to the Vendor.",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      cart_key.forEach((element, index) => {
                        const id = prodContext.data.prod_key.indexOf(element);
                        firebase
                          .database()
                          .ref()
                          .child("order_details")
                          .push({
                            product_id: [element][0],
                            vendor_id:
                              prodContext.data.prod_details[id].vendor_id,
                            unit: cusContext.data.cart[cart_index][element]
                              .unit,
                            size: cusContext.data.cart[cart_index][element]
                              .size,
                            color:
                              cusContext.data.cart[cart_index][element].color,
                            user_id: cusContext.data.current_id,
                            user: user,
                            order_status: "placed",
                            message: "",
                          });
                      });
                      firebase
                        .database()
                        .ref()
                        .child("cart_details/")
                        .child(cusContext.data.current_id)
                        .remove();
                      const final_cart = cusContext.data.cart;
                      final_cart.splice(cart_index, 1);
                      cusContext.dispatch({
                        type: "cart_add",
                        value: final_cart,
                      });
                      navigation.navigate("Cdashboard");
                    },
                  },
                ]
              );
            }}
          >
            Confirm Order
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Checkout;

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
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
