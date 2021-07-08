import React, {  useState} from 'react';
import { StyleSheet, Text, View,ScrollView, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function ViewReview({navigation}){
    const [user,setUser]=useState([
        {
        name:"Alex Paul,",
        review:"Nice Product",
    
    },
    {
        name:"Alex Paul,",
        review:"Nice Product",
    
    },
])
    return(
    <View style={styles.container}>
    <ScrollView>
    <StatusBar hidden={true}/>
    <View style={styles.headerMain}>
        <Text style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>Checkout</Text>
    </View>
    <View style={{paddingLeft:8,paddingRight:8,paddingTop:20}}>
                <View style={{marginBottom:20,backgroundColor:"#e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                <Text style={{fontSize:17, paddingLeft:5,marginTop:5}}>{user[1].name}</Text>
                <Text style={{fontSize:17, paddingLeft:5,marginTop:5}}>{user[1].review}</Text>
                    </View>
                    <View style={{marginBottom:20,backgroundColor:"#e8e8e8",borderRadius:10,paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                <Text style={{fontSize:17, paddingLeft:5,marginTop:5}}>{user[2].name}</Text>
                <Text style={{fontSize:17, paddingLeft:5,marginTop:5}}>{user[2].review}</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor:"#008080",height:50,width:"60%",marginLeft:"20%",borderRadius:15,justifyContent:"center"}}><Text style={{fontSize:19, fontWeight:"bold", paddingLeft:5,color:"#FFFFFF",textAlign:'center'}} 
onPress={()=>{
    navigation.navigate("Rating")
}}
>Add Review</Text></TouchableOpacity>
    </View>
</ScrollView>
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
    
   
})