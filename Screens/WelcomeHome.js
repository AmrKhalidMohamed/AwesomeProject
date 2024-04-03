import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

import Colors from '../Component/Colors';
import {  heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';







export default function WelcomeHome() {
  const navigation=useNavigation()

  return (
    <View style={styles.Viewstyle} >
       
      <View style={{marginTop:"auto"}}>
        <Text style={{color:"#ffff",fontSize:40,fontWeight:"bold",fontFamily:"koh",marginLeft:20,}} >Lorem ipsum dolor</Text>
      <Text style={{color:"#ffff",fontSize:20,fontWeight:"bold",fontFamily:"koh",marginLeft:20,}} >Lorem ipsum dolor sit amet consectetur.</Text>
      
     <Image source={require("../assets/images/Ellipse 2.png")} style={{position:"absolute",zIndex:-1, width:"80%" }}   /> 
      <Image source={require("../assets/images/Group 19.png")} style={{width:"90%",position:"relative",right:-35 }} />
      <TouchableOpacity
      onPress={()=>navigation.navigate("Home")}
          style={{
      
       backgroundColor: "#9E44E6",
      width:"50%"    , 
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        borderRadius:30,
      marginBottom:10
       }}
      >

          <Text style={{alignItems:"center",textAlign:"center",color:"#ffff",fontSize:20,fontWeight:"bold", }} >Book now</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
       style={{
      
       backgroundColor: "#9E44E6",
      width:"50%"    , 
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        borderRadius:30,
        marginBottom:10
       }}
      >
          <Text style={{alignItems:"center",textAlign:"center",color:"#ffff",fontSize:20,fontWeight:"bold", }} >Gallery</Text>
         
      </TouchableOpacity>
  
      
    </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
    Viewstyle:{
        backgroundColor:Colors.black,
        height:"100%",
        width:"auto"
        
    },
    
    
   
})
