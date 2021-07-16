import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { CustomerContext } from "../Context";

export default function Userprofile({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const email =
    cusContext.data.user != "Customer"
      ? cusContext.data.cus_details[
          cusContext.data.cus_key.indexOf(cusContext.data.current_id)
        ].Email
      : "Login Please";
  return (
    // <View><Text>hellooooooo</Text></View>
    <View style={styles.container}>
      <View style={styles.topbar}></View>

      <View style={{ height: "60%" }}>
        <LinearGradient
          colors={["#abe9cd", "#3eadcf"]}
          style={styles.linearGradient}
        ></LinearGradient>
        <TouchableOpacity style={styles.profile}>
          <Icon
            name={"user"}
            size={60}
            color={"grey"}
            style={{ alignSelf: "center", paddingTop: 5 }}
          />
        </TouchableOpacity>
        <Text style={styles.username}>{cusContext.data.user}</Text>
        <Text style={styles.email}>{email}</Text>
        <View style={styles.midbar}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Icon
              name={"receipt"}
              size={30}
              color={"black"}
              onPress={() => navigation.navigate("Orderpage")}
            />
            <Icon
              name={"heart"}
              size={30}
              color={"black"}
              onPress={() => {
                navigation.navigate("Wishlist");
              }}
            />
            <Icon
              name={"search"}
              size={30}
              color={"black"}
              onPress={() => {
                navigation.navigate("Searchprod");
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 2,
            }}
          >
            <Text style={{ marginTop: 10 }}>My Orders</Text>
            <Text style={{ marginTop: 10, paddingRight: 20 }}>Wishlist</Text>
            <Text style={{ marginTop: 10 }}>Search</Text>
          </View>
        </View>
      </View>

      <View style={styles.lowerbar}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,height:55,borderBottomWidth:1,borderTopWidth:1,marginBottom:5}}>
                    <Icon name={"hand-holding-usd"} size={25} color={"grey"} style={{alignSelf:'center'}}/>
                    <Text style={{alignSelf:'center',fontSize:18}}>My Payments</Text >
                    <Icon name={"chevron-right"} size={25} color={"grey"} style={{alignSelf:'center'}}/>
                </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              height: 70,
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          >
            <Icon
              name={"user"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text
                style={{ alignSelf: "center", fontSize: 18, paddingTop: 10 }}
              >
                My Profile
              </Text>
            </TouchableOpacity>
            <Icon
              name={"chevron-right"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              height: 70,
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          >
            <Icon
              name={"shopping-cart"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Addtocart")}>
              <Text
                style={{ alignSelf: "center", fontSize: 18, paddingTop: 10 }}
              >
                My Cart
              </Text>
            </TouchableOpacity>
            <Icon
              name={"chevron-right"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
          </View>
          {/* <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,height:70,borderBottomWidth:1,marginBottom:5}}>
                    <Icon name={"store"} size={25} color={"grey"} style={{alignSelf:'center'}}/> 
                    <Text style={{alignSelf:'center',fontSize:18}}>Become a Supplier</Text >
                    <Icon name={"chevron-right"} size={25} color={"grey"} style={{alignSelf:'center'}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,height:70,borderBottomWidth:1,marginBottom:5}}>
                    <Icon name={"cog"} size={25} color={"grey"} style={{alignSelf:'center'}}/> 
                    <Text style={{alignSelf:'center',fontSize:18}}>Settings</Text >
                    <Icon name={"chevron-right"} size={25} color={"grey"} style={{alignSelf:'center'}}/>
                </View> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              height: 70,
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          >
            <Icon
              name={"phone"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Helpline")}>
              <Text
                style={{ alignSelf: "center", fontSize: 18, paddingTop: 10 }}
              >
                Helpline
              </Text>
            </TouchableOpacity>
            <Icon
              name={"chevron-right"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              height: 70,
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          >
            <Icon
              name={"sign-out-alt"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
            <TouchableOpacity
              onPress={() => {
                if (cusContext.data.user == "Customer") {
                  navigation.navigate("Login");
                } else {
                  cusContext.dispatch({
                    type: "Change_User",
                    value: "Customer",
                    id: "",
                  });
                }
              }}
            >
              <Text
                style={{ alignSelf: "center", fontSize: 18, paddingTop: 10 }}
              >
                {cusContext.data.user == "Customer" ? "Log In" : "Log Out"}
              </Text>
            </TouchableOpacity>
            <Icon
              name={"chevron-right"}
              size={25}
              color={"grey"}
              style={{ alignSelf: "center" }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    height: "100%",
  },
  topbar: {
    height: "5%",
    // backgroundColor: '#37d5d6'
    backgroundColor: "#24C6DC",
  },
  linearGradient: {
    // flex: 1,
    height: "60%",
  },
  profile: {
    // flex: 1,
    height: 80,
    width: 80,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderRadius: 50,
    position: "absolute",
    marginTop: 30,
    alignSelf: "center",
  },
  username: {
    // backgroundColor: "red",
    alignSelf: "center",
    position: "absolute",
    marginTop: 120,
    fontSize: 20,
    color: "white",
  },
  email: {
    alignSelf: "center",
    position: "absolute",
    marginTop: 155,
    fontSize: 15,
    color: "white",
  },
  midbar: {
    // flexDirection: 'row',
    position: "absolute",
    height: "20%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    alignSelf: "center",
    marginTop: "60%",
    padding: 20,
    backgroundColor: "white",
    elevation: 15,
  },
  lowerbar: {
    height: "60%",
    width: "100%",
    paddingTop: "28%",
    backgroundColor: "white",
    marginTop: "80%",
    position: "absolute",
  },
});
