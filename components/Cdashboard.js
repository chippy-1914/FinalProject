import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import Slider from "./offerpage";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import { SearchBar } from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
// import firebase from "firebase";
import ShortProdView from "./ShortProdView";
import { CustomerContext } from "../Context";
import { ProductContext } from "../Context";

// import images from './assets'

function Cdashboard({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const prodContext = useContext(ProductContext);
  const [isLoading, setLoad] = useState(true);
  const [arrayP, setArrayP] = useState([]);
  useEffect(() => {
    // console.log(prodContext.data.prod_details);
    arrayP.splice(0, arrayP.length);
    prodContext.data.prod_details.forEach((element, index) => {
      console.log(index);
      arrayP.push(
        <ShortProdView
          key={index}
          index={index}
          value={element}
          navigation={navigation}
        />
      );
      // console.log(element);
    });

    setTimeout(() => {
      // console.log(data);

      setLoad(false);

      console.log(isLoading);
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/564x/a3/21/1e/a3211e4ae03f503f90188bf580e4993e.jpg",
          }}
          style={{ width: "100%", height: 250 }}
          blurRadius={0.4}
          imageStyle={{ height: 275 }}
        >
          <View style={styles.headerMain}>
            {/* <Text  style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>DASHBOARD</Text> */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 15,
                paddingLeft: 10,
              }}
            >
              <TouchableOpacity
                style={{ marginTop: 8, width: "8%" }}
                onPress={() => navigation.navigate("Userprofile")}
              >
                <Icon
                  size={30}
                  name={"user"}
                  // width={30}
                  color="white"
                  // onPress={() => setHidePass(!hidePass)}
                />
              </TouchableOpacity>
              {/* <SearchBar
                inputContainerStyle={{ backgroundColor: "white", height: 20 }}
                containerStyle={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginLeft: "3%",
                  width: "75%",
                  marginRight: 10,
                  height: 50,
                  borderRadius: 35,
                }}
                placeholder="Type Here..."
                // onChangeText={this.updateSearch}
                // value={search}
              /> */}
              <Text
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderRadius: 5,
                  marginLeft: "3%",
                  width: "75%",
                  marginRight: 10,
                  height: 50,
                  borderRadius: 35,
                  fontWeight: "bold",
                  fontSize: 30,
                  textAlign: "center",
                  color: "#008080",
                }}
              >
                Catwalk
              </Text>
              <TouchableOpacity
                style={{ marginTop: 8, width: "8%" }}
                onPress={() => navigation.navigate("Addtocart")}
              >
                <Icon
                  size={30}
                  name={"shopping-cart"}
                  // width={30}
                  color="white"
                  // onPress={() => setHidePass(!hidePass)}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                alignSelf: "flex-start",
                marginLeft: 5,
                fontSize: 22,
                color: "#FFFFFF",
                paddingLeft: 10,
                fontWeight: "bold",
                marginTop: 60,
                backgroundColor: "rgba(237, 237, 237,0.4)",
              }}
            >
              Take a walk on the wild side
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                width: 100,
                marginLeft: 20,
                marginTop: 10,
                height: 33,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Searchprod")}
            >
              <Text
                style={{ fontSize: 18, color: "#008080", fontWeight: "bold" }}
              >
                Explore
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            paddingTop: 15,
            backgroundColor: "#FFFFFF",
            borderTopRightRadius: 35,
            borderTopLeftRadius: 35,
            width: "100%",
            height: 800,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#008080",
                  width: 60,
                  height: 60,
                  borderRadius: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigation.navigate("ProductList")}
              >
                <Image
                  source={{
                    uri: "https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png",
                  }}
                  style={{ width: "90%", height: "90%" }}
                />
              </TouchableOpacity>
              <Text
                style={{ paddingLeft: 12, fontWeight: "bold", fontSize: 15 }}
              >
                Male
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#008080",
                  width: 60,
                  height: 60,
                  borderRadius: 38,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => navigation.navigate("ProductList")}
              >
                <Image
                  source={{
                    uri: "https://www.freeiconspng.com/thumbs/female-icon/female-icon-27.png",
                  }}
                  style={{
                    width: "100%",
                    height: "85%",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{ paddingLeft: 5, fontWeight: "bold", fontSize: 15 }}
              >
                Female
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 25,
              height: 31,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                color: "black",
                paddingLeft: 15,
              }}
            >
              Latest Products
            </Text>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                style={{
                  color: "#008080",
                  fontWeight: "bold",
                  fontSize: 17,
                  paddingRight: 10,
                }}
                onPress={() => navigation.navigate("Searchprod")}
              >
                More
              </Text>
            </TouchableOpacity>
          </View>
          {isLoading ? (
            <Spinner visible={isLoading} textContent={"Loading..."} />
          ) : (
            <View style={{ paddingLeft: "5%", marginTop: 15 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {arrayP}
              </ScrollView>
            </View>
          )}
          <Slider navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Cdashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:"50%",
    //    backgroundColor:"#008080",
    alignItems: "center",
    // justifyContent: 'center',
    //    borderColor:"red",
    //    borderWidth:5,
    //    margin:5
  },
  headerMain: {
    // backgroundColor:"#008080",
    // justifyContent:"space-between",
    // height:80,
    width: "100%",
    // borderBottomRightRadius:15,
    // borderBottomLeftRadius:15,
  },
});
