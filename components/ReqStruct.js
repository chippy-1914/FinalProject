import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { ProductContext, VendorContext, CustomerContext } from "../Context";
import firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//   } from 'react-native-fontawesome';

function ReqStruct(props) {
  const prodContext = useContext(ProductContext);
  const venContext = useContext(VendorContext);
  const cusContext = useContext(CustomerContext);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState();
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
                width: "65%",
                borderRadius: 15,
                marginTop: 10,
              }}
              onPress={() => setVisible(true)}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Update status
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
                    onChangeText={(text) => setUser(text)}
                    placeholder={"Name"}
                    placeholderTextColor="black"
                  />
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
                      onPress={() => {
                        firebase
                          .database()
                          .ref()
                          .child("order_details")
                          .child(props.user[1])
                          .update({ order_status: user });
                        setVisible(false);
                      }}
                    >
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ReqStruct;
