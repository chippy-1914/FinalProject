import React, {  useState, useEffect} from 'react';
// import firebase from "firebase";
// import Extra from './extraadd';
import * as firebase from 'firebase'; 
import * as ImagePicker from 'expo-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import CheckBox from 'react-native-checkbox';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,Alert,Platform,Image} from 'react-native'
// import firebase from "firebase"

// const [size,setSize]=useState([])
export default function AddProd() {
  const [image,setImage] = useState(null);

    useEffect( async () => {
        if(Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted'){
                alert('Permission Denied!')
            }
        }
    },[])

    const PickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[6,4],
            quality:1,
        });
        console.log(result)
        if(!result.cancelled){
            setImage(result.uri);
        }
    }

    uploadImage = async (uri,imageName)=> {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child('images/' + imageName);
        return ref.put(blob);
    }
  const [isSelected, setSelection] = useState({
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false,
    10:false,
    11:false,
  
  });
  const [prod,setProd] = useState({
   product_name:'',
   brand_name:'',
   product_description:'',
   warranty:'',
   gender:'',
   material:'',
   ocassion:'',
   category:'',
   sub_Cat:'',
   price:0,
   tax_amt:0,
   final_price:null,
   discount:0,
   delivery_fee:0,
   sold:0,
   vendor_id:'',
   size:{},

  })

  const [change,setChange] = useState(false)
 const [size,setSize]=useState([])
 const [finalSize,setFinal]=useState({})
 const [details,setDetails]=useState({})
 const [color,setColor]=useState()
 const [avail,setAvail]=useState()

 const catM={'Flipflops':null,'Slippers':null,'Thong Sandals':null,'Clogs':null,'Mules':null,'Loafers':null,'Moccasins':null,'Sneakers':null,
              Boots:['Monks','Boat shoes','Borgue','Buck shoes', 'Combat boots','Cowboy boots','Hiking boots','Motorcycle boots','Oxford boots']}
  const catW={'Sandals':null,'Slippers':null,'Flipflop':null,'Heels':['Kitten heels','Stilettos','Ankle strap heels','Cone heels','Wedge heels','Sling back heels','Platform heels','Spool heels','Peep toe heels','Corset heels','French heels','Comma heels','Ballroom dance shoes','Block heel','Sandal heels','Louis heels'],'Ballet flats':null,'Running shoes':null,'Sneakers':null,'Clogs':null,'Mules':null,'Gladiators':null,'Boots':['Wellington boot','Combat boot','Chelsea boot','Fashion boot','Cowboy boot','Riding boot','Thigh-high boots','knee-high boot','Wedges boots','Oxford boots','Biker boots','Knitted wedge booties']}
  const material=['Leather','Beaded','Canvas','Cotton','Crochet','Felt','Faux fur','Rubber','Hemp','Jute','Satin',"Silk","Fibre"]
  const occasion=['Casual','Partywear','Formal','Fancy',"Sport"]
  // const size=['1','1.5','2','2.5','3','3.5','4','4.5','5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5']
const gender={
  Men:catM,
  Women:catW
}
  useEffect(() => {
    if(change==true){
      const tax=prod.tax_amt==0?0:((prod.price*prod.tax_amt)/100)
      const disc=prod.discount==0?0:((prod.price*prod.discount)/100)
      prod.final_price=prod.price+tax-disc+prod.delivery_fee
      console.log(tax,disc,prod.final_price)
      setChange(false)}
  
    
  })
  

  
    return (
    <View style={styles.container}>
       <ScrollView>
        <View style={styles.HeaderMain}> 
        {/* This is section for the shop logo and header section */}
          <Text style={styles.HeaderMainText}>Add Product!</Text>
          {/* <Text style={{paddingTop:10,fontSize:20,fontFamily:"monospace",color:"white",textAlign:'center'}}>We are happy to welcome you!</Text> */}
        </View>

        <View style={styles.FormWrapper}>
       
          {/* Below input box is for product name */}
          <TextInput style={[styles.CUS,{marginLeft:20,}]} placeholderTextColor="#202020" placeholder="Product Name" 
            onChangeText={(text)=>{ 
              setProd({
                ...prod,
                product_name:text});
            }}
          />

          {/* Below input box is for brand name */}
          <TextInput style={[styles.CUS,{marginLeft:20,}]} placeholderTextColor="#202020" placeholder="Brand Name" 
            onChangeText={(text)=>{ 
              setProd({
                ...prod,
                brand_name:text});
            }}
          />

          {/* Below input box is for product description */}
          <TextInput style={[styles.CUS,{marginLeft:20,}]} placeholderTextColor="#202020" placeholder="Product Description" multiline={true} numberOfLines={4}
            onChangeText={(text)=>{ 
              setProd({
                ...prod,
                product_description:text});
            }}
          />

          <TextInput style={[styles.CUS,{marginLeft:20,}]} placeholderTextColor="#202020" placeholder="Warranty" 
            onChangeText={(text)=>{ 
              setProd({
                ...prod,
                warranty:text});
            }}
          />

          <View style={{flexDirection:"row",paddingLeft:20,}}> 
            {/* Below input box is for unit price */}
            <TextInput style={[styles.CUS,{width:'30%',marginRight:"1.5%",}]} placeholderTextColor="#202020" placeholder="Unit Price " keyboardType="numeric"
              onChangeText={(text)=>{ 
                setProd({
                  ...prod,
                  price:(text!=0)?parseFloat(text):0
                });
             
              }}
              onBlur={(e)=>{
                setChange(true)
              }}
              
            
            />

            {/* Below input box is for tax amount */}
            <TextInput style={[styles.CUS,{width:'30%',marginRight:"1.5%"}]} placeholderTextColor="#202020" placeholder="Tax (%)" keyboardType="numeric"
              onChangeText={(text)=>{ 
                setProd({
                  ...prod,
                  tax_amt:(text!=0)?parseFloat(text):0
                });

              }}
              onBlur={(e)=>{
                setChange(true)
              }}

              
            />

            {/* Below input box is for discount */}
             <TextInput style={[styles.CUS,{width:'30%',}]} placeholderTextColor="#202020" placeholder="Discount (%)" keyboardType="numeric"
              onChangeText={(text)=>{ 
                setProd({
                  ...prod,
                  discount:(text!=0)?parseFloat(text):0
                });
              }}
              onBlur={(e)=>{
                setChange(true)
              }}

            />
            </View>

            <View style={{flexDirection:"row",paddingLeft:20,}}> 

            {/* Below input box is for final price */}
            <TextInput style={[styles.CUS,{width:'46%',}]} placeholderTextColor="#202020" placeholder="Delivery fee" keyboardType="numeric"
              onChangeText={(text)=>{ 
                setProd({
                  ...prod,
                  delivery_fee:(text!=0)?parseFloat(text):0
                });
              }}
              onBlur={(e)=>{
                setChange(true)
              }}
              
            />
            {/* Below input box is for final amount */}
            <Text style={[styles.CUS,{width:'46%',marginLeft:"1%"}]} placeholderTextColor="#202020" placeholder="Tax" keyboardType="numeric">{(prod.final_price!=null)?prod.final_price:"Final Price"}</Text> 
          </View>

          <View style={{flexDirection:'row',marginBottom:10,paddingLeft:20,}}>
            <ModalDropdown options={Object.keys(gender)} defaultValue={"Gender "} style={{width:"46%",height:"70%", color:'#f5fffa',marginRight:"1%",backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={10} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8} 
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10} dropdownStyle={{height:85}}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:20,}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                gender:value,
              })
              }}
            />  
            <ModalDropdown options={material} defaultValue={"Material"} style={{width:"46%",height:"70%", backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={20} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8}
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:50}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                material:value,
              })
              }}
            /> 
            </View> 
            {(!prod.gender=="") &&
             <View style={{flexDirection:'row',marginBottom:10,paddingLeft:20,}}>
            <ModalDropdown options={occasion} defaultValue={"Occasion"} style={{width:"46%",height:"70%", color:'#f5fffa',marginRight:"1%",backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={10} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8} 
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10} dropdownStyle={{height:85}}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:20,}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                ocassion:value,
              })
              }}
            />  
            <ModalDropdown options={Object.keys(gender[prod.gender])} defaultValue={"Category"} style={{width:"46%",height:"70%", backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa'}} borderWidth={1.5} borderColor={'#008080'} marginBottom={20} 
              paddingTop={8} paddingRight={10} paddingLeft={20} borderBottomLeftRadius={8} borderBottomRightRadius={8}
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:50}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                category:value,
              })
              }}
            />  
          </View>}
          {(prod.category=="Boots" || prod.category=="Heels") &&
             <View style={{alignItems:"center",height:55,marginBottom:10,paddingLeft:20,}}>
            <ModalDropdown options={gender[prod.gender][prod.category]} defaultValue={"Sub Category"} style={{width:"46%",height:"70%", color:'#f5fffa',marginRight:"1%",backgroundColor:"#008080"}}
              textStyle={{fontSize:15,textAlign:'center',color:'#f5fffa',textAlign:"center"}} borderWidth={1.5} borderColor={'#008080'} marginBottom={10} 
              paddingTop={8} paddingRight={10} paddingLeft={30} borderBottomLeftRadius={8} borderBottomRightRadius={8} 
              borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10} dropdownStyle={{height:85}}
              dropdownTextStyle={{backgroundColor:"#008080",fontSize:15,color:"white", paddingLeft:20,textAlign:"center"}}   renderButtonText={(value)=>{
              setProd({
                ...prod,
                sub_Cat:value,
              })
              }}
            />  
          </View>}
         
          
       
          <Text style={{width:"100%",backgroundColor:"#008080",height:35,color:"#FFFFFF",fontWeight:"bold",fontSize:25,textAlign:"center"}}>
          Sizes
          </Text>
          <View style={{paddingLeft:20,paddingTop:20,}}>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",paddingBottom:10}}>
          <CheckBox
            label='1'
            checked={isSelected[1]}
            onChange={(checked,label) =>{setSelection({...isSelected,1:(!isSelected[1])});}}
          />
          <CheckBox
            label='2'
            checked={isSelected[2]}
            onChange={(checked,label) =>{setSelection({...isSelected,2:(!isSelected[2])}); }}
          />

          <CheckBox
            label='3'
            checked={isSelected[3]}
            onChange={(checked,label) =>{setSelection({...isSelected,3:(!isSelected[3])}); }}
          />
          <CheckBox
            label='4'
            checked={isSelected[4]}
            onChange={(checked,label) =>{setSelection({...isSelected,4:(!isSelected[4])}); }}
          />
          </View>

          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",paddingBottom:10}}>
          <CheckBox
            label='5'
            checked={isSelected[5]}
            onChange={(checked,label) =>{setSelection({...isSelected,5:(!isSelected[5])}); }}
          />
          <CheckBox
            label='6'
            checked={isSelected[6]}
            onChange={(checked,label) =>{setSelection({...isSelected,6:(!isSelected[6])}); }}
          />
          <CheckBox
            label='7'
            checked={isSelected[7]}
            onChange={(checked,label) =>{setSelection({...isSelected,7:(!isSelected[7])}); }}
          />
          <CheckBox
            label='8'
            checked={isSelected[8]}
            onChange={(checked,label) =>{setSelection({...isSelected,8:(!isSelected[8])}); }}
          />
          </View>

          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",paddingBottom:10}}>
          <CheckBox
            label='9'
            checked={isSelected[9]}
            onChange={(checked,label) =>{setSelection({...isSelected,9:(!isSelected[9])}); }}
          />
          <CheckBox
            label='10'
            checked={isSelected[10]}
            onChange={(checked,label) =>{setSelection({...isSelected,10:(!isSelected[10])}); }}
          />

          <CheckBox
            label='11'
            checked={isSelected[11]}
            onChange={(checked,label) =>{setSelection({...isSelected,11:(!isSelected[11])});}}
          />
          </View>
          
          <TouchableOpacity style={{width:'50%',backgroundColor:"#008080",borderRadius:8, padding: 5, marginBottom:10, marginTop:10,marginLeft:"25%" }} 
          onPress={()=>
            {
              size.splice(0,size.length)
              for(var i=1;i<12;i++){
              if(isSelected[i]==true){
          
                size.push(i)
              
            }}
            console.log(size)
          }
            
          }
          >
            <Text style={{ fontSize:20,textAlign:'center',color:"#FFFFFF"}}>Add Sizes</Text>
          </TouchableOpacity>
                      
          </View>
          <Text style={{width:"100%",backgroundColor:"#008080",height:35,color:"#FFFFFF",fontWeight:"bold",fontSize:25,textAlign:"center"}}>
         Colors and Availability
          </Text>
            <View style={{flexDirection:"row",paddingLeft:20,}}> 
            {/* Below input box is for unit price */}
            <TextInput style={[styles.CUS,{width:'30%',marginRight:"1.5%"}]} placeholderTextColor="#202020" placeholder="Color" 
                onChangeText={(text)=>{ 
                  setColor(text);
                }}
              
            
            />

            {/* Below input box is for tax amount */}
            <TextInput style={[styles.CUS,{width:'30%',marginRight:"1.5%"}]} placeholderTextColor="#202020" placeholder="Availability" keyboardType="numeric"
              onChangeText={(text)=>{ 
              
                setAvail(text);
              }}

              
            />
          <TouchableOpacity style={{width:'30%',backgroundColor:"#008080",borderRadius:8, padding: 5, marginBottom:10, marginTop:10, }} 
          onPress={()=>
            {

              setDetails({
                ...details,
                [color]:avail
              })
              console.log(details)
            }
          
          }
          >
            <Text style={{ fontSize:20,textAlign:'center',color:"#FFFFFF"}}>+ Add</Text>
          </TouchableOpacity>
                      
            </View>
            <TouchableOpacity style={styles.SignBtn} onPress={PickImage}><Text style={{color:"#FFFFFF"}}>Upload Image</Text></TouchableOpacity>
        {image && <Image source={{uri:image}} style={{
                        width:150,
                        height:200,
                        marginLeft:20,
                        justifyContent:"center"
                    }} resizeMode={'contain'}/>}

            <TouchableOpacity style={{width:'50%',backgroundColor:"#008080",borderRadius:8, padding: 5, marginBottom:10, marginTop:10,marginLeft:"25%" }} 
          onPress={()=>{
           
           
           if(prod.product_name!='' &&  prod.brand_name!=''&& prod.product_description!='' && prod.gender!=''&& prod.material!=''&& prod.ocassion!=''&& prod.category!=''&& prod.final_price!=0 && prod.tax_amt!=0  ){
             if(size.length>0 && Object.keys(details).length>0){
             
              // for(var i=0;i<size.length;i++){
              //   console.log(size[i])
              //   const a=size[i]
              //   setFinal({
              //     ...finalSize,
              //     [a]:details
              //   })
              //   console.log(finalSize)
              // }

              // setProd({
              //   ...prod,
              //   size:finalSize
              // })
              firebase.database().ref('prod_details/').push(prod).then((snap)=>{
                const key=snap.key;
                uploadImage(image,key)
                for(var i=0;i<size.length;i++){
                firebase.database().ref('prod_details/').child(key).child("size").child(size[i]).set(details)
                }
              }).then(()=>{
                Alert.alert("Sucess","Product is sucessfully added",[
                  { text: "OK", onPress: () => {console.log("OK Pressed"); }}
                ])
              })

                   
                      
             }
             else{
              Alert.alert("Error","Please add Sizes and Colors",[
                { text: "OK", onPress: () =>{ console.log(size.length,Object.keys(details).length)}}
              ])
             }

           }
           else {
            Alert.alert("Error","Please fill all the details",[
              { text: "OK", onPress: () =>{ console.log(prod);}}
            ])
           }
          }
        }
          >
            <Text style={{ fontSize:20,textAlign:'center',color:"#FFFFFF"}}>Submit</Text>
          </TouchableOpacity>

     
        </View>
        </ScrollView>
        </View>
    );
  }

 
  
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:"#008080"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  HeaderMain: {
    // flex:1,
    height:150,
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderLeftColor:"#8844ad",

  },
  HeaderMainText:{
    paddingTop:"20%",
    textAlign:'center',
    textAlignVertical:"center",
    color:"#ebe6ed",
    // fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:30,
    fontFamily: 'Roboto', 
  },
  FormWrapper: {
    backgroundColor: '#f5fffa',
    // paddingLeft:20,
    marginTop: 10,
    paddingTop:"5%",
    paddingBottom:"5%",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    // borderTopEndRadius:30,
  },
  CUS:{
    // backgroundColor: "#E0FFFF",
    fontSize:15,
    textAlign:'center',
    width:"88%",
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

  SignBtn: {
    marginTop: 30,
    marginLeft:"1.5%",
    backgroundColor:"#008080",
    width:"93%",
    marginLeft: 10, 
    alignItems:"center",
    justifyContent:'center',
    height:43,
    borderRadius:8,
  }
})