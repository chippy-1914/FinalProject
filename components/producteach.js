import React,{useContext,useState} from 'react'

import { StyleSheet, Text, View, Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
TouchableOpacity.defaultProps = { activeOpacity: 0.5 };



export default function Details({navigation}) {


    

    return (
        <View style={styles.container}>
         <View style={styles.innercontainer}>
          
          <View style={styles.imgcontainer}>
                <Image source={{
                height: 200,
                width: 330,
                
                uri:"https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/472321edac810f9b2465a359d8cdc0b5/a/q/aq1189-002-h.jpg"}}/>
                
            </View>
            <TouchableOpacity style={styles.heart}><Icon name={"heart"} size={30} color={"white"}/></TouchableOpacity>
            <ScrollView  showsVerticalScrollIndicator={false} style={styles.scrl}>
            <View style={styles.heading}>
                    <Text style={{fontSize:25,fontWeight:'bold',paddingBottom:10}}>NIKE SHOES</Text>
                    <Text style={{color:"#D2042D",fontSize:25,paddingBottom:10}}>$23</Text>
            </View>
            <View style={styles.clrcont}>
                        {/* <Button  title="red" color="red" /> */}
                        <TouchableOpacity style={{borderWidth:1,borderColor:'red',width:30,backgroundColor:'red',elevation:7,marginLeft:5,borderRadius:2,height:30}}></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderColor:'black',width:30,backgroundColor:'black',elevation:7,marginLeft:5,borderRadius:2,height:30}}></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderColor:'green',width:30,backgroundColor:'green',elevation:7,marginLeft:5,borderRadius:2,height:30}}></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderColor:'yellow',width:30,backgroundColor:'yellow',elevation:7,marginLeft:5,borderRadius:2,height:30}}></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:1,borderColor:'darkblue',width:30,backgroundColor:'darkblue',elevation:7,marginLeft:5,borderRadius:2,height:30}}></TouchableOpacity>        
            </View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Size</Text>
                <ScrollView horizontal={true} style={styles.szcont}  showsHorizontalScrollIndicator={false} >

                    <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={styles.btnText} >10</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={styles.btnText} >11</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={styles.btnText} >12</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={styles.btnText} >13</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={styles.btnText} >14</Text>
                    </TouchableOpacity> 
                    {/* <TouchableOpacity style={styles.SizeBtn}>
                        <Text style={{fontSize:20,fontWeight:"300",color:"black",textAlign:'center',paddingTop:10}} >10</Text>
                    </TouchableOpacity>  */}
                    
                    {/* <TouchableOpacity style={[styles.SizeBtn,{backgroundColor:  (press.thirteen) ? "black":"lightgrey" }]} onPressIn={setpress({...press,thirteen:!press})} >
                        <Text style={[styles.btnText,{color: (press.thirteen) ? "white":"black"}] } >13</Text>
                    </TouchableOpacity>   */}
                </ScrollView>
            </View>
            
            <View>
                <Text style={{fontSize:15,color:"grey",paddingBottom:5,marginTop:5}}>A one liner abt product</Text>
                <Text style={{fontSize:15,color:"grey"}}>
                    A detailed description about our product.like veryyyy detailed.something about 5-6 lines.not more than that as it may appear too crowded which we might not want neither look good to the eyes.so yeah thats it.
                </Text>
                <View style={styles.imgroll}>
                <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}>more from our collection</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imgcont}>
                  
                  <Image style={styles.imgbtn} source={{height:100, width:100, uri:"https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bb6383ef-cafb-4f3e-8e77-52178026c164/air-jordan-1-court-purple-release-date.jpg"}}/>
                  <Image style={styles.imgbtn} source={{height:100, width:100, uri:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b7d84ee-2812-4a2a-b786-adb3a7a3d44b/air-presto-id-shoe.png"}}/>
                  <Image style={styles.imgbtn} source={{height:100, width:100, uri:"https://www.thenextsole.com/storage/images/CZ0602-434.png"}}/>
                </ScrollView>
                </View>

                <View>
                  
                  <View style={styles.fnbtn}>
                   
                    <TouchableOpacity style={styles.buy} onPress={()=>navigation.navigate("Checkout")}><Text style={{ color: 'white',fontSize: 20,}} >Buy</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cart}  onPress={()=>navigation.navigate("Addtocart")}><Text style={styles.txt}>Add to cart</Text></TouchableOpacity>
                  </View>
                    <TouchableOpacity style={styles.rev} onPress={()=>navigation.navigate("Rating")}><Text style={styles.revtxt}>Review</Text></TouchableOpacity>
                </View>
            </View>
          </ScrollView>
           
         </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: Dimensions.get('window').height,
    maxWidth: "90%",
    marginTop: 40,
    marginBottom: 20,
    paddingTop: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'lightblue'
  },
  imgcontainer:{
    height: "30%",
    // backgroundColor: 'red',
    alignSelf:'center',
    marginBottom: 5,
    position: 'absolute'

  },
  scrl: {
    marginTop: "50%"
  },
  innercontainer: {
      padding: 10
  },
  heading: {
    //   flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  clrcont: {
    // flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 5,
    maxWidth: "100%",
    marginBottom: 20,
    

  },
  szcont: {
      borderWidth: 1,
      borderColor: 'lightblue',
      // maxHeight: 80,
      marginTop: 10,
      // marginBottom: 10,
     //   justifyContent: 'center'
     // paddingTop: 25
  },
  SizeBtn: {
      height: 60,
      width: 50,
      borderWidth:1,
      borderColor: '#fff',
      borderRadius: 10,
      backgroundColor:  '#fff',
      margin:5,
      elevation: 5
  },
  imgcont: {
      borderWidth: 1,
      borderColor: 'lightblue',
      marginTop: 10,
  },
  imgbtn : {
    borderRadius: 10,
    margin: 5

  },
  btnText:{
    fontSize:20,fontWeight:"300",textAlign:'center',paddingTop:10,color:'black'
  },
  heart: {
      height: 45,
      width: 45,
      borderWidth: 1,
      elevation: 5,
      backgroundColor: "darkgrey",
      borderColor: 'lightgrey',
      borderRadius: 50,
      alignItems: 'center',
      marginLeft: 10,
      padding:5
  },
  buy: {
    height: 35,
    width: "60%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: 'center'
  },
  cart: {
    height : 35,
    width: "130%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 10,
    paddingTop:2
  },
  txt: {
    color: 'white',
    fontSize: 20,

 },
  fnbtn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "50%",
    marginBottom: 10

  },
  rev: {
    height : 35,
    width: "100%",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignItems: 'center',
    // marginBottom: 20
  },
  revtxt: {
    color: 'white',
    fontSize: 20,
    paddingTop: 2
  }

});