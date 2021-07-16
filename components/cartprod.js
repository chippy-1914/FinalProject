import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ProductContext, VendorContext, CustomerContext } from "../Context";
import firebase from "firebase";
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//   } from 'react-native-fontawesome';

function Cartprod(props) {
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
  useEffect(() => {
    cusContext.dispatch({
      type: "set_cart_amount",
      value: cusContext.data.total_cart + price,
    });
  }, []);

  return (
    <View
      style={{
        height: 180,
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
          source={{
            uri: image,
          }}
          style={{ height: 140, width: 120, marginRight: 15 }}
        />
        {/* console.log(props.image) */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingBottom: 10,
            width: "60%",
          }}
        >
          <View style={{ flexDirection: "column", marginBottom: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 15 }}>{ven_name}</Text>
          </View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rs.{price} per piece
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 5,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              {/* <TouchableOpacity
                  onPress={() => {
                    setCount(count - 1);
                    // cusContext.dispatch({type:c})
                  }}
                >
                  <Icon size={20} name={"minus"} />
                </TouchableOpacity> */}
              <View>
                <Text style={{ marginLeft: 5, fontSize: 17, marginRight: 5 }}>
                  Unit {count}
                </Text>
              </View>
              {/* <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}
                >
                  <Icon size={20} name={"plus"} />
                </TouchableOpacity> */}
            </View>

            <TouchableOpacity
              onPress={() => {
                Alert.alert("Deleted", "This product is successfully deleted", [
                  {
                    text: "OK",
                    onPress: () => {
                      // cusContext.dispatch({
                      //   type: "delete_cart",
                      //   value: props.id,
                      //   index: props.index,

                      // });
                      firebase
                        .database()
                        .ref()
                        .child("cart_details/")
                        .child(cusContext.data.current_id)
                        .child(prodContext.data.prod_key[props.id])
                        .remove();
                    },
                  },
                ]);
              }}
            >
              <Icon
                size={20}
                name={props.icon}
                // width={30}
                color="red"
                // onPress={() => setHidePass(!hidePass)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Cartprod;
