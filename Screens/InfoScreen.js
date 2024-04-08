import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Colors from '../Component/Colors';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';



export default function InfoScreen() {

const navigation=useNavigation()

  return (
    <SafeAreaView  style={{backgroundColor:Colors.black,
      height:hp("100%"),
      width:wp("100%"),
      marginTop:"auto",
      flex:1
      }} >
             
             <TouchableOpacity
             style={{
              padding:hp("1"),
              borderRadius:100,
              width:hp("6"),
              marginLeft:hp("2"),
              marginTop:hp("2"),
             backgroundColor: "#9E44E6",
             alignItems:"center"
             
            }}
             >
             <Ionicons name="arrow-back" size={24} color="#ffff" 
             onPress={()=>navigation.goBack("")}
             />
             </TouchableOpacity>

           <ScrollView >
           <Text style={{color:"#ffff",fontSize:hp('3.5%'),fontWeight:"bold",fontFamily:"koh",marginLeft:"5%",marginBottom:"5%"}}>Lorem ipsum dolor sit amet consectetur.</Text>
              <TouchableOpacity
              onPress={()=>navigation.navigate("form")}
              >
                <Image  source={require('../assets/images/game.jpg')} style={{
                  height:hp("35%"),
                  width:wp("95%"),
                  marginLeft:hp("1"),
                  marginRight:hp("2"),
                  marginBottom:hp("3"),
                  zIndex:-1

                }} />
                <Text
                style={{color:"#ffff",fontSize:hp('3.5%'),fontWeight:"bold",fontFamily:"koh",marginLeft:"5%",marginBottom:"5%",
              position:"absolute",
              top:hp("20%")
              
              }}
                >El-Malaab 1</Text>
                <Text
                style={{color:"#ffff",fontSize:hp('3.5%'),fontWeight:"bold",fontFamily:"koh",marginLeft:"5%",marginBottom:"5%",
              position:"absolute",
              top:hp("25%")
              
              }}
                >10 Available Rooms</Text>
              </TouchableOpacity>
              <TouchableOpacity
            
              >
                <Image  source={require('../assets/images/game.jpg')} style={{
                  height:hp("35%"),
                  width:wp("95%"),
                  marginLeft:hp("1"),
                  marginRight:hp("2"),
                  
                  zIndex:-1

                }} />
                <Text   style={{color:"#ffff",fontSize:hp('3.5%'),fontWeight:"bold",fontFamily:"koh",marginLeft:"5%",marginBottom:"5%",
              position:"absolute",
              top:hp("20%")
              
              }}>
                  El-Malaab 2
                </Text>
                <Text   style={{color:"#ffff",fontSize:hp('3.5%'),fontWeight:"bold",fontFamily:"koh",marginLeft:"5%",marginBottom:"5%",
              position:"absolute",
              top:hp("25%")
              
              }}>
                  Comming Soon..!!!
                </Text>
              </TouchableOpacity>
           </ScrollView>
            
          
            
           
          
        
             
              <Image source={require("../assets/images/Ellipse 2.png")} style={{position:"absolute",height:"100%",zIndex:-1, width:"100%" }}   /> 
        
        
          
        
      
    </SafeAreaView>
  )
}