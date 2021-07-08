import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";



function Slider(props) {
    const images=[
        { uri: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
   
        { uri: 'https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' },
        { uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
        { uri: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
           
        { uri: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
        ]
    return (
        <View>
        <View style={{marginTop:25,height:31,flexDirection:'row',justifyContent:"space-between",marginBottom:15}}>
                    <Text style={{fontSize:21,fontWeight:'bold',color:"black",paddingLeft:15}}>Limited Offers</Text>
                    <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}><Text style={{color:"#008080", fontWeight:"bold", fontSize:17,paddingRight:10}} onPress={()=>(props.navigation.navigate("ProductList"))}>More</Text></TouchableOpacity>
                </View>
        <View>
        <SliderBox images={images} sliderBoxHeight={210} />
        </View>
    </View>
    )
}


export default Slider