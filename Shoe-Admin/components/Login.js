import React, { useState, useReducer, useEffect, useContext } from "react";
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
import { UserContext } from "../Context/Context";

// npm install react-native-loading-spinner-overlay
// import Spinner from "react-native-loading-spinner-overlay";

function Login({ navigation }) {
  const userContext = useContext(UserContext);
  // const [visibility, setVisible] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  function getCredentials() {
    const dbRef = firebase.database().ref();
    const dbtable = dbRef.child("admin_details");
    // const dbVentable=dbRef.child("vendor_details");
    dbtable
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          const array2 = snapshot.val();
          const userId = Object.keys(array2);
          const countObj = Object.keys(array2).length;
          var email, password, name;
          // console.log(userId);
          for (var i = 0; i < countObj; i++) {
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
              .child("fName")
              .get()
              .then((snapshot) => {
                name = snapshot.val();
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
                dbObj.push({ email, password, name });
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

    return dbObj;
  }

  const [userinput, setUserinput] = useState({
    username: "",
    password: "",
  });
  const [dbObj, setdbObj] = useState([getCredentials()]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.HeaderMain}>
          {/* This is section for the shop logo and header section */}
          <Image
            source={require("E:/Surabhi/TYBCA/Project/Project Code File/Shoe-Admin/images/shoe.jpg")}
            style={styles.logo}
          ></Image>
          <Text style={{ color: "#f5fffa", marginTop: 20, fontSize: 30 }}>
            Login Here
          </Text>
        </View>
        <View style={styles.login}>
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
          {/* <Spinner visible={visibility} textContent={"Loading..."} /> */}
          <TouchableOpacity
            style={styles.SignBtn}
            onPress={(e) => {
              if (userinput.username == "" || userinput.password == "") {
                Alert.alert("Error", "Please dont leave the boxes empty", [
                  {
                    text: "OK",
                    onPress: () => {
                      console.log("OK Pressed");
                    },
                  },
                ]);
              } else {
                const count = dbObj.length;
                var Name;
                var foundemail, foundpass;
                for (var i = 1; i < count; i++) {
                  if (dbObj[i].email == userinput.username) {
                    foundemail = 1;
                    if (dbObj[i].password == userinput.password) {
                      // Alert.alert("Success","Sign up Succesfull",[
                      //     { text: "OK", onPress: () =>{ console.log("OK Pressed");navigation.navigate('Dashboard')}}
                      //   ])
                      Name = dbObj[i].name;

                      foundpass = 1;
                      break;
                    }
                  }
                }
                if (foundemail == 1) {
                  if (foundpass == 1) {
                    Alert.alert("Success", "Sign up Succesful ", [
                      {
                        text: "OK",
                        onPress: () => {
                          userContext.dispatch({
                            type: "Change_User",
                            value: Name,
                          });
                          navigation.navigate("Adashboard");
                        },
                      },
                    ]);
                  } else {
                    Alert.alert("Error", "Wrong Password", [
                      {
                        text: "OK",
                        onPress: () => {
                          console.log("OK Pressed");
                        },
                      },
                    ]);
                  }
                } else {
                  Alert.alert("Error", "Wrong Credentials", [
                    {
                      text: "OK",
                      onPress: () => {
                        console.log("OK Pressed");
                      },
                    },
                  ]);
                }
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
            <TouchableOpacity onPress={(e) => navigation.navigate("AdminReg")}>
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
    height: 450,
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
    marginTop: 25,
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
