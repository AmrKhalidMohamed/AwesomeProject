import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Rooms() {
    const {data,isLoading,error}=useFetch("")
  return (
    <View>
      <Text>Rooms</Text>
    </View>
  )
}