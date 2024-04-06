import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Component/Colors'


export default function Location() {
  const navigation=useNavigation()

  return (
    <View style = {styles.viewStyle}>
      <TouchableOpacity onPress={()=>navigation.navigate("welcomeHome")}
        style={{
        padding: '2.5%',
        borderRadius: 100,
        width: hP('5.5%'),
        marginHorizontal: '4%',
        marginTop: '10%',
        backgroundColor: Colors.main,
        alignItems:"center"
        }}
      >
      <Image source={require("../assets/images/Arrow 1.png")} style = {{width:hP('3%'),height:hP('3%')}} />
      </TouchableOpacity>
      <Text style={styles.mainTitle}>El Malaab 1</Text>
      <Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  mainTitle: {
    fontSize: hP('5%'),
    fontFamily: 'koh',
    marginTop:'25%',
    marginHorizontal: '5%',
    color: 'white',
  },
  subTitle: {
    fontSize: hP('2.5%'),
    fontFamily: 'kohR',
    marginHorizontal: '5%',
    color: 'white'
  },
  viewStyle: {
    flex: 1,
    backgroundColor: Colors.black
  }
})
