import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch'


export default function Location() {

  const { data, isLoading, error }=useFetch('rooms')
console.log(data)


  return (
    <View>
      <FlatList
      data={data}
      renderItem={({item})=>(
        <Text>{item.description}</Text>
      )}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}