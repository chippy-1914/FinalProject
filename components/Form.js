import { StatusBar } from 'expo-status-bar';
import ModalDropdown from 'react-native-modal-dropdown';
import React, {  useState } from 'react';
import 
{ 
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
    Contact:false,
    Email:false,
    Add1:false,
    Add2:false,
    Landmark:false,
    City:false,
    District:false,
    Pincode:false,
    Password:false,
    Confirm:true,

  })  
  const [user,setUser] = useState({
    fName:'',
    lName:'',
    Contact:'',
    Email:'',
    Add1:'',
    Add2:'',
    Landmark:'',
    City:'',
    District:'',
    Pincode:'',
    Password:''
  })
  

  return (
    <View style={styles.FormWrapper}>
        <Text style={styles.normalText} >Hello, User</Text>
        <Text style={styles.normalText}>Register Yourself</Text>

        <TextInput style={styles.CUS} placeholder="First Name" 
       
         onChangeText={(text)=>{ 
          setUser({fName:text});
         }}

         onKeyPress={(e)=>{
          const pattern = /^[a-zA-Z]{2,40}\s?$/;

          setError({ 
          fName:(!pattern.test(user.fName))
         }); 
        }}
      />
        
        <View>{(isError.fName) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>First Name is not valid</Text>}</View>   
        

        <TextInput style={styles.CUS} placeholder="Last name"
          onChangeText={(text)=>{ 
            setUser({lName:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}\s?$/;
            setError({ 
            lName:(!pattern.test(user.lName))
           }); 
          }}
        />
        
        <View>{(isError.lName) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Last Name is not valid</Text>}</View>
       

        <View style={{flexDirection:"row",}}>
          <Text style={[styles.CUS,{borderBottomWidth:0,width:"13%"}]}>+91</Text>
          <TextInput style={[styles.CUS,{width:"80%"}]} placeholder="Contact" 
            onChangeText={(text)=>{ 
              setUser({Contact:text});
             }}
    
             onKeyPress={(e)=>{
              const pattern = /^[6-9]\d{9}$//*/^[6-9]{1}[0-9]{9}$/;*/ 
              user.Contact.trim()
              setError({ 
              Contact:(!pattern.test(user.Contact))
              
             }); 
            }}
          />
        </View>

        <View>{(isError.Contact) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Contact number is not valid</Text>}</View>
       
        
        
        <TextInput style={styles.CUS} placeholder="Email"
          onChangeText={(text)=>{ 
            setUser({Email:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w\w+)+$/;
            setError({ 
            Email:(!pattern.test(user.Email))
           }); 
          }}
        />

        
        <View>{(isError.Email) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Email Id is not valid</Text>}</View>

        <TextInput style={styles.CUS} placeholder="Room No/Building Name"
           onChangeText={(text)=>{ 
            setUser({Add1:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z0-9]{2,40}[,/]?( [a-zA-Z]{1,40})+$/;
            setError({ 
            Add1:(!pattern.test(user.Add1))
           }); 
          }}
        />

        <View>{(isError.Add1) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Address is not valid</Text>}</View>


        <TextInput style={styles.CUS} placeholder="Area/ Lane" 
          onChangeText={(text)=>{ 
            setUser({Add2:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z0-9]{2,40}[,/\s]{0,2}?([a-zA-Z]{1,40})+$/ ;
            setError({ 
            Add2:(!pattern.test(user.Add2))
           }); 
          }}
        />

        <View>{(isError.Add2) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Address is not valid</Text>}</View>

        <TextInput style={styles.CUS} placeholder="Landmark" 
          onChangeText={(text)=>{ 
            setUser({Landmark:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
            setError({ 
            Landmark:(!pattern.test(user.Landmark))
           }); 
          }}
        />

        <View>{(isError.Landmark) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Landmark is not valid</Text>}</View>
        
        <View style={{flexDirection:"row",}}>
        <TextInput style={[styles.CUS,{width:"45%"}]} placeholder="City" 
          onChangeText={(text)=>{ 
            setUser({City:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/;
            setError({ 
            City:(!pattern.test(user.City))
           }); 
          }}
        />
        
        <TextInput style={[styles.CUS,{marginLeft:10,width:"45%"}]} placeholder="District" 
          onChangeText={(text)=>{ 
            setUser({District:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/;
            setError({ 
            District:(!pattern.test(user.District))
           }); 
          }}
        />
        </View>

        <View>
          {(isError.City) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>City is not valid</Text>}
          {(isError.District) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>District is not valid</Text>}
        </View>
        
        <ModalDropdown options={["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa",
        "Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
        "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
        "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh",
        "Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"]} 
         defaultValue={"State"} style={{width:"45%"}} onLoad textStyle={{fontSize:25,}} 
         dropdownTextStyle={{backgroundColor:"#ba60eb",fontSize:20,color:"#ebe6ed",}}  />
        
        <TextInput style={[styles.CUS,{paddingTop:10}]} placeholder="Pincode"
           onChangeText={(text)=>{ 
            setUser({Pincode:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[1-9]{1}[0-9]{5}[\s]?$/;
            setError({ 
            Pincode:(!pattern.test(user.Pincode))
           }); 
           
          }}
        />

        <View>{(isError.Pincode) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Pincode is not valid</Text>}</View>
        
        {/* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: */}

        <TextInput style={styles.CUS} secureTextEntry={true} placeholder="Password" 
         onChangeText={(text)=>{ 
          setUser({Password:text});
         }}

         onKeyPress={(e)=>{
          const pattern = /^[a-zA-Z0-9@#$%^&]{8, 20}$/;
          user.Password.trim()
          setError({ 
          Password:(!pattern.test(user.Password))
         }); 
        }}
        
        />
 
        <View>{(isError.Password) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Password is not valid</Text>}</View>
        <TextInput style={styles.CUS} secureTextEntry={true} placeholder="Confirm Password"
          onChangeText={(text)=>{
            if(text!=user.Password){
              setError({
                Confirm:false
              })
            }
          }}
        />
        
        <View>{(!isError.Confirm) && <Text style={{fontSize:19,color:"red",paddingBottom:15,textAlign:'center'}}>Password is not valid</Text>}</View>

        <View style={{flexDirection:"row",}}>
          <TouchableOpacity style={styles.SignBtn}>
            <Text style={{fontSize:22,fontWeight:"bold",color:"#ffffff"}} >Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SignBtn}>
            <Text style={{fontSize:22,fontWeight:"bold",color:"#ffffff"}} >Sign UP</Text>
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
    width:"90%",
    marginBottom:20,
    borderBottomWidth:2,
    borderColor:"#ba60eb",
    width:"93%",
    
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
