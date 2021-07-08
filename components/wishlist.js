import React from 'react';
import { StyleSheet,Text,TouchableOpacity,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Cartprod from './cartprod';

export default function Wishlist(){
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
            prod_name:"Nike Shoe",
            vendor_name:"ABC Retailers",
            prod_image:"https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            item_count:1,
            price:230,

        }
    ]
    const prod_len=prod.length;
    for(var i=0; i < prod_len; i++) {
        display.push(
        <Cartprod name={prod[i].prod_name} image={prod[i].prod_image} count={prod[i].item_count} price={prod[i].price} vendor={prod[i].vendor_name} icon="heart"/>
        )
    }

    return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.headerMain}>
                <Text style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>Wishlist</Text>
            </View>

            <View style={{paddingLeft:8,paddingRight:8,paddingTop:20}}>
                <View style={{flexDirection:"row", justifyContent:"space-between", paddingBottom:16}}>
                    <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>ITEMS(1)</Text>
                    <TouchableOpacity><Text style={{color:"#008080", fontWeight:"bold", fontSize:17}}>+ ADD NEW</Text></TouchableOpacity>
                </View>
            {display}

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
   
   
})