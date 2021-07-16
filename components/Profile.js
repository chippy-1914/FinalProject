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
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CustomerContext } from "../Context";
export default function Profile({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const cus_index = cusContext.data.cus_key.indexOf(cusContext.data.current_id);
  const cust = cusContext.data.cus_details[cus_index];
  return (
    <View style={styles.container}>
      <View style={styles.lowerbar}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.profile}>
            <Icon
              name={"user"}
              size={70}
              color={"grey"}
              style={{ alignSelf: "center", paddingTop: 8 }}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Name</Text>
          <View style={styles.outline}>
            <Icon name={"user"} size={20} color={"grey"} />
            <Text style={styles.txt}>
              {cust.fName} {cust.lName}
            </Text>
          </View>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.outline}>
            <Icon name={"phone"} size={20} color={"grey"} />
            <Text style={styles.txt}>{cust.Contact}</Text>
          </View>
          <Text style={styles.label}>Address</Text>
          <View style={styles.addoutline}>
            <Icon name={"home"} size={20} color={"grey"} />
            <Text style={styles.txt}>
              {cust.Add1}, {cust.Add2}, {cust.Landmark}, {cust.District},{" "}
              {cust.City}, {cust.State}
              {"\n"}
              {cust.Pincode}
            </Text>
          </View>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.outline}>
            <Icon name={"envelope"} size={20} color={"grey"} />
            <Text style={styles.txt}>{cust.Email}</Text>
          </View>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.outline}>
            <Text style={styles.txt}>{cust.Gender}</Text>
          </View>

          {/* <View style={styles.outline}><Text>Jane doe</Text></View> */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    marginTop: 30,
    // backgroundColor:'red'
  },
  topbar: {
    flexDirection: "row",
    height: "10%",
    backgroundColor: "#56CCF2",
    paddingTop: 18,
    paddingLeft: 5,
  },
  txt: {
    fontSize: 16,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  label: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  username: {
    fontSize: 25,
    alignSelf: "center",
    marginLeft: "15%",
    marginBottom: 16,
    color: "white",
    // backgroundColor:'green'
  },
  lowerbar: {
    borderWidth: 7,
    borderTopWidth: 0,
    borderColor: "#56CCF2",
    // backgroundColor:'pink',
    padding: 5,
  },
  profile: {
    // flex: 1,
    height: 100,
    width: 100,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderRadius: 50,
    // position: 'absolute',
    marginTop: 30,
    alignSelf: "center",
  },
  outline: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#bdc3c7",
    height: 50,
    width: "90%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "center",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
    // backgroundColor:'red',
  },
  addoutline: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#bdc3c7",
    height: 100,
    width: "90%",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: "center",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
});
