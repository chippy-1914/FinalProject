import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Veach from "./Veach";
import { ProductContext, VendorContext } from "../Context";

export default function Vsearch({ navigation }) {
  const prodContext = useContext(ProductContext);
  const venContext = useContext(VendorContext);
  const [isLoading, setLoad] = useState(true);
  const [arrayP, setArrayP] = useState([]);
  useEffect(() => {
    // console.log(prodContext.data.prod_details);
    arrayP.splice(0, arrayP.length);
    prodContext.data.prod_details.forEach((element, index) => {
      if (element.vendor_id == venContext.data.current_id) {
        console.log(index);
        arrayP.push(
          <Veach
            key={index}
            index={index}
            value={element}
            navigation={navigation}
          />
        );
      }
      // console.log(element);
    });

    setTimeout(() => {
      setLoad(false);

      // console.log(arrayP);
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <View style={styles.searchtxt}>
          {/* <Icon name={"chevron-left"} size={25} color={"black"}/> */}
          <TextInput
            style={[
              { marginLeft: 15 },
              { fontSize: 18 },
              {
                borderWidth: 1,
                width: "110%",
                height: "45%",
                backgroundColor: "white",
                paddingTop: 2,
                paddingLeft: 30,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            ]}
            placeholderTextColor="grey"
            placeholder="Heels"
          />
        </View>
        <View style={styles.sideicons}>
          <Icon name={"search"} size={20} color={"black"} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator color={"#008080"} />
        ) : (
          <View style={{ height: "100%", backgroundColor: "#e8e8e8" }}>
            {arrayP}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: "8%",
  },
  product1: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    flexDirection: "row",
  },
  searchbar: {
    borderWidth: 1,
    // borderColor: "lightgrey",
    borderBottomWidth: 0,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    marginTop: 0,
  },
  searchtxt: {
    // borderWidth: 1,
    // borderColor: "red",
    borderRightWidth: 0,
    width: "85%",
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sideicons: {
    // borderWidth: 1,
    // borderColor: "blue",
    borderLeftWidth: 0,
    width: "40%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lowerbar: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightblue",
  },
  sort: {
    borderWidth: 1,
    borderLeftWidth: 0,
    width: "50%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  filter: {
    borderWidth: 1,
    borderLeftWidth: 0,
    width: "50%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
