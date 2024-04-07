import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Component/Colors'
import { heightPercentageToDP as hP, widthPercentageToDP as wP,} from 'react-native-responsive-screen'
import axios from "axios"
import { useNavigation } from '@react-navigation/native';

export default function Form() {
  const navigation=useNavigation()

  const [formData, setFormData] = useState({
    // Initialize state for form data
    name: 'name',
    phone_number: 'phone_number',
  });

  const baseUrl = 'https://7e5f-154-178-181-57.ngrok-free.app';

  const handleSubmit = async () => {
  try{
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!formData.phone_number.trim()) {
      alert('Please enter your phone number.');
      return;
    }

    if (!/^\d+$/.test(formData.phone_number.trim())) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (formData.phone_number.trim().length < 10 || formData.phone_number.trim().length > 12) {
      alert('Please enter a valid number.');
      return;
    }

    // All validations passed, submit the form
    const response = await axios.post(`${baseUrl}/api/customers`, formData);
    console.log('Response:', response.data);
    navigation.navigate('secondForm')
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  } finally{
    
  }
  };


  
return (
<View
    style={{backgroundColor:Colors.black,
    height:hP("100%"),
    width:wP("100%"),
    marginTop:"auto",
    flex:1
    }}
  >
    
  <View>
    <TouchableOpacity onPress={()=>navigation.goBack()}
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

      <View style={{alignItems: 'center'}}>
      <Text  style={styles.title}>El Malaap 1</Text>
      <Image style={{position: 'relative',}} source={require('../assets/images/glowLine.png')}/>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Name</Text>
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          fontSize = {25}
          fontFamily = "koh"
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
        />
        <Text style={styles.formTitle}>Phone number</Text>
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, phone_number: text })}
          keyboardType="numeric"
          fontSize = {25}
          fontFamily = "koh"
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
        />
      </View>

  </View>
      
    <TouchableOpacity
    style={styles.button}
    onPress={handleSubmit}
    >
      <Text
      style={styles.buttonText}
      >Next</Text>
    </TouchableOpacity>

  <Image source={require("../assets/images/Ellipse 2.png")} style={styles.background}   /> 
        
        
          
</View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: hP('5%'),
    fontFamily: 'koh',
    marginTop:'10%',
    marginHorizontal: '5%',
    color: 'white',
  },
  form: {
    width: '90%',
    height: 60,
    backgroundColor: Colors.black,
    borderRadius: 12, 
    borderWidth: 3,
    borderColor: Colors.formStroke,
    alignSelf: 'center',
    marginBottom: '5%',
    color: 'white',
  },
  formContainer: {
    alignContent: 'center',
    marginTop: '5%'
  },
  formTitle:{
    marginLeft: '7%',
    color: 'white',
    fontFamily: 'kohR',
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.main,
    width: "90%",
    alignItems: "center",
    alignSelf: 'center',
    position: 'absolute',
    bottom: '2%',
    borderRadius: 25,
    marginBottom: 9,
    elevation: 3,
  },
  buttonText: {
    fontSize: hP('4.5%'),
    padding: '.5%',
    fontFamily: 'interB',
    color: 'white'
  },
  background: {
    position: "absolute",
    bottom: '5%',
    zIndex: -2,
    width: '65%',
  }

})
