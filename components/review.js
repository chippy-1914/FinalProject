import React, {useState,useEffect} from "react";
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, TextInput, Alert,Platform} from "react-native";
import * as firebase from 'firebase'; 
// import * as ImagePicker from 'expo-image-picker';
export default function StarRating({navigation}){

    
    // const [image,setImage] = useState(null);

    // useEffect( async () => {
    //     if(Platform.OS !== 'web') {
    //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //         if(status !== 'granted'){
    //             alert('Permission Denied!')
    //         }
    //     }
    // },[])

    // const PickImage = async () =>{
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing:true,
    //         aspect:[6,4],
    //         quality:1,
    //     });
    //     console.log(result)
    //     if(!result.cancelled){
    //         setImage(result.uri);
    //     }
    // }

    // uploadImage = async (uri,imageName)=> {
    //     const response = await fetch(uri);
    //     const blob = await response.blob();

    //     var ref = firebase.storage().ref().child('images/' + imageName);
    //     return ref.put(blob);
    // }
    const Details = () => {
        navigation.navigate('Details')
        firebase.database().ref('review_table/').push(Review)
        // .then((snap)=>{
            // const key=snap.key;
            // uploadImage(image,key);
                    Alert.alert("Thanks for the reveiw!!!")
                    // console.log(Review)
    // })
}
    const [Review,setReview] = useState({
        Rating: 0,
        Feedback:'',
        productId: ''
    })

    // const Ratings = defaultRating 
    // const Feedback = 

    const [defaultRating,setdefaultRating] = useState(0)
    const [maxRating,setmaxRating] = useState([1,2,3,4,5])
    // const rating = defaultRating

    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

    const CustomRatingBar = () => {
        return(
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => 
                                 {setReview({...Review, Rating:item})}}
// review k rating wale m item stored hua
                            >

                            <Image
                                style={styles.starImgStyle}
                                source = {
                                    item <= Review.Rating ? {uri: starImgFilled} : {uri: starImgCorner}
                                }



                            />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Please Rate Us</Text>
            <CustomRatingBar/>
           
            <Text style={styles.textStyle}>
               {Review.Rating + ' / ' + maxRating.length} 
               {/* onclick ={(rating)=>{ 
                setReview({
                Rating:rating});
            }} */}
            </Text>
            
            <View>
                <TextInput placeholder="Write a feedback..." style={styles.textarea} numberOfLines={8}
                multiline={true}  onChangeText={(text) => setReview({...Review, Feedback:text})}/>
                <View style={styles.buttons}>
                {/* <TouchableOpacity style={styles.btn}><Text style={{alignSelf:'center'}} onPress={PickImage}>Upload image</Text></TouchableOpacity> 
                {image && <Image source={{uri:image}} style={{
                        width:150,
                        height:200,
                        marginLeft:20,
                        justifyContent:"center"
                    }} resizeMode={'contain'}/>} */}
                
                <TouchableOpacity style={styles.subbtn} onPress={Details}>
                    <Text style={{alignSelf:'center'}}>Submit</Text></TouchableOpacity> 
                {/* // onPress={() => Alert.alert('Button with adjusted color pressed')} */}
               
                </View>
            </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    //   justifyContent: "center",
    marginTop: 80
    },
    textStyle: {
      textAlign:'center',
      fontSize: 23,
      marginTop: 10
    },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    textarea: {
        // border: "1px solid #a9a9a9",
        borderWidth: 1,
        borderColor: "#a9a9a9",
        borderStyle: 'solid',
        borderRadius: 5,
        width: 300,
        minHeight: 100,
        margin: 20,
        paddingLeft: 10,
        fontSize: 15,
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // width: "50%",
    },
    subbtn: {
        // margin: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        width: "90%",
        height: 35,
        paddingTop: 5,
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
        elevation: 5
    },
    // btn: {
    //     // margin: 20,
    //     borderWidth: 1,
    //     borderStyle: 'solid',
    //     borderRadius: 5,
    //     width: "80%",
    //     backgroundColor: 'lightblue',
    //     borderColor: 'lightblue',
    //     elevation: 5
        
    // }
});
