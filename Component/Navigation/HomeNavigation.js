import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';
import WelcomeHome from '../../Screens/WelcomeHome';
import Bookings from '../../Screens/Bookings';
import Location from '../../Screens/Location';
import InfoScreen from '../../Screens/InfoScreen';
import FirstForm from '../../Screens/FirstForm';
import SecondForm from '../../Screens/SecondForm';
import AvailableRooms from '../../Screens/AvailableRooms';
import Colors from '../Colors';
import { View } from 'react-native';
import RoomDetails from '../../Screens/RoomDetails';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#9E44E6',
        tabBarInactiveTintColor: Colors.black,
        tabBarStyle: {
          borderRadius: 25,
          position: 'absolute',
          bottom: 30,
          height: 50,
          width: '95%',
          left: '2.5%',
          right: '2.5%',
          elevation: 5,
          paddingBottom: 0,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={InfoScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View>
              <Entypo name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Location'
        component={Location}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Bookings'
        component={Bookings}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='WelcomeHome' component={WelcomeHome} />
      <Stack.Screen name='mainHome' component={HomeScreen} />
      <Stack.Screen name='FirstForm' component={FirstForm} />
      <Stack.Screen name='SecondForm' component={SecondForm} />
      <Stack.Screen name='Rooms' component={AvailableRooms} />
      <Stack.Screen name='RoomDetails' component={RoomDetails} />
    </Stack.Navigator>
  );``
}
