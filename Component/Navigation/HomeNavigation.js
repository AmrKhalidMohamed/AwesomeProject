import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 



import WelcomeHome from '../../Screens/WelcomeHome'


import Bookings from '../../Screens/Bookings'
import Location from '../../Screens/Location'

import InfoScreen from '../../Screens/InfoScreen'



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
   
     
     name='Home' component={InfoScreen} />
   <Tab.Screen     name='Book' component={Bookings} />
   <Tab.Screen     name='location' component={Location} />
    
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
    </Stack.Navigator>)
   }
      
  
