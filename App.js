import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Regiform from './components/Form';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false}></StatusBar>
      <ScrollView>
      <View style={styles.HeaderMain}>
        <Text style={styles.HeaderMainText}>SHOE SHOP</Text>
        <Text style={{paddingTop:10,fontSize:22,fontFamily:"monospace",color:"#cfadde",textAlign:'center'}}>Here there would be tag line</Text>
      </View>
      <View style={styles.Rform}>
        
          <Regiform/>
        
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecdaed',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  HeaderMain: {
    // flex:1,
    height:160,
    backgroundColor:"#ba60eb",
    // borderBottomLeftRadius:26,
    // borderBottomRightRadius:26,
    borderRadius:26,
    borderLeftColor:"#8844ad",
    
  },
  HeaderMainText:{
    paddingTop:"10%",
    textAlign:'center',
    textAlignVertical:"center",
    color:"#ebe6ed",
    fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:50,
  },
  Rform:{
    // flex:4,
    marginTop:10,
    paddingLeft:20,
  }
});
