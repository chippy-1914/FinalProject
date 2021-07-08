import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';



function Extra({props}){
    return(
        
        <View >
            <View style={{flexDirection:"row"}}>
            {/* <ModalDropdown options={[1,2,3]} defaultValue={"Size"} style={{width:"30",height:"70%", color:'#f5fffa',marginRight:"1%",backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={10} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8} 
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10} dropdownStyle={{height:85}}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:20,}}   
            />   */}
            
             <ModalDropdown options={size} defaultValue={"Size"} style={{width:"30%",height:"70%", backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={20} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8}
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10} marginRight={"1.5%"}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:50}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                size:value,
              })
              }}
            />  
             <TextInput style={[styles.CUS,{width:'30%',marginRight:"1.5%"}]} placeholderTextColor="#202020" placeholder="Color" 
            />
            <TextInput style={[styles.CUS,{width:'30%',}]} placeholderTextColor="#202020" placeholder="Availability" keyboardType="numeric" />
            </View>

        </View>
    )
}

export default Extra
const styles = StyleSheet.create({
    CUS:{
        // backgroundColor: "#E0FFFF",
        fontSize:15,
        textAlign:'center',
        width:"93%",
        borderWidth: 1.5,
        padding: 5,
        marginBottom:10,
        marginTop:10,
        borderColor:"#008080",
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        // color: "#202020"
      },
})