import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Dimensions } from "react-native";
import firebase from "firebase";
import { ProductContext, CustomerContext } from "../Context";

export default function Helpline({ navigation }) {
  const cusContext = useContext(CustomerContext);
  const press = () => {};

  const [query, setquery] = useState({
    Feedback: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 30,
            color: "white",
            alignSelf: "center",
          }}
        >
          Contact Support
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <TouchableOpacity style={styles.profile}>
            <Icon
              name={"hands-helping"}
              size={70}
              color={"grey"}
              style={{ alignSelf: "center", paddingTop: 8 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ padding: 20, textAlign: "center", fontSize: 15 }}>
            Tell us about the problem you're having and which product you're
            using.
          </Text>
          <View>
            <TextInput
              style={styles.textarea}
              numberOfLines={8}
              multiline={true}
              onChangeText={(text) => setquery({ ...query, Feedback: text })}
            />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.subbtn}
                onPress={() => {
                  Alert.alert(
                    // (' ')
                    "THANK YOU!",
                    "Your feedback has been submitted successfully! we wish you a good day :)",
                    [
                      {
                        text: "OK",
                        onPress: () => {
                          console.log("OK Pressed");
                          firebase.database().ref().child("helpline").push({
                            user_id: cusContext.data.current_id,
                            Feedback: query.Feedback,
                          });
                        },
                      },
                    ]
                  );
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 5,
    // backgroundColor:'red',
    height: "100%",
  },
  textarea: {
    // border: "1px solid #a9a9a9",
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderStyle: "solid",
    borderRadius: 5,
    width: 300,
    height: 250,
    margin: 10,
    padding: 10,
    fontSize: 15,
    alignSelf: "center",
  },
  subbtn: {
    // margin: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    width: "85%",
    height: 35,
    paddingTop: 5,
    backgroundColor: "#56CCF2",
    borderColor: "lightblue",
    elevation: 5,
    alignSelf: "center",
  },
  topbar: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#56CCF2",
    paddingTop: 18,
    paddingLeft: 5,
  },
  profile: {
    height: 100,
    width: 100,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderRadius: 50,
    // position: 'absolute',
    marginTop: 20,
    alignSelf: "center",
  },
});
