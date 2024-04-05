import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import WelcomeHome from '../../Screens/WelcomeHome';
import Bookings from '../../Screens/Bookings';
import Location from '../../Screens/Location';
import InfoScreen from '../../Screens/InfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={InfoScreen} />
      <Tab.Screen name='Bookings' component={Bookings} />
      <Tab.Screen name='Location' component={Location} />
    </Tab.Navigator>
  );
}

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={WelcomeHome} />
      <Stack.Screen name='HomeTap' component={HomeTabNavigator} />
    </Stack.Navigator>
  );
}
