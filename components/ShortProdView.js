import React, {useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import firebase from 'firebase'

function ShortProdView(props) {
 
    
    return (
        <View style={{flexDirection:"column",width:200,height:250,backgroundColor:'rgba(237, 237, 237,0.4)',justifyContent:'space-evenly',alignItems:"center",borderRadius:20,paddingTop:10,marginRight:20}}>
                           
                            <View  style={{width:"90%",height:"80%",}}>
                                
                                <ImageBackground style={{width:"100%",height:"97%"}} source={{uri:props.image}}>
                                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <TouchableOpacity onPress={() => {props.navigation.navigate("Wishlist") }}><Icon name={'heart'} size={20} color={'red'} style={{padding:5}} /></TouchableOpacity>
                                <Icon name={'tag'} size={15} color={'green'} >{props.discount}</Icon>
                                </View>
                                </ImageBackground>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-evenly",width:"100%",height:"20%",alignItems:"center"}}>
                            <Text style={{fontSize:18,fontWeight:"bold"}}>{props.price}</Text>
                            <TouchableOpacity style={{backgroundColor:"#008080",borderRadius:15,width:90,height:"55%",justifyContent:"center",alignItems:"center"}}><Text style={{color:"#FFFFFF",fontSize:13}} onPress={() => {props.navigation.navigate("Addtocart");}}>Add To Cart</Text></TouchableOpacity>
                            </View>
                        </View>
    )
}

export default ShortProdView
