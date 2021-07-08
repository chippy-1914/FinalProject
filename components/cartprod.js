import React,{useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import  Icon from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//   } from 'react-native-fontawesome';
  


function Cartprod(props) {
    const [price,setPrice]=useState(props.price)
    const [count,setCount]=useState(props.count)
    return (
        <View style={{height:150,backgroundColor:"#e8e8e8",paddingTop:15,paddingLeft:10,paddingRight:10, borderRadius:10,marginBottom:10}}>
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <Image source={{uri: props.image}} style={{height:120,width:120,marginRight:15}}/>
                {/* console.log(props.image) */}
                <View style={{flexDirection:"column", justifyContent:'space-between',paddingTop:10,paddingBottom:10,width:"55%"}}>
                    <View style={{flexDirection:"column"}}>
                        <Text style={{fontSize:17,fontWeight:"bold"}}>{props.name}</Text>
                        <Text style={{fontSize:15}}>{props.vendor}</Text>
                        
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
                        <Text style={{fontSize:17}}>Rs.{props.price*count}</Text>
                        {(props.count!=null)?<View style={{flexDirection:'row'}}><TouchableOpacity onPress={()=>{setCount(count-1);setPrice(count*props.price)}}><Icon size={20} name={"minus"}/></TouchableOpacity><Text style={{marginLeft:5,fontSize:17,marginRight:5}}>Unit {count}</Text><TouchableOpacity onPress={()=>{setCount(count+1);setPrice(count*props.price)}}><Icon size={20} name={"plus"}/></TouchableOpacity></View>:null}
                        <TouchableOpacity>
                        <Icon
                            size={20}
                            name={props.icon}
                            // width={30}
                            color="red"
                            // onPress={() => setHidePass(!hidePass)}
                            />  
                        </TouchableOpacity>
                        
                    </View>
                </View>
        </View>
        </View>
    )
}


export default Cartprod
