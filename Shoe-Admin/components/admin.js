// import { StatusBar } from 'expo-status-bar';
// import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {  useState } from 'react';
import firebase from "firebase";

import
{ 
  Alert,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    ScrollView,
    
  
} from 'react-native';



 
 

export default function Adminform({navigation}) {
// This state variable is used to check whether any input doesnt match with the actual condition
const [isError,setError] = useState({
  fName:false,
  lName:false,
  Contact:false,
  Email:false,
  Password:false,

})

// this state variable is used to store the values of the customers details
const [user,setUser] = useState({
  fName:'',
  lName:'',
  Contact:'',
  Email:'',
  Password:'',
})

// // These are temporary state variable used in the program where we want excecution from the second click
// const [temp,setTemp] = useState({
//   Contact:0,
//   Email:0,
//   Pincode:0,
//   Password:0,

// })

// This function is used to retrieve email array from database so that we can check if the user has already registered or not
function getEmails() {
  const dbRef = firebase.database().ref();
  const dbtable=dbRef.child("admin_details");
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

// This function is used to retrieve contact array from database so that we can check if the user has already registered or not



// Below are state variable for email array, contact array and for the password eye icon
const [Email,setEmail]=useState([getEmails()])
// const [Contact,setContact]=useState([getContact()])
const [hidePass, setHidePass] = useState(true);

return (
<View style={styles.container}>
    <ScrollView>
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
  {/* the below section is for contact input box. Here we do not allow alphabets or any other special character. We can see the error when we go to the next text box or when the text is out of focus */}
  
  <View style={{flexDirection:"row",}}>
          <Text style={[styles.CUS,{borderWidth:2,width:"13%",paddingTop:5,borderRightWidth:0,borderWidth:0,fontSize:20}]}>+91</Text>
          <TextInput style={[styles.CUS,{width:"80%"}]} placeholderTextColor="#202020" placeholder="Contact" 
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

        <View>{(isError.Contact) && <Text style={{fontSize:15,color:"red",paddingBottom:15}}>Contact number is not valid</Text>}</View>
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
                style={[styles.CUS,{width:"13%",borderWidth:0,marginTop:15}]}
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
                if(isError.fName==false && isError.lName==false && isError.Contact==false && isError.Email==false && isError.Password==false )
                {

                      if(Email.includes(user.Email) )
                          {
                            Alert.alert("Error","Your email id is already registrated. Please login",[
                              { text: "OK", onPress: () => {console.log("OK Pressed");navigation.navigate('Login') }}
                            ])
                            
                          }
                      else
                      {
                            if( user.fName=='' || user.lName=='' || user.Contact=='' || user.Email=='' || user.Password=='')
                          {
                            Alert.alert("Error","Please fill the details properly",[
                              { text: "OK", onPress: () =>{ console.log("OK Pressed");console.log(isError)}}
                            ])
                          }
                     
                      else{
                        firebase.database().ref('admin_details/').push(user);
                   
                        Alert.alert("Sign Up Sucessful","Please login in to your account",[
                          { text: "OK", onPress: () => {console.log("OK Pressed"); navigation.navigate('Login')}}
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
          {/* <TouchableOpacity style={styles.SignBtn}>
            <Text style={{fontSize:22,fontWeight:"300",color:"#ffffff"}} >Login</Text>
          </TouchableOpacity> */}
        </View>
        {/* <Text>{"\n"} {"\n"} </Text> */}
        <TouchableOpacity style={{backgroundColor:'#f5fffa',marginTop:10,}} onPress={(e)=>{navigation.navigate('Login')}}>
            <Text style={{textDecorationLine: 'underline',fontSize:20}}>Already have an account</Text>
          </TouchableOpacity>

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
    height:220,
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
    marginTop:10,
    // fontFamily:"Roboto",
    fontWeight:"bold",
    fontSize:30,
    fontFamily: 'Roboto', 
  },

  FormWrapper: {
    height:650,
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
