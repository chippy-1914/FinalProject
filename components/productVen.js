import React, { useContext, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import firebase from "firebase";
import { Dimensions } from "react-native";
import { CustomerContext, ProductContext } from "../Context";
import { Alert } from "react-native";
TouchableOpacity.defaultProps = { activeOpacity: 0.5 };

export default function ProductVen({ navigation }) {
  const prodContext = useContext(ProductContext);
  const cusContext = useContext(CustomerContext);
  const product = prodContext.data.current;
  const [isLoading, setLoad] = useState(true);
  const [arrayS, setArrayS] = useState([]);
  const [arrayC, setArrayC] = useState([]);
  const [s, setS] = useState();
  const [c, setC] = useState();
  const [image, setImage] = useState("");
  const ref = firebase.storage().ref("images/" + product[0]);

  const count =
    cusContext.data.cart_key.indexOf(cusContext.data.current_id) != -1
      ? cusContext.data.cart[product[0]] != undefined
        ? JSON.stringify(cusContext.data.cart[product[0]].unit)
        : 0
      : 0;
  // console.log(count.slice(16, 17));
  const table = ref
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {
      console.log(error);
    });

  const size = prodContext.data.prod_details[product[2]].size;
  const color = Object.keys(
    Object.values(prodContext.data.prod_details[product[2]].size)[0]
  );
  arrayC.splice(0, arrayC.length);
  color.forEach((element) => {
    var color_each = element.toLowerCase();
    // console.log(color_each);
    arrayC.push(
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: color_each,
          width: 30,
          backgroundColor: color_each,
          elevation: 7,
          marginLeft: 5,
          borderRadius: 2,
          height: 30,
        }}
        onPress={() => setC(color_each)}
      ></TouchableOpacity>
    );
  });

  arrayS.splice(0, arrayS.length);
  Object.keys(size).forEach((element) => {
    arrayS.push(
      <TouchableOpacity style={styles.SizeBtn} onPress={() => setS(element)}>
        <Text style={styles.btnText}>{element}</Text>
      </TouchableOpacity>
    );
  });
  // console.log(color);
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={styles.imgcontainer}>
          <Image
            source={{
              height: 200,
              width: 330,

              uri: image,
            }}
          />
        </View>
        <TouchableOpacity style={styles.heart}>
          <Icon name={"heart"} size={30} color={"white"} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrl}>
          <View style={styles.heading}>
            <Text
              style={{
                fontSize: 25,
                width: "70%",
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              {product[1].product_name}
            </Text>
            <Text style={{ color: "#D2042D", fontSize: 25, paddingBottom: 10 }}>
              ₹{product[1].final_price}
            </Text>
          </View>

          <View style={styles.clrcont}>
            {/* <Button  title="red" color="red" /> */}
            {arrayC}
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Size</Text>
            <ScrollView
              horizontal={true}
              style={styles.szcont}
              showsHorizontalScrollIndicator={false}
            >
              {arrayS}

              {/* <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={{fontSize:20,fontWeight:"300",color:"black",textAlign:'center',paddingTop:10}} >10</Text>
                    </TouchableOpacity>  */}

              {/* <TouchableOpacity style={[styles.SizeBtn,{backgroundColor:  (press.thirteen) ? "black":"lightgrey" }]} onPressIn={setpress({...press,thirteen:!press})} >
                        <Text style={[styles.btnText,{color: (press.thirteen) ? "white":"black"}] } >13</Text>
                    </TouchableOpacity>   */}
            </ScrollView>
          </View>

          <View>
            <Text
              style={{
                fontSize: 15,
                color: "#36515c",
                paddingBottom: 5,
                marginTop: 5,
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Tax-{product[1].tax_amt}%, Discount- {product[1].discount}%,
              Delivery Charge- ₹ {product[1].delivery_fee}
            </Text>
            <Text style={{ fontSize: 15, color: "grey" }}>
              {product[1].product_description}
            </Text>
            {/* <View style={styles.imgroll}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
                more from our collection
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.imgcont}
              >
                <Image
                  style={styles.imgbtn}
                  source={{
                    height: 100,
                    width: 100,
                    uri: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bb6383ef-cafb-4f3e-8e77-52178026c164/air-jordan-1-court-purple-release-date.jpg",
                  }}
                />
                <Image
                  style={styles.imgbtn}
                  source={{
                    height: 100,
                    width: 100,
                    uri: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b7d84ee-2812-4a2a-b786-adb3a7a3d44b/air-presto-id-shoe.png",
                  }}
                />
                <Image
                  style={styles.imgbtn}
                  source={{
                    height: 100,
                    width: 100,
                    uri: "https://www.thenextsole.com/storage/images/CZ0602-434.png",
                  }}
                />
              </ScrollView>
            </View> */}

            <View>
              <View style={styles.fnbtn}>
                <TouchableOpacity
                  style={styles.cart}
                  onPress={() => {
                    // firebase
                    //   .database()
                    //   .ref()
                    //   .child("cart_details/" + cusContext.data.current_id + "/")
                    //   .set({
                    //     [product[0]]: 1,

                    Alert.alert("Success", "Successfully removed.", [
                      {
                        text: "OK",
                        onPress: () => {
                          firebase
                            .database()
                            .ref()
                            .child("prod_details")
                            .child(product[0])
                            .remove();
                        },
                      },
                    ]);

                    // navigation.navigate("Addtocart");
                  }}
                >
                  <Text style={styles.txt}>Delete</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.rev}
                onPress={() => navigation.navigate("ViewReview")}
              >
                <Text style={styles.revtxt}>Review</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: Dimensions.get("window").height,
    maxWidth: "90%",
    marginTop: 40,
    marginBottom: 20,
    paddingTop: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "lightblue",
  },
  imgcontainer: {
    height: "30%",
    // backgroundColor: 'red',
    alignSelf: "center",
    marginBottom: 5,
    position: "absolute",
  },
  scrl: {
    marginTop: "50%",
  },
  innercontainer: {
    padding: 10,
  },
  heading: {
    //   flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clrcont: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "lightblue",
    borderRadius: 5,
    maxWidth: "100%",
    marginBottom: 20,
  },
  szcont: {
    borderWidth: 1,
    borderColor: "lightblue",
    // maxHeight: 80,
    marginTop: 10,
    // marginBottom: 10,
    //   justifyContent: 'center'
    // paddingTop: 25
  },
  SizeBtn: {
    height: 60,
    width: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 5,
    elevation: 5,
  },
  imgcont: {
    borderWidth: 1,
    borderColor: "lightblue",
    marginTop: 10,
  },
  imgbtn: {
    borderRadius: 10,
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    paddingTop: 10,
    color: "black",
  },
  heart: {
    height: 45,
    width: 45,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "darkgrey",
    borderColor: "lightgrey",
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 10,
    padding: 5,
  },

  cart: {
    height: 35,
    width: "130%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10,
    paddingTop: 2,
  },
  txt: {
    color: "white",
    fontSize: 20,
  },
  fnbtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "73%",
    marginBottom: 10,
  },
  rev: {
    height: 35,
    width: "100%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: "center",
    // marginBottom: 20
  },
  revtxt: {
    color: "white",
    fontSize: 20,
    paddingTop: 2,
  },
});
