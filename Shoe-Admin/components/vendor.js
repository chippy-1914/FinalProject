
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {  useState } from 'react';
import firebase from "firebase";

import
{ 
  ScrollView,
  Alert,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    
    
  
} from 'react-native';



 
 

export default function Venform({navigation}) {
// This state variable is used to check whether any input doesnt match with the actual condition
const [isError,setError] = useState({
  fName:false,
  lName:false,
  Contact1:false,
  Contact2:false,
  CompanyName:false,
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

// this state variable is used to store the values of the customers details
const [user,setUser] = useState({
  fName:'',
  lName:'',
  Contact1:'',
  Contact2:'',
  CompanyName:'',
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

// These are temporary state variable used in the program where we want excecution from the second click
// const [temp,setTemp] = useState({
//   Contact:0,
//   Email:0,
//   Pincode:0,
//   Password:0,

//   })
  
// This function is used to retrieve email array from database so that we can check if the user has already registered or not
  function getEmails() {
    const dbRef = firebase.database().ref();
    const dbtable=dbRef.child("vendor_details");
    dbtable.get().then((snapshot) => {
    if (snapshot.exists()) {
      const array2=snapshot.val();
      // here we store the user id  
      const userId=Object.keys(array2);
      const countObj=Object.keys(array2).length;
      // console.log(userId);
      for(var i=0;i<countObj;i++){
      dbtable.child(userId[i]).child("Email").get().then((snapshot)=>{
        // here we push the emails frm db to the Email array
        Email.push(snapshot.val());
      }).catch((error)=>{
        console.log(error);
      });
      }
    } else {

      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return Email;
  }


  
  // Below are state variable for email array, contact array and for the password eye icon
 const [Email,setEmail]=useState([getEmails()])
 const [hidePass, setHidePass] = useState(true);

  

  return (
    <View style={styles.container}>
      <ScrollView >
      <View style={styles.HeaderMain}> 
      {/* This is section for the shop logo and header section */}
        <Text style={styles.HeaderMainText}>SIGN UP!</Text>
        <Text style={{paddingTop:10,fontSize:20,fontFamily:"monospace",color:"white",textAlign:'center'}}>We are happy to welcome you!</Text>
      </View>
           
            
    
    <View style={styles.FormWrapper}>
    
 {/* the below section is for first name input box. Here we do not allow numbers or any other special character. We can see the error while typing itself */}
        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="First Name" 
       
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
        
        <View>{(isError.fName) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>First Name should not have number or any special characters</Text>}</View>   
        
{/* the below section is for last name input box. Here we do not allow numbers or any other special character. We can see the error while typing itself */}
  
        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Last name"
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
        
        <View>{(isError.lName) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Last Name should not have number or any special characters</Text>}</View>

        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Company Name" 
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              CompanyName:text});
           }}
  
           onKeyPress={(e)=>{
            const pattern = /^[a-zA-Z]{2,40}([a-zA-Z ]{0,40})+$/;
            setError({ 
            ...isError,
            CompanyName:(!pattern.test(user.CompanyName))
           }); 
          }}
        />       

<View>{(isError.CompanyName) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Company Name should not have number or any special characters</Text>}</View>
{/* the below section is for contact input box. Here we do not allow alphabets or any other special character. We can see the error when we go to the next text box or when the text is out of focus */}
  
        <View style={{flexDirection:"row",}}>
          <Text style={[styles.CUS,{borderWidth:2,width:"13%",paddingTop:5,borderRightWidth:0,borderWidth:0,fontSize:15,marginTop:12}]}>+91</Text>
          <TextInput style={[styles.CUS,{width:"80%"}]} placeholderTextColor="#202020" placeholder="Contact 1" keyboardType={'numeric'}
            onChangeText={(text)=>{ 
              setUser({
                ...user,
                Contact1:text});
              
             }}
    
             onBlur={(e)=>{
            //    if(temp.Contact==0){
            //    setTemp({Contact:temp.Contact+1})
            // }
            // else{
              const pattern = /^[6-9]\d{9}$/ 
              user.Contact1.trim();
              setError({ 
              ...isError,
              Contact1:(!pattern.test(user.Contact1))
              
              // }); 
             
               });
            }}
          />
        </View>

        <View>{(isError.Contact1) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Contact number is not valid</Text>}</View>
       


       {/* the below section is for contact 2 input box. Here we do not allow alphabets or any other special character. We can see the error when we go to the next text box or when the text is out of focus */}
  
        <View style={{flexDirection:"row",}}>
          <Text style={[styles.CUS,{borderWidth:2,width:"13%",paddingTop:5,borderRightWidth:0,borderWidth:0,fontSize:15,marginTop:12}]}>+91</Text>
          <TextInput style={[styles.CUS,{width:"80%"}]} placeholderTextColor="#202020" placeholder="Contact 2" keyboardType={'numeric'}
            onChangeText={(text)=>{ 
              setUser({
                ...user,
                Contact2:text});
              
             }}
    
             onBlur={(e)=>{
            //    if(temp.Contact==0){
            //    setTemp({Contact:temp.Contact+1})
            // }
            // else{
              const pattern = /^[6-9]\d{9}$/ 
              user.Contact2.trim();
              setError({ 
              ...isError,
              Contact2:(!pattern.test(user.Contact2))
              
              // }); 
             
               });
            }}
          />
        </View>

        <View>{(isError.Contact2) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Contact number is not valid</Text>}</View>
        
{/* the below section is for email input box. Here we do not allow any other special character other than '.@'. We can see the error when we go to the next text box or when the text is out of focus */}
          
        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Email"
          onChangeText={(text)=>{ 
            setUser({
              ...user,
              Email:text});
           }}

          onBlur={(e)=>{
        //     if(temp.Email==0){
        //     setTemp({Email:temp.Email+1});
        //  }
        //  else{
          user.Email.trim()
           const pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w\w+)+$/;
           setError({ 
            ...isError,
           Email:(!pattern.test(user.Email))
           });  
            // }
          }}
        />

        
        <View>{(isError.Email) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Email Id is not valid</Text>}</View>

{/* the below section is for room no building input box. Here we do not allow any special character. You have to give 2 words or more for room no and building name We can see the error while typing itself */}
  

        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Room No/Building Name"
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

        <View>{(isError.Add1) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Address should not have special characters other than ,/</Text>}</View>

{/* the below section is for area or lane input box. Here we do not allow numbers any other special character. We can see the error while typing itself */}
  
        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Area/Lane" 
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

        <View>{(isError.Add2) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Address should not have special characters other than ,/</Text>}</View>


{/* the below section is for landmark input box. Here we do not allow numbers or any other special character. We can see the error while typing itself */}
  
        <TextInput style={styles.CUS} placeholderTextColor="#202020" placeholder="Landmark" 
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

        <View>{(isError.Landmark) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Landmark should not have numbers, or any special characters</Text>}</View>

{/* the below section is for Cityinput box. Here we do not allow numbers or any other special character. We can see the error while typing itself */}
  
        <View style={{flexDirection:"row",}}>
        <TextInput style={[styles.CUS,{width:"45%"}]} placeholderTextColor="#202020" placeholder="City" 
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

{/* the below section is for District input box. Here we do not allow any other special character. We can see the error while typing itself */}
          
        <TextInput style={[styles.CUS,{marginLeft:10,width:"45%"}]} placeholderTextColor="#202020" placeholder="District" 
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
          {(isError.City) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>City is not valid</Text>}
          {(isError.District) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>District is not valid</Text>}
        </View>
        

{/* the below section is for state drop down box.It is necessary to select a value */}

        <ModalDropdown options={["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh",
  "Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"]} 
         defaultValue={"State"} style={styles.CUS} textStyle={{fontSize:15,textAlign:'center',color:'#202020'}} borderWidth={1.5}
         borderColor={'#008080'} marginBottom={20} marginRight={10} paddingTop={8} paddingLeft={35} 
         borderBottomLeftRadius={8} borderBottomRightRadius={8}
         borderTopLeftRadius={8} borderTopRightRadius={8} marginTop={10}
         dropdownTextStyle={{backgroundColor:"#008080",fontSize:20,color:"white",}}   renderButtonText={(value)=>{
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
    
        {/* the below section is for first name input box. Here we do not allow numbers or any other special character. We can see the error when we go to the next text box or when the text is out of focus */}
  
        <TextInput style={[styles.CUS,{marginTop:15}]} placeholderTextColor="#202020" placeholder="Pincode"
           onChangeText={(text)=>{ 
            setUser({
              ...user,
              Pincode:text});
           }}
  
          onBlur={(e)=>{
        //     if(temp.Pincode==0){
        //     setTemp({Pincode:temp.Pincode+1})
        //  }
        //  else{
           const pattern =/^[1-9][0-9]{5}$/;
           setError({ 
            ...isError,
            Pincode:(!pattern.test(user.Pincode))
           }); 
            // }
          }}
           
          
        />

        <View>{(isError.Pincode) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Pincode is invalid</Text>}</View>
        
        <View style={{flexDirection:"row",}}>
  
         
  {/* the below section is for password input box. Here we do not allow numbers or any other special character. We can see the error while when we go to the next text box or when the text is out of focus*/}
          
          <TextInput style={[styles.CUS,{width:"80%",borderTopRightRadius: 8, borderTopLeftRadius: 8,}]} secureTextEntry={hidePass ? true : false} placeholderTextColor="#202020" placeholder="Password" 
              onChangeText={(text)=>{ 
                setUser({
                  ...user,
                  Password:text});

              }}
              onBlur={(e)=>{
                // if(temp.Password==0){
                //   setTemp({Password:temp.Password+1})
                // }
                // else{
                  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                  
                  setError({ 
                    ...isError,
                  Password:(!pattern.test(user.Password))
                  }); 
                  // }
                }
              }
          />
          <Icon
                style={[styles.CUS,{width:"15%",borderWidth:0,marginTop:15}]}
                name={hidePass ? 'eye-slash' : 'eye'}
                // size={15}
                borderBottomLeftRadius={0}
                borderTopLeftRadius={0}
            
                color="grey"
                onPress={() => setHidePass(!hidePass)}
              />  
        </View>


        
        {/* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: */}
        

        <View>{(isError.Password) && <Text style={{fontSize:15, color:"red",paddingBottom:15}}> Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: *</Text>}</View>

        
       
        <View style={{flexDirection:"row",}} >
          {/* <TouchableOpacity style={styles.SignBtn}   >
            <Text style={{fontSize:22,fontWeight:"300",color:"#ffffff"}}>Cancel</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.SignBtn} 
            onPress={(e)=>{
              


                // Here we will check any textbox has invalid value or null value or if the email or contact number is already registered. If any of the error occurs then there will be an error message and if there isnt any error the values will be submitted to the fire base
                if( isError.fName==false && isError.lName==false && isError.Contact1==false && isError.Contact2==false && isError.CompanyName==false && isError.Email==false && isError.Add1==false && isError.Add2==false && isError.Landmark==false && isError.City==false && isError.District==false && isError.Pincode==false && isError.Password==false && isError.State==true )
                {

                      if(Email.includes(user.Email))
                          {
                            Alert.alert("Error","This email id is already registrated.",[
                              { text: "OK", onPress: () => {console.log("OK Pressed");navigation.navigate('Login') }}
                            ])
                            
                          }
                      else
                      {
                            if( user.fName=='' || user.lName=='' || user.Contact1=='' || user.CompanyName=='' || user.Email=='' || user.Add1=='' || user.Add2=='' ||   user.City=='' || user.District=='' || user.State=='' || user.Pincode=='' || user.Password=='')
                          {
                            Alert.alert("Error","Please fill the details properly",[
                              { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(user)}}
                            ])
                          }
                     
                      else{
                        firebase.database().ref('vendor_details/').push(user);
                   
                        Alert.alert("Success","The vendor is successfully registered",[
                          { text: "OK", onPress: () => {console.log("OK Pressed"); navigation.navigate("Dashboard")}}
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
            <Text style={{fontSize:22,fontWeight:"300",color:"#ffffff"}}>Sign Up</Text>
          </TouchableOpacity>
          
        
        
     
        
        </View>
       
        </View>
    </ScrollView>
  </View>
    );
          
          }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#008080",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  HeaderMain: {
    // flex:1,
    height:180,
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
    paddingLeft:20,
    marginTop: 10,
    paddingTop:"5%",
    paddingBottom:"5%",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    // borderTopEndRadius:30,
  },
  // normalText:{
  //   fontSize:25,
  //   paddingBottom:8,
  // },
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
  SignBtn: {
    marginTop: 30,
    marginLeft:"1.5%",
    backgroundColor:"#008080",
    width:"93%",
    marginLeft: 0, 
    alignItems:"center",
    justifyContent:'center',
    height:43,
    borderRadius:8,
  }
});
