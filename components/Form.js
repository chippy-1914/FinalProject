import { StatusBar } from 'expo-status-bar';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {  useState } from 'react';
import firebase from "firebase";

import
{ 
  Button,
  Alert,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,

  
} from 'react-native';



 
 

export default function Regiform() {

const [isError,setError] = useState({
  fName:false,
  lName:false,
  Gender:false,
  Contact:false,
  Email:false,
  Add1:false,
  Add2:false,
  Landmark:false,
  City:false,
  District:false,
  Pincode:false,
  Password:false,
  State:false,

})


const [user,setUser] = useState({
  fName:'',
  lName:'',
  Contact:'',
  Gender:'',
  Email:'',
  Add1:'',
  Add2:'',
  Landmark:'',
  City:'',
  District:'',
  State:'',
  Pincode:'',
  Password:'',
})
const [temp,setTemp] = useState({
  Contact:0,
  Email:0,
  Pincode:0,
  Password:0,

  })
  

  function getEmails() {
    const dbRef = firebase.database().ref();
    const dbtable=dbRef.child("cust_details");
    dbtable.get().then((snapshot) => {
    if (snapshot.exists()) {
      const array2=snapshot.val();
      const userId=Object.keys(array2);
      const countObj=Object.keys(array2).length;
      // console.log(userId);
      for(var i=0;i<countObj;i++){
      dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
        Email.push(snapshot.val());
      }).catch((error)=>{
        console.log(error)
      })
      }
      
     
    } else {

      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return Email;
  }


  function getContact() {
    const dbRef = firebase.database().ref();
    const dbtable=dbRef.child("cust_details");
    dbtable.get().then((snapshot) => {
    if (snapshot.exists()) {
      const array2=snapshot.val();
      const userId=Object.keys(array2);
      const countObj=Object.keys(array2).length;
      // console.log(userId);
      for(var i=0;i<countObj;i++){
      dbtable.child(userId[i]).child("Contact").get().then((snapshot)=>{
        Contact.push(snapshot.val());
      }).catch((error)=>{
        console.log(error)
      })
      }
      
     
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return Contact;
  }

  
  
 const [Email,setEmail]=useState([getEmails()])
 const [Contact,setContact]=useState([getContact()])
 const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.FormWrapper}>
        <Text style={styles.normalText} >Hello, User</Text>
        <Text style={styles.normalText}>Register Yourself</Text>

        <TextInput style={styles.CUS} placeholder="First Name" 
       
         onChangeText={(text)=>{ 
          setUser({
            ...user,
            fName:text});
         }}

         onKeyPress={(e)=>{
          const pattern = /^[a-zA-Z]{2,40}\s?$/;

          setError({ 
           ...isError,
          fName:(!pattern.test(user.fName))
         }); 
        }}
      />
        
        <View>{(isError.fName) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>First Name should not have number or any special characters</Text>}</View>   
        

        <TextInput style={styles.CUS} placeholder="Last name"
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              lName:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}\s?$/;
            setError({ 
            ...isError,
            lName:(!pattern.test(user.lName))
           }); 
          }}
        />
        
        <View>{(isError.lName) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Last Name should not have number or any special characters</Text>}</View>
       

        <View style={{flexDirection:"row",}}>
          <Text style={[styles.CUS,{borderBottomWidth:0,width:"13%"}]}>+91</Text>
          <TextInput style={[styles.CUS,{width:"80%"}]} placeholder="Contact" 
            onChangeText={(text)=>{ 
              setUser({
                ...user,
                Contact:text});
              
             }}
    
             onBlur={(e)=>{
            //    if(temp.Contact==0){
            //    setTemp({Contact:temp.Contact+1})
            // }
            // else{
              const pattern = /^[6-9]\d{9}$/ 
              user.Contact.trim();
              setError({ 
              ...isError,
              Contact:(!pattern.test(user.Contact))
              
              // }); 
             
               });
            }}
          />
        </View>

        <View>{(isError.Contact) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Contact number is not valid</Text>}</View>
       
        
        
        <TextInput style={styles.CUS} placeholder="Email"
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              Email:text});
           }}

          onBlur={(e)=>{
            if(temp.Email==0){
            setTemp({Email:temp.Email+1})
         }
         else{
           const pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w\w+)+$/;
           setError({ 
            ...isError,
           Email:(!pattern.test(user.Email))
           });  
            }
          }}
        />

        
        <View>{(isError.Email) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Email Id is not valid</Text>}</View>

        <TextInput style={styles.CUS} placeholder="Room No/Building Name"
           onChangeText={(text)=>{ 
            setUser({
              ...user,
              Add1:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z0-9]{2,40}[,/]?( [a-zA-Z0-9]{1,40})+$/;
            setError({ 
            ...isError,
            Add1:(!pattern.test(user.Add1))
           });  
          }}
        />

        <View>{(isError.Add1) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Address should not have special characters other than ,/</Text>}</View>


        <TextInput style={styles.CUS} placeholder="Area/ Lane" 
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              Add2:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z0-9]{2,40}[,/\s]{0,2}?([a-zA-Z0-9]{1,40})+$/ ;
            setError({ 
            ...isError,
            Add2:(!pattern.test(user.Add2))
           }); 
          }}
        />

        <View>{(isError.Add2) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Address should not have special characters other than ,/</Text>}</View>

        <TextInput style={styles.CUS} placeholder="Landmark" 
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              Landmark:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z\s]{0,40})+$/;
            setError({ 
            ...isError,
            Landmark:(!pattern.test(user.Landmark))
           }); 
          }}
        />

        <View>{(isError.Landmark) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Landmark should not have numbers, or any special characters</Text>}</View>
        
        <View style={{flexDirection:"row",}}>
        <TextInput style={[styles.CUS,{width:"45%"}]} placeholder="City" 
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              City:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/;
            setError({ 
            ...isError,
            City:(!pattern.test(user.City))
           }); 
          }}
        />
        
        <TextInput style={[styles.CUS,{marginLeft:10,width:"45%"}]} placeholder="District" 
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              District:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/;
            setError({ 
            ...isError,
            District:(!pattern.test(user.District))
           }); 
          }}
        />
        </View>

        <View>
          {(isError.City) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>City is not valid</Text>}
          {(isError.District) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>District is not valid</Text>}
        </View>
        

        <View style={{flexDirection:"row",}}>
        <ModalDropdown options={["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"]} 
         defaultValue={"State"} style={{width:"45%"}} textStyle={{fontSize:25,}} 
         dropdownTextStyle={{backgroundColor:"#ba60eb",fontSize:20,color:"#ebe6ed",}}   renderButtonText={(value)=>{
           setUser({
             ...user,
             State:value,
           })
           if(user.State==''){
           setError({
            ...isError,
            State:true,
           })
          }
          
         }}/>
         <ModalDropdown options={['Male','Female','Other']} defaultValue={"Gender"} style={{width:"45%"}} textStyle={{fontSize:25,}}  
         dropdownTextStyle={{backgroundColor:"#ba60eb",fontSize:20,color:"#ebe6ed",}}   renderButtonText={(value)=>{
           setUser({
             ...user,
             Gender:value,
           })
           if(user.Gender==''){
           setError({
            ...isError,
            Gender:true,
           })
          }
         }} />
         </View>
        
        <TextInput style={[styles.CUS,{paddingTop:10}]} placeholder="Pincode"
           onChangeText={(text)=>{ 
            setUser({
              ...user,
              Pincode:text});
           }}
  
          onBlur={(e)=>{
            if(temp.Pincode==0){
            setTemp({Pincode:temp.Pincode+1})
         }
         else{
           const pattern =/^[1-9][0-9]{5}$/;
           setError({ 
            ...isError,
            Pincode:(!pattern.test(user.Pincode))
           }); 
            }
          }}
           
          
        />

        <View>{(isError.Pincode) && <Text style={{fontSize:19,color:"red",paddingBottom:15}}>Pincode is invalid</Text>}</View>
        
        <View style={{flexDirection:"row",}}>
  
         
          
          <TextInput style={[styles.CUS,{width:"80%"}]} secureTextEntry={hidePass ? true : false} placeholder="Password" 
              onChangeText={(text)=>{ 
                setUser({
                  ...user,
                  Password:text});

              }}
              onBlur={(e)=>{
                if(temp.Password==0){
                  setTemp({Password:temp.Password+1})
                }
                else{
                  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                  
                  setError({ 
                    ...isError,
                  Password:(!pattern.test(user.Password))
                  }); 
                  }
                }
              }
          />
          <Icon
                style={[styles.CUS,{width:"13%",}]}
                name={hidePass ? 'eye-slash' : 'eye'}
                // size={15}
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              />  
        </View>


        
        {/* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: */}
        

        <View>{(isError.Password) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}> Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: *</Text>}</View>

        
       
        <View style={{flexDirection:"row",}} >
          <TouchableOpacity style={styles.SignBtn}   >
            <Text style={{fontSize:22,fontWeight:"bold",color:"#ffffff"}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SignBtn} 
            onPress={(e)=>{
              


                
                if(isError.fName==false && isError.lName==false && isError.Gender==true && isError.Contact==false && isError.Email==false && isError.Add1==false && isError.Add2==false &&  isError.City==false && isError.District==false && isError.Pincode==false && isError.Password==false && isError.State==true )
                {

                      if(Email.includes(user.Email) ||Contact.includes(user.Contact))
                          {
                            Alert.alert("Error","Your email id or contact is already registrated. Please login",[
                              { text: "OK", onPress: () => {console.log("OK Pressed"); }}
                            ])
                            
                          }
                      else
                      {
                            if( user.fName=='' || user.lName=='' || user.Contact=='' || user.Gender=='' || user.Email=='' || user.Add1=='' || user.Add2=='' ||   user.City=='' || user.District=='' || user.State=='' || user.Pincode=='' || user.Password=='')
                          {
                            Alert.alert("Error","Please fill the details properly",[
                              { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(isError)}}
                            ])
                          }
                     
                      else{
                        firebase.database().ref('cust_details/').push(user);
                   
                        Alert.alert("Sign Up Sucessful","Please login in to your account",[
                          { text: "OK", onPress: () => {console.log("OK Pressed"); }}
                        ])
                        

                    }
                  }
                }      
                else{
                  Alert.alert("Error","Please fill the details properly",[
                    { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(isError)}}
                  ])
                
                }
            }}

          >
            <Text style={{fontSize:22,fontWeight:"bold",color:"#ffffff"}}>Sign UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SignBtn}>
            <Text style={{fontSize:22,fontWeight:"bold",color:"#ffffff"}} >Login</Text>
          </TouchableOpacity>
        </View>
        
        <Text>{"\n"} {"\n"} </Text>
        </View>
    );
          
          }

const styles = StyleSheet.create({
  FormWrapper: {
    flex: 1,
  },
  normalText:{
    fontSize:25,
    paddingBottom:8,
  },
  CUS:{
    fontSize:25,
    width:"93%",
    marginBottom:20,
    borderBottomWidth:2,
    borderColor:"#ba60eb",
   
    
  },
  SignBtn: {
    marginLeft:"1.5%",
    backgroundColor:"#ba60eb",
    width:"30%",
    alignItems:"center",
    justifyContent:'center',
    height:43,
    borderRadius:8,
  }
 
});
