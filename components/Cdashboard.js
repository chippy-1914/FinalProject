import React,{useState,useEffect} from 'react'
import { StyleSheet, View, Text,TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native'
import Slider from './offerpage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from 'react-native-elements';
import firebase from "firebase"
import ShortProdView from './ShortProdView';

// import images from './assets'


function Cdashboard({navigation}) {
  // const {prodId,prod}=prodData
// const [wrapper,setWrap]=useState(getData("w"))
// const [prod,setProd]=useState(getData("p"))
// function getData(param){
//   const table=firebase.database().ref('/product_details/')
// // const prodId=table.once("value",((snapshot)=> {return Object.keys(snapshot.val())}))
//  table.once("value",((snapshot)=> {
//    snapshot.forEach((childSnapshot) => {
//     var childKey = childSnapshot.key;
//     var childData = childSnapshot.val();
//     // console.log(childData)
//     // wrapper.push(<ShortProdView discount={"45"} image={"https://i.pinimg.com/564x/a3/21/1e/a3211e4ae03f503f90188bf580e4993e.jpg"} price={"456"}/>)
//     setProd()

   
//  })
// const key=Object.keys(snapshot.val())
// const val=snapshot.val()
// setWrap(key)
// setProd(val)
// }))
// if(param=="w"){
//   return wrapper
// }
// if(param=="p"){
//   return prod
// }
// }
// console.log(wrapper)
// function getProducts()
// {
//     const dbref = firebase.database().ref();
//     const dbtable = dbref.child("product_details");
//     dbtable.get().then((snapshot)=>{
//         if (snapshot.exists())
//         {
//             const array2=snapshot.val();
//             const BookId=Object.keys(array2);
//             // console.log(BookId)
//             for(var i=0;i<BookId.length;i++)
//             {
//                 dbtable.child(BookId[i]).get().then((snapshot)=>{
//                     Products.push(snapshot.val())
//                 }).catch((error)=>{
//                     console.log(error)
//                 })
//             }
//             console.log(Products)
//             return Products;
//         }
//         else{
//             console.log("No data available"); 
//         }
//     }).catch((error)=>{
//         console.error(error);
//     });
// }
// const wrapper=[]
// const [Products,setProducts] = useState([getProducts()])
// for(var i=1;i<=7;i++)
// {
//     wrapper.push(
//     <ShortProdView price={Products[i].final_amt} image={Products[i].prod_img} discount={Products[i].discount} />
//     )


    return (
       <View style={styles.container}>
           <StatusBar hidden={true}/>
           <ScrollView>
           
          
           <ImageBackground source={{uri: "https://i.pinimg.com/564x/a3/21/1e/a3211e4ae03f503f90188bf580e4993e.jpg"}} style={{width:"100%", height:250}} blurRadius={0.4} imageStyle={{height:260 }}>
           <View style={styles.headerMain}>
                {/* <Text  style={{fontSize:25,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold"}}>DASHBOARD</Text> */}
                <View style={{flexDirection:"row",width:'100%',marginTop:15,paddingLeft:10}}>
                    <TouchableOpacity  style={{marginTop:8,width:'8%'}} onPress={()=>navigation.navigate("Login")}>
                    <Icon
                   
                    size={30}
                    name={'user'}
                    // width={30}
                    color="white"
                    // onPress={() => setHidePass(!hidePass)}
                    />  
                    </TouchableOpacity>
                    <SearchBar inputContainerStyle={{backgroundColor: 'white',height:20,}}
                    containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5,marginLeft:"3%",width:'75%',marginRight:10,height:50, borderRadius:35,}}
                    placeholder="Type Here..."
                    // onChangeText={this.updateSearch}
                    // value={search}
                    />
                    <TouchableOpacity style={{marginTop:8,width:'8%'}} onPress={()=>navigation.navigate("Addtocart")}>
                    <Icon
                    
                    size={30}
                    name={'shopping-cart'}
                    // width={30}
                    color="white"
                    // onPress={() => setHidePass(!hidePass)}
                    />  
                    </TouchableOpacity>
                 </View>
                 <Text style={{alignSelf: 'flex-start',marginLeft:5,fontSize:22,color:"#FFFFFF",paddingLeft:10, fontWeight:"bold",marginTop:60,backgroundColor:'rgba(237, 237, 237,0.4)'}}>Take a walk on the wild side</Text>
                 <TouchableOpacity style={{backgroundColor:"#FFFFFF",width:100,marginLeft:20,marginTop:10,height:33,borderRadius:20,justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate("ProductEach")}>
                     <Text style={{fontSize:18,color:"#008080",fontWeight:"bold"}}>Explore</Text>
                     </TouchableOpacity>
                 </View>
                </ImageBackground>
           
           
           <View style={{paddingTop:15,backgroundColor:"#FFFFFF",borderTopRightRadius:35,borderTopLeftRadius:35,width:"100%",height:800,}} >


               <View style={{flexDirection:'row', width:"100%",justifyContent:'space-evenly',paddingLeft:"5%",paddingRight:"5%"}}>
                   <View style={{flexDirection:"column"}}>
                    <TouchableOpacity style={{backgroundColor:"#008080", width:60, height:60,borderRadius:38,alignItems:"center", justifyContent:"center"}}  onPress={()=>navigation.navigate("ProductList")}>
                        <Image
                            source={{uri:"https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png"}}
                            style={{width:"90%", height:"90%"}}
                        />
                    </TouchableOpacity>
                    <Text style={{paddingLeft:12,fontWeight:"bold",fontSize:15}}>Male</Text>
                </View>
                <View style={{flexDirection:"column"}}>
                    <TouchableOpacity style={{backgroundColor:"#008080", width:60, height:60,borderRadius:38,alignItems:"center", justifyContent:"center"}} onPress={()=>navigation.navigate("ProductList")}>
                        <Image
                            source={{uri:"https://www.freeiconspng.com/thumbs/female-icon/female-icon-27.png"}}
                            style={{width:"100%", height:"85%",borderBottomLeftRadius:30,borderBottomRightRadius:30}}
                        />
                    </TouchableOpacity>
                    <Text style={{paddingLeft:5,fontWeight:"bold",fontSize:15}}>Female</Text>
                </View>
              
                </View>
                
                <View style={{marginTop:25,height:31,flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{fontSize:21,fontWeight:'bold',color:"black",paddingLeft:15}}>Today's Hot Deals</Text>
                    <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}><Text style={{color:"#008080", fontWeight:"bold", fontSize:17,paddingRight:10}} onPress={()=>navigation.navigate("ProductList")}>More</Text></TouchableOpacity>
                </View>
                <View style={{paddingLeft:"5%",marginTop:15}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                      {/* {wrapper}      */}
                    <ShortProdView navigation={navigation} discount={"5% off"} price={"Rs.245"} image={"https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVlbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}/>
                        <ShortProdView navigation={navigation} discount={"15% off"} price={"Rs.500"} image={"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}/>
                        <ShortProdView navigation={navigation} discount={"5% off"} price={"Rs.499"} image={"https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}/>
                        <ShortProdView navigation={navigation} discount={"20% off"} price={"Rs.199"} image={"https://images.unsplash.com/photo-1603218183500-7e1d62c3c679?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2xpcHBlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"}/> 
                    </ScrollView>
                </View>
                
                <Slider navigation={navigation}/>
           </View>
           </ScrollView>
       </View>
    )
}

export default Cdashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:"50%",
    //    backgroundColor:"#008080",
        alignItems: 'center',
       // justifyContent: 'center',
    //    borderColor:"red",
    //    borderWidth:5,
    //    margin:5
     },
    headerMain:{
        // backgroundColor:"#008080",
        // justifyContent:"space-between",
        // height:80,
        width:"100%",
        // borderBottomRightRadius:15,
        // borderBottomLeftRadius:15,
    }
   
})