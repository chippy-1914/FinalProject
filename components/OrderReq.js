import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import firebase from "firebase";
import ReqStruct from "./ReqStruct";
import { ProductContext, CustomerContext, VendorContext } from "../Context";
export default function OrderReq({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const venContext = useContext(VendorContext);
  const [arrayCart, setCartArr] = useState([]);
  console.log(cusContext.data.current_id);

  arrayCart.splice(0, arrayCart.length);

  // const cus_key = cusContext.data.cus_key.indexOf(cusContext.data.current_id);
  // const customer = cusContext.data.cus_details[cus_key];
  // const order_index = cusContext.data.order_key.indexOf(
  //   cusContext.data.current_id
  // );
  // const order_key =
  //   order_index != -1 ? Object.keys(cusContext.data.order[order_index]) : [];

  cusContext.data.order_key.forEach((ele, index) => {
    console.log(ele);
    const element = cusContext.data.order[index];
    if (element.vendor_id == venContext.data.current_id) {
      arrayCart.push(
        <ReqStruct
          user={[element.user_id, ele]}
          size={element.size}
          unit={element.unit}
          prod={element.product_id}
          status={element.order_status}
          navigation={navigation}
          color={element.color}
          vendor={element.vendor_id}
        />
      );
    }
  });
  return (
    <View style={{ flex: 1 }}>
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
            ORDER Requests
          </Text>
        </View>
        <View
          style={{ flex: 1, paddingLeft: 10, paddingRight: 10, marginTop: 20 }}
        >
          {arrayCart}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerMain: {
    backgroundColor: "#008080",
    justifyContent: "center",
    height: 70,
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
