import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import WelcomeHome from '../../Screens/WelcomeHome'


import Bookings from '../../Screens/Bookings'
import Location from '../../Screens/Location'

import InfoScreen from '../../Screens/InfoScreen'
import Rooms from '../../Screens/Rooms'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
   <Tab.Navigator 
  
   screenOptions={{
    
    headerShown:false
    
   }}

   >
     <Tab.Screen  
   
     options={{
      tabBarIcon:({size,color})=>(
        <Entypo name="home" size={25} color="#9E44E6" />
      )
     }}
     name='Home' component={InfoScreen} />
   <Tab.Screen     name='Book' component={Bookings} 
      options={{
        tabBarIcon:({size,color})=>(
          <Ionicons name="calendar" size={24} color="#9E44E6" />
        )
       }}
   />
   <Tab.Screen     name='location' component={Location}
      options={{
        tabBarIcon:({size,color})=>(
          <Entypo name="location-pin" size={24} color="#9E44E6" />
        )
       }}
   />
    
   </Tab.Navigator>
  ) 
  }

export default function HomeNavigation() {
  return (
  
  <Stack.Navigator
    screenOptions={{
      headerShown:false

    }}
    >
      <Stack.Screen 
      
       name='home'  component={WelcomeHome}  />
      <Stack.Screen  name='Home'  component={HomeScreen}  />
      <Stack.Screen  name='room'  component={Rooms}  />
    </Stack.Navigator>)
   }
      
  
