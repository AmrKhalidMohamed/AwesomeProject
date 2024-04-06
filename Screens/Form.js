import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Component/Colors'
import { heightPercentageToDP as hP, widthPercentageToDP as wP,} from 'react-native-responsive-screen'
import axios from "axios"

export default function Form() {

  const [formData, setFormData] = useState({
    // Initialize state for form data
    name: 'name',
    phone_number: 'phone_number',
  });

  const baseUrl = 'https://9197-45-242-217-28.ngrok-free.app';

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://9197-45-242-217-28.ngrok-free.app/api/customers', formData);
      console.log('Response:', response.data);
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };


  
  return (
   <SafeAreaView
   style={{backgroundColor:Colors.black,
    height:hP("100%"),
    width:wP("100%"),
    marginTop:"auto",
    flex:1
    }} >
     
     <SafeAreaView  style={{alignItems:"center"}}  >
      <Text  style={{fontSize:hP(5.5),fontWeight:"bold",fontFamily:"koh",color:"white", marginBottom:hP(7),marginTop:hP(10) }}   >El Malaab 1</Text>
            <TextInput
             placeholder="Field 1"
             value={formData.fieldName1}
             onChangeText={(text) => setFormData({ ...formData, name: text })}
        style={{width:wP("80%"),padding:10,
            borderColor: 'white',
            borderWidth: 1.5,
            borderRadius: 5,
            marginBottom:hP("3"),
            borderRadius:15
          
          }}
            />
            <TextInput
            placeholder="Field 2"
            value={formData.fieldName2}
            onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
        style={{width:wP("80%"),padding:10,
            borderColor: 'white',
            borderWidth: 1.5,
         color:"white",
            marginBottom: 10,
            borderRadius:15
          }}
            />
            <TouchableOpacity
            onPress={handleSubmit}
            >
              <Text
              style={{
                textAlign:"center",
                color:"white",
                
                backgroundColor: "#9E44E6",
      width:wP("50%" )   , 
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        borderRadius:30,
      marginBottom:"1%",
      fontSize:hP(2.5),
      marginTop:hP(10) 
              }}
              >submit</Text>
            </TouchableOpacity>
            <TouchableOpacity>

              
              <Text
              style={{
                textAlign:"center",
                color:"white",
                
                backgroundColor: "#9E44E6",
      width:wP("50%" )   , 
        alignItems:"center",
        borderRadius:15,
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        marginBottom:"1%",
        fontSize:hP(2.5),
              }}
              >Next</Text>
            </TouchableOpacity>
     </SafeAreaView>
      
  <Image source={require("../assets/images/Ellipse 2.png")} style={{position:"absolute",height:hP("100%"),zIndex:-1, width:wP("100%")}}   /> 
        
        
          
   </SafeAreaView>
  )
}