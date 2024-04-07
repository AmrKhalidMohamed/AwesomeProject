import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import { Ionicons, Entypo } from '@expo/vector-icons';
import WelcomeHome from '../../Screens/WelcomeHome'
import Bookings from '../../Screens/Bookings'
import Location from '../../Screens/Location'
import InfoScreen from '../../Screens/InfoScreen'
import firstForm from '../../Screens/FirstForm';
import secondForm from '../../Screens/SecondForm';
import Colors from '../Colors';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
   <Tab.Navigator
   screenOptions={{headerShown:false}}
   >
     <Tab.Screen  
   
     options={{
      tabBarIcon:({size,color})=>(
        <Entypo name="home" size={25} color = {Colors.main }/>
      ),
     }}
     name='Home' component={InfoScreen} />
        <Tab.Screen     name='location' component={Location}
           options={{
             tabBarIcon:({size,color})=>(
               <Ionicons name="location" size={24} color="#9E44E6" />
             )
            }}
        />
   <Tab.Screen     name='Book' component={Bookings} 
      options={{
        tabBarIcon:({size,color})=>(
          <Ionicons name="bookmark" size={24} color="#9E44E6" />
        )
       }}
   />
    
   </Tab.Navigator>
  ) 
  }


export default function HomeNavigation(props) {
  
  return (
  
  <Stack.Navigator
    screenOptions={{
      headerShown:false

    }}
    >
      <Stack.Screen 
       name='welcomeHome'  component={WelcomeHome}  />
      <Stack.Screen  name='Home'  component={HomeScreen}  />
      <Stack.Screen  name='firstForm'  component={firstForm}  />
      <Stack.Screen  name='secondForm'  component={secondForm}  />
    </Stack.Navigator>)
   }
      
  
