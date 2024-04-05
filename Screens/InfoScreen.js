import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function InfoScreen({props}) {
    const navigation=useNavigation()
    const [rooms,setRooms]=useState([])
    
    const getRoomsAndCustomers = async () => {
      const baseUrl = 'https://7e5f-154-178-181-57.ngrok-free.app';
    
      try {
        // Fetch rooms data
        const roomsResponse = await fetch(`${baseUrl}/api/rooms`);
        if (!roomsResponse.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const roomsData = await roomsResponse.json();
        console.log('Rooms:', roomsData);
    
        // Fetch customers data
        const customersResponse = await fetch(`${baseUrl}/api/customers`);
        if (!customersResponse.ok) {
          throw new Error('Failed to fetch customers');
        }
        const customersData = await customersResponse.json();
        console.log('Customers:', customersData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
    
    useEffect(() => {
      // Call the function to fetch data when component mounts
      getRoomsAndCustomers();
    }, []);
    
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={()=>navigation.goBack("")}
            >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text>InfoScreen</Text>
        </SafeAreaView>
    );
}
