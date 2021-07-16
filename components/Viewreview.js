import React, { useContext, useState } from "react";
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
import { ProductContext, CustomerContext } from "../Context";
export default function Viewreview({ navigation }) {
  const prodContext = useContext(ProductContext);
  const cusContext = useContext(CustomerContext);
  const product = prodContext.data.current;

  const [arrayR, setArrayR] = useState([]);
  const rev =
    prodContext.data.review_key.indexOf(product[0]) != -1
      ? prodContext.data.review
      : [];
  const state = {
    avg: 0,
    count: 0,
  };
  if (rev[0]) {
    const product_det = Object.keys(rev[0]);
    console.log(product_det);
    //   console.log(product_det.indexOf(product[0]), product[0], product_det);
    // console.log(rev);
    // const current_product =
    //   product_det.indexOf(product[0]) == -1
    //     ? []
    //     : prodContext.data.review[product[0]];

    // const user = Object.keys(c
    arrayR.splice(0, arrayR.length);
    state.avg = 0;
    state.count = 0;
    product_det.forEach((element) => {
      state.count = state.count + 1;
      const review = rev[0][element];
      const key_index = cusContext.data.cus_key.indexOf(element);
      const cust_name = cusContext.data.cus_details[key_index];
      state.avg = (state.avg + review.Rating) / state.count;
      arrayR.push(
        <View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.profile}></TouchableOpacity>
            <View style={{ marginTop: 30, marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {cust_name.fName} {cust_name.lName}
              </Text>
              {/* <StarRating
              visible={true}
              maxStars={5}
              fullStar={"star"}
              fullStarColor={"#FCC400"}
              starSize={22}
              containerStyle={{ marginLeft: 20 }}
              starStyle={{ marginLeft: 5 }}
              rating={review.Rating}
              selectedStar={(rating) => {
                return rating;
              }}
            /> */}
            </View>
          </View>
          <View>
            <Text style={{ textAlign: "justify", padding: 10 }}>
              {review.Review}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "lightgrey",
                marginTop: 10,
              }}
            ></View>
          </View>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.avg}>
        <Text style={{ fontSize: 60, alignSelf: "center" }}>
          {state.avg} / 5
        </Text>
        <Text style={{ fontSize: 20, marginTop: 10, textAlign: "center" }}>
          Average Rating
        </Text>
      </View>
      <View
        style={{ borderWidth: 1, borderColor: "lightgrey", marginTop: 10 }}
      ></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {arrayR.length == 0 ? (
          <View
            style={{
              justifyContent: "center",
              height: 500,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 35 }}>No Reviews</Text>
          </View>
        ) : (
          <View>{arrayR}</View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // backgroundColor:'lightblue'
    height: "100%",
  },
  avg: {
    height: 150,
    width: "75%",
    borderColor: "grey",
    margin: 20,
    alignSelf: "center",
    padding: 10,
    borderRadius: 5,
    elevation: 2.5,
  },
  // box: {
  //     borderWidth: 1,
  //     height:'50%',
  //     width:'80%',
  //     borderColor: 'red',
  //     backgroundColor:'red'
  // },
  profile: {
    // flex: 1,
    height: 70,
    width: 70,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderColor: "lightgrey",
    borderRadius: 50,
    paddingLeft: 40,
    marginLeft: 20,
    marginTop: 20,
  },
});
