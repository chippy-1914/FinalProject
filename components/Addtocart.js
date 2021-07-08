import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Cartprod from './cartprod';
import { useState } from 'react';

export default function Addtocart({navigation}){
    const display=[]
    const prod=[
        {
            prod_name:"Nike Shoe",
            vendor_name:"ABC Retailers",
            prod_image:"https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            item_count:1,
            price:230,

        },
        {
            prod_name:"Heels",
            vendor_name:"CDF Retailers",
            prod_image:"https://i.pinimg.com/originals/26/8e/2d/268e2d5a945661c6bff2a83c5da9e77c.jpg",
            item_count:2,
            price:230,

        }
    ]
    const prod_len=prod.length;
    const state={
        total:0,
    }

    for(var i=0; i < prod_len; i++) {
        display.push(
        <Cartprod name={prod[i].prod_name} image={prod[i].prod_image} count={prod[i].item_count} price={prod[i].price} vendor={prod[i].vendor_name} icon="trash"/>
        )
        state.total=state.total+prod[i].price*prod[i].item_count
    }
   
    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.headerMain}>
                <Text style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>Cart</Text>
            </View>

            <View style={{paddingLeft:8,paddingRight:8,paddingTop:20}}>
                <View style={{flexDirection:"row", justifyContent:"space-between", paddingBottom:16}}>
                    <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>ITEMS {prod_len}</Text>
                    <TouchableOpacity><Text style={{color:"#008080", fontWeight:"bold", fontSize:17}} onPress={()=>navigation.navigate("ProductList")}>+ ADD NEW</Text></TouchableOpacity>
                </View>
                {display}
            
        
            </View>
            <View style={styles.footer}>
                <Text style={{fontSize:20, fontWeight:"bold", paddingLeft:5,color:"#FFFFFF",paddingTop:10}}>TO BE PAID:  RS.{state.total}</Text>
                <TouchableOpacity style={{backgroundColor:"#FFFFFF",height:50,width:"40%",justifyContent:"center",alignItems:"center",borderRadius:15}} onPress={()=>{navigation.navigate("Checkout")}}><Text style={{fontSize:19, fontWeight:"bold", paddingLeft:5,color:"#008080"}}>Checkout</Text></TouchableOpacity>
            </View>

        </View>
       
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
     },
    headerMain:{
        backgroundColor:"#008080",
        justifyContent:"center",
        height:70,
        width:"100%",
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
    
    }
    ,
    footer: {
        position: 'absolute',
        bottom:0,
        height:70,
        backgroundColor:"#008080",
        width:"100%",
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        paddingTop:10,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:"row",
        justifyContent:'space-between'
    }
   
})