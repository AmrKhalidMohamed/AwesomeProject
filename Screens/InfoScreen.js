import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




export default function InfoScreen({props}) {
    const navigation=useNavigation()
    const [rooms,setRooms]=useState([])
    const getrooms=()=>{
      axios.get('http://localhost:8000/api/rooms',{
          
      })
      .then( (response)=> {
       
        console.log(response.data);
        setRooms(response.data);
      })
      .catch(function (error) {
      
        console.log(error);
      })
      .finally(function () {
        
      });
   }
   useEffect(() => {
          getrooms()
   }, [])
  return (
    <SafeAreaView>
        <TouchableOpacity
        onPress={()=>navigation.goBack("")}
        >
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      <Text  >InfoScreen</Text>
      
    </SafeAreaView>
  )
}