import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import { SearchBar } from "react-native-elements";
import { VendorContext } from "../Context";
import { ProductContext } from "../Context";
function Vdashboard({ navigation }) {
  const venContext = useContext(VendorContext);
  const prodContext = useContext(ProductContext);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ height: 500, paddingTop: 80, paddingLeft: 20 }}>
        <Icon
          size={50}
          name={"user"}
          color="white"
          // onPress={() => setHidePass(!hidePass)}
        />
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 30,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Hello {venContext.data.user},
        </Text>
        {/* <SearchBar
          inputContainerStyle={{
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            height: 20,
            borderRadius: 35,
          }}
          containerStyle={{
            backgroundColor: "rgba(52, 52, 52, 1)",
            width: "95%",
            height: 50,
            borderRadius: 35,
          }}
          placeholder="Type Here..."
          // onChangeText={this.updateSearch}
          // value={search}
        /> */}
        <View style={{ paddingLeft: "5%", marginTop: 25 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "column",
                width: 170,
                height: 170,
                backgroundColor: "rgba(237, 237, 237,0.4)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate("AddProd")}
              >
                <Icon size={90} name={"plus"} color="white" />
                <Text
                  style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }}
                >
                  Add Product
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                width: 170,
                height: 170,
                backgroundColor: "rgba(237, 237, 237,0.4)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => navigation.navigate("Vsearch")}
              >
                <Icon size={90} name={"trash"} color="white" />
                <Text
                  style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }}
                >
                  Manage Product
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flexDirection: "column",
                width: 170,
                height: 170,
                backgroundColor: "rgba(237, 237, 237,0.4)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Icon size={90} name={"pen"} color="white" />
                <Text
                  style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }}
                >
                  Update Product
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                width: 170,
                height: 170,
                backgroundColor: "rgba(237, 237, 237,0.4)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Icon size={90} name={"file"} color="white" />
                <Text
                  style={{
                    fontSize: 18,
                    paddingLeft: 13,
                    color: "#FFFFFF",
                    fontWeight: "bold",
                  }}
                >
                  Report
                </Text>
              </TouchableOpacity>
            </View> */}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: "center",
          height: 400,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("OrderReq")}>
          <Text
            style={{
              fontSize: 30,
              marginTop: 10,
              color: "#008080",
              fontWeight: "bold",
            }}
          >
            Order Requests
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Vdashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    // alignItems: 'center',
  },
});
