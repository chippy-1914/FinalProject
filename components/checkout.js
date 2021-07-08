import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity,ScrollView,Modal,TextInput, Alert} from 'react-native'
// import  Icon from 'react-native-vector-icons/FontAwesome5';
import CheckProd from './checkProd'
import { StatusBar } from 'expo-status-bar'



function Checkout() {
    
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
    const [user,setUser]=useState({
        name:"Alex Paul,",
        address:"44/1, Linkroad,sheshadripuram,bl-20, Sheshadripuram",
        ph:"9964871258",
    })
    const [visible,setVisible]=useState(false)
    const state={
        total:0,
    }

    for(var i=0; i < prod_len; i++) {
        display.push(
        <CheckProd name={prod[i].prod_name} image={prod[i].prod_image} count={prod[i].item_count} price={prod[i].price*prod[i].item_count} vendor={prod[i].vendor_name} icon="trash"/>
        )
        state.total=state.total+prod[i].price*prod[i].item_count
    }
   
    return(
        <View style={styles.container}>
            <ScrollView>
            <StatusBar hidden={true}/>
            <View style={styles.headerMain}>
                <Text style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>Checkout</Text>
            </View>
        
            <View style={{paddingLeft:8,paddingRight:8,paddingTop:20}}>
                <View style={{marginBottom:20,backgroundColor:"#e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
            <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>Shipping Address-</Text>
            <Text style={{fontSize:17, paddingLeft:5,marginTop:5}}>{user.name}</Text>
            <Text style={{fontSize:17, paddingLeft:5}}>{user.address}</Text>
            <Text style={{fontSize:17, paddingLeft:5}}>abc@gmail.com</Text>
            <Text style={{fontSize:17, paddingLeft:5}}>+91 {user.ph}</Text>
            <TouchableOpacity style={{backgroundColor:"#008080",height:25,width:"45%",marginTop:5,borderRadius:15,justifyContent:"center"}}><Text style={{fontSize:13, fontWeight:"bold", paddingLeft:5,color:"#FFFFFF",textAlign:'center'}} onPress={()=>setVisible(true)}>Change User Information</Text></TouchableOpacity>
           
            <Modal animationType={'fade'}
                    visible={visible} 
                    transparent={true} 
                    onRequestClose={()=>{setVisible(!visible)}}
                >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
                        <View style={{padding:15,backgroundColor:'#fff',borderRadius:30,margin:20,alignItems:'stretch',width:'90%',height:300}}>
                        <TextInput style={{borderWidth:1,borderColor:"black",borderRadius:10,height:40,paddingLeft:10,marginBottom:10}} onChangeText={(text)=>setUser({...user,name:text})} placeholder={"Name"} placeholderTextColor="black"/>
                        <TextInput style={{borderWidth:1,borderColor:"black",borderRadius:10,height:60,paddingLeft:10,marginBottom:10}} onChangeText={(text)=>setUser({...user,address:text})} placeholder={"Address"} multiline={true} placeholderTextColor="black"/>
                        <TextInput style={{borderWidth:1,borderColor:"black",borderRadius:10,height:40,paddingLeft:10,marginBottom:10}} keyboardType="numeric" onChangeText={(text)=>setUser({...user,ph:text})} placeholder={"Alternate Phone no"} placeholderTextColor="black"/>
                        <TouchableOpacity style={{backgroundColor:"#008080",height:50,width:"60%",marginLeft:"20%",borderRadius:15,justifyContent:"center",marginTop:20}}><Text style={{fontSize:19, fontWeight:"bold", paddingLeft:5,color:"#FFFFFF",textAlign:'center'}}onPress={()=>setVisible(false)}>Submit</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>


    
            </View>
                    <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>Your Order {prod_len}</Text>

                {display}
                <View style={{paddingLeft:8,paddingRight:8,paddingTop:20}}>
                <View style={{marginBottom:20,backgroundColor:"#e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:5,paddingLeft:10,paddingRight:10}}>
            <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>Total Amount-</Text>
            <Text style={{fontSize:17, paddingLeft:5}}>Rs.{state.total}</Text>
            </View>
            <Text style={{fontSize:17, paddingLeft:5,textAlign:"center",color:"red"}}>(including shipping charges,discount and taxes*)</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,paddingLeft:10,paddingRight:10}}>
            <Text style={{fontSize:17, fontWeight:"bold", paddingLeft:5}}>Payment Mode-</Text>
            <Text style={{fontSize:17, paddingLeft:5}}>Cash on delivery (Default)</Text>
            </View>
            {/* <Text style={{fontSize:17, paddingLeft:5}}>+91 9964871258</Text> */}
            </View>
            
            </View>
         
        
</View>
<TouchableOpacity style={{backgroundColor:"#008080",height:50,width:"60%",marginLeft:"20%",borderRadius:15,justifyContent:"center"}}><Text style={{fontSize:19, fontWeight:"bold", paddingLeft:5,color:"#FFFFFF",textAlign:'center'}} 
onPress={()=>{
    Alert.alert("Order Confirmed","Your Order Request has been sucessfully sent to the Vendor.",[
        { text: "OK", onPress: () =>{ console.log("OK Pressed");}}
      ])
}}
>Confirm Order</Text></TouchableOpacity>
           
            
            </ScrollView>
        </View>
       
    )
    
}


export default Checkout


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