
import React, {  useState} from 'react';
import {StyleSheet, TouchableOpacity, View,Text,Image, TextInput} from 'react-native'



export default function Dashboard({navigation}) {
  return (
      <View style={styles.container}>
      <TouchableOpacity onPress={(e)=>navigation.navigate('VendorReg')}>
          <Text>Register Vendor</Text>
      </TouchableOpacity>
      </View>
      
  );
}

const styles= StyleSheet.create({

    container: {
        flex: 1,
        
        backgroundColor:'#f5fffa',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })