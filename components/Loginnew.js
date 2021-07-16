import React, { useState, useContext } from "react";
import firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { VendorContext, CustomerContext } from "../Context";

function Login({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const venContext = useContext(VendorContext);
  const [hidePass, setHidePass] = useState(true);
  function getCredentials(dbname) {
    const dbRef = firebase.database().ref();
    const dbtable = dbRef.child(dbname);

    // const dbVentable=dbRef.child("vendor_details");

    dbtable
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const array2 = snapshot.val();
          const userId = Object.keys(array2);
          const countObj = Object.keys(array2).length;
          var email, password, contact, name;
          //   console.log(userId);
          for (var i = 0; i < countObj; i++) {
            const user = userId[i];
            dbtable
              .child(userId[i])
              .child("Email")
              .get()
              .then((snapshot) => {
                email = snapshot.val();
                //    console.log(email)
              })
              .catch((error) => {
                console.log(error);
              });
            dbtable
              .child(userId[i])
              .child("Password")
              .get()
              .then((snapshot) => {
                password = snapshot.val();
                // console.log(password)
              })
              .catch((error) => {
                console.log(error);
              });
            dbtable
              .child(userId[i])
              .child("fName")
              .get()
              .then((snapshot) => {
                name = snapshot.val();
                // console.log(password)
              })
              .catch((error) => {
                console.log(error);
              });
            dbtable
              .child(userId[i])
              .child("Contact")
              .get()
              .then((snapshot) => {
                contact = snapshot.val();
                // console.log(password)
                if (dbname == "vendor_details") {
                  VdbObj.push({ email, password, contact, name, user });
                } else {
                  CdbObj.push({ email, password, contact, name, user });
                }

                // console.log(dbObj)
              })
              .catch((error) => {
                console.log(error);
              });
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (dbname == "vendor_details") {
      return VdbObj;
    } else {
      return CdbObj;
    }
  }

  const [userinput, setUserinput] = useState({
    username: "",
    password: "",
  });
  const [hightlight, setHighlight] = useState({
    vendor: "#DCDCDC",
    customer: "#DCDCDC",
    user: "",
    ventext: "#008080",
    custext: "#008080",
  });
  const [VdbObj, setVdbObj] = useState([getCredentials("vendor_details")]);
  const [CdbObj, setCdbObj] = useState([getCredentials("cust_details")]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.HeaderMain}>
          {/* This is section for the shop logo and header section */}
          <Image
            source={require("E:/Surabhi/TYBCA/Project/Project Code File/App/images/shoe.jpg")}
            style={styles.logo}
          ></Image>
          <Text style={{ color: "#f5fffa", marginTop: 20, fontSize: 30 }}>
            Login Here
          </Text>
        </View>

        <View style={styles.login}>
          <View style={{ flexDirection: "row", marginBottom: 15 }}>
            <TouchableOpacity
              style={[
                styles.SignBtn,
                {
                  backgroundColor: hightlight.vendor,
                  width: "40%",
                  marginRight: "6.7%",
                  marginLeft: "6.6%",
                },
              ]}
              onPress={(e) => {
                setHighlight({
                  vendor: "#008080",
                  customer: "#DCDCDC",
                  ventext: "#008080",
                  custext: "#FFFFFF",
                  user: "vendor",
                });
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "300",
                  color: hightlight.custext,
                }}
              >
                Vendor
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.SignBtn,
                {
                  backgroundColor: hightlight.customer,
                  width: "40%",
                  marginRight: "6.6%",
                },
              ]}
              onPress={(e) => {
                setHighlight({
                  vendor: "#DCDCDC",
                  customer: "#008080",
                  ventext: "#FFFFFF",
                  custext: "#008080",
                  user: "customer",
                });
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "300",
                  color: hightlight.ventext,
                }}
              >
                Customer
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Text>username</Text> */}
          <TextInput
            style={styles.CUS}
            placeholderTextColor="#202020"
            placeholder="Username"
            onChangeText={(text) => {
              setUserinput({
                ...userinput,
                username: text,
              });
            }}
          />
          {/* <Text>password</Text> */}
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={[
                styles.CUS,
                {
                  marginTop: 20,
                  width: "84%",
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                },
              ]}
              secureTextEntry={hidePass ? true : false}
              placeholderTextColor="#202020"
              placeholder="Password"
              onChangeText={(text) => {
                setUserinput({
                  ...userinput,
                  password: text,
                });
              }}
            />
            <Icon
              style={{
                borderWidth: 0,
                marginTop: 30,
                // width: "10%",
                marginLeft: 15,
              }}
              name={hidePass ? "eye-slash" : "eye"}
              size={15}
              borderBottomLeftRadius={0}
              borderTopLeftRadius={0}
              color="grey"
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          {/* <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.SignBtn}
            onPress={(e) => {
              if (hightlight.user == "vendor") {
                if (userinput.username == "" || userinput.password == "") {
                  console.log("Empty");
                  Alert.alert("Error", "Please dont leave the boxes empty", [
                    {
                      text: "OK",
                      onPress: () => {
                        console.log("Empty");
                      },
                    },
                  ]);
                } else {
                  const count = VdbObj.length;
                  var Name, id;
                  var foundemail, foundpass;
                  for (var i = 1; i < count; i++) {
                    if (
                      VdbObj[i].email == userinput.username ||
                      VdbObj[i].contact == userinput.username
                    ) {
                      foundemail = 1;
                      if (VdbObj[i].password == userinput.password) {
                        // Alert.alert("Success","Sign up Succesfull",[
                        //     { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Dashboard')}}
                        //   ])
                        Name = VdbObj[i].name;
                        id = VdbObj[i].user;
                        foundpass = 1;
                        break;
                      }
                    }
                  }
                  if (foundemail == 1) {
                    if (foundpass == 1) {
                      console.log("Success");
                      Alert.alert("Success", "Sign up Succesful", [
                        {
                          text: "OK",
                          onPress: () => {
                            console.log("Success");
                            venContext.dispatch({
                              type: "Change_User",
                              value: Name,
                              id: id,
                            });
                            navigation.navigate("Vdashboard");
                          },
                        },
                      ]);
                    } else {
                      console.log("Wrong Password");
                      Alert.alert("Error", "Wrong Password", [
                        {
                          text: "OK",
                          onPress: () => {
                            console.log("Wrong Password");
                          },
                        },
                      ]);
                    }
                  } else {
                    console.log("Wrong Credentials");
                    Alert.alert("Error", "Wrong Credentials", [
                      {
                        text: "OK",
                        onPress: () => {
                          console.log("Wrong Credentials");
                        },
                      },
                    ]);
                  }
                }
              } else if (hightlight.user == "customer") {
                if (userinput.username == "" || userinput.password == "") {
                  console.log("Empty");
                  Alert.alert("Error", "Please dont leave the boxes empty", [
                    {
                      text: "OK",
                      onPress: () => {
                        console.log("Empty");
                      },
                    },
                  ]);
                } else {
                  const count = CdbObj.length;
                  var Name, id;
                  var foundemail, foundpass;
                  for (var i = 1; i < count; i++) {
                    if (
                      CdbObj[i].email == userinput.username ||
                      CdbObj[i].contact == userinput.username
                    ) {
                      foundemail = 1;
                      if (CdbObj[i].password == userinput.password) {
                        // Alert.alert("Success","Sign up Succesfull",[
                        //     { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Dashboard')}}
                        //   ])
                        foundpass = 1;
                        Name = CdbObj[i].name;
                        id = CdbObj[i].user;
                        break;
                      }
                    }
                  }
                  if (foundemail == 1) {
                    if (foundpass == 1) {
                      console.log("Success");
                      Alert.alert("Success", "Sign up Succesful", [
                        {
                          text: "OK",
                          onPress: () => {
                            console.log("Success");
                            cusContext.dispatch({
                              type: "Change_User",
                              value: Name,
                              id: id,
                            });
                            navigation.navigate("Adashboard");
                            navigation.navigate("Cdashboard");
                          },
                        },
                      ]);
                    } else {
                      console.log("Wrong Password");
                      Alert.alert("Error", "Wrong Password", [
                        {
                          text: "OK",
                          onPress: () => {
                            console.log("Wrong Password");
                          },
                        },
                      ]);
                    }
                  } else {
                    console.log("Wrong Credentials");
                    Alert.alert("Error", "Wrong Credentials", [
                      {
                        text: "OK",
                        onPress: () => {
                          console.log("Wrong Credentials");
                        },
                      },
                    ]);
                  }
                }
              } else {
                console.log("No User");
                Alert.alert("Error", "Please select the user type", [
                  {
                    text: "OK",
                    onPress: () => {
                      console.log("No user");
                    },
                  },
                ]);
              }
              // console.log(userinput);
              // console.log(dbObj[1])
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "300", color: "#ffffff" }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity
              onPress={(e) => {
                if (hightlight.user == "vendor") {
                  Alert.alert("Error", "Vendor can't register", [
                    {
                      text: "OK",
                      onPress: () => {
                        console.log("No user");
                      },
                    },
                  ]);
                } else {
                  navigation.navigate("CustomerReg");
                }
              }}
            >
              <Text style={{ textDecorationLine: "underline", color: "red" }}>
                Register Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f5fffa",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  HeaderMain: {
    // flex:2,
    height: 380,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderLeftColor: "#8844ad",
    paddingTop: 20,
    backgroundColor: "#008080",
    borderBottomStartRadius: 120,
  },
  logo: {
    height: 170,
    width: 170,
    borderRadius: 70,
  },
  login: {
    // marginTop:10,
    justifyContent: "center",
    alignItems: "center",
  },
  CUS: {
    // backgroundColor: "#E0FFFF",
    fontSize: 15,
    textAlign: "center",
    width: "93%",
    borderWidth: 1.5,
    padding: 5,
    marginBottom: 10,
    marginTop: 10,
    borderColor: "#008080",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    // color: "#202020"
  },
  SignBtn: {
    marginTop: 30,
    marginLeft: "1.5%",
    backgroundColor: "#008080",
    width: "93%",
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 25,
  },
});
