import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Pressable, Platform} from 'react-native'
import React, { useState } from 'react'
import Colors from '../Component/Colors'
import KeyboardDismiss from '../Component/keyboardDismiss'
import { heightPercentageToDP as hP, widthPercentageToDP as wP,} from 'react-native-responsive-screen'
import axios from "axios"
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Form() {
  const [date, setDate] = useState(new Date())
  const [formDate, setFormDate] = useState("Date")
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [formStartTime, setFormStartTime] = useState("Time")
  const [formEndTime, setFormEndTime] = useState("Time")
  const [timeFormNumber, setTimeFormNumber] = useState(1)
  
  const togglePicker = ()=>{
    setShow (!show)
  }
  const showMode = (formMode, timeFormNumber) => {
    setMode(formMode)
    if (mode == 'time'){
      setTimeFormNumber(timeFormNumber)
    }
    togglePicker()
  }
  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        togglePicker();
        if (mode === 'time') {
          if (timeFormNumber == 2) {
            setEndTime(currentDate);
            setFormEndTime(formatTime(currentDate));
          } else {
            setStartTime(currentDate);
            setFormStartTime(formatTime(currentDate));
          }
        }else {
          setFormDate(formatDate(currentDate));
        }
      }
    } else {
      togglePicker();
    }
  };
  const confirmIos = () => {
    if (mode === 'time') {
      if (timeFormNumber == 2) {
        setFormEndTime(formatTime(date));
        setEndTime(date);
      } else {
        setFormStartTime(formatTime(date));
        setStartTime(date);
      }
    }else {
      setFormDate(formatDate(date))
      togglePicker()
    } 
  }
  const formatDate = (rawDate) => {
    let date = new Date(rawDate)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    month = month < 10 ? `0${month}` :month
    day = day < 10 ? `0${day}` :day

    return `${year}-${month}-${day}`
  }
  const formatTime = (rawDate) => {
    let date = new Date(rawDate)
    let hours = date.getHours()
    let minutes = date.getMinutes()

    hours = hours < 10 ? `0${hours}` :hours
    minutes = minutes < 10 ? `0${minutes}` :minutes

    return `${hours}:${minutes}`
  }
  
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
    // Handle success
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  } finally{
    navigation.navigate('secondForm')
  }
  };


  
return (
<KeyboardDismiss>
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
      {show && Platform.OS === 'android' &&(<View style= {styles.pickerContainer}>
          <DateTimePicker
            mode = {mode}
            display = 'spinner'
            value = {date}
            onChange= {onChange}
          />
        </View>)}
        <Text style={styles.formTitle}>Date</Text>
        <Pressable 
        onPress= {() => showMode('date')}
        >
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, date: text })}
          value= {formDate}
          fontSize = {25}
          fontFamily = 'interR'
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
          editable = {false}
          onPressIn={() => showMode('date')}
        />
        </Pressable>
        <Text style={styles.formTitle}>Start time</Text>
        <Pressable 
        onPress= {() => showMode('time',1)}
        >
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, start_time: text })}
          value= {formStartTime}
          fontSize = {25}
          fontFamily = 'interR'
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
          editable = {false}
          onPressIn={() => showMode('time',1)}
        />
        </Pressable>
        <Text style={styles.formTitle}>End time</Text>
        <Pressable 
        onPress= {() => showMode('time',2)}
        >
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, endTime: text })}
          value= {formEndTime}
          fontSize = {25}
          fontFamily = 'interR'
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
          editable = {false}
          onPressIn={() => showMode('time',2)}
        />
        </Pressable>
        <Text style={styles.formTitle}>Number of people</Text>
        <KeyboardDismiss>
        <TextInput
          style = {styles.form}
          onChangeText={(text) => setFormData({ ...formData, phone_number: text })}
          keyboardType="numeric"
          fontSize = {25}
          fontFamily = 'interR'
          paddingHorizontal={'5%'}
          selectionColor= {Colors.main}
        />
        </KeyboardDismiss>
      </View>

  </View>
  <TouchableOpacity
    style={styles.button}
    // onPress={handleSubmit}
    >
      <Text
      style={styles.buttonText}
      >Next</Text>
    </TouchableOpacity>  
    
    {show && Platform.OS === 'ios' &&(<View style= {styles.pickerContainer}>
      <DateTimePicker
        mode = {mode}
        display = 'spinner'
        value = {date}
        onChange= {onChange}
        themeVariant = {'dark'}
        />
      <TouchableOpacity>
            <Text onPress={togglePicker} style={{fontSize: 16,color: 'white'}}>cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: "3%"}}>
            <Text onPress={confirmIos} style={{fontSize: 16,color: Colors.main}}>Submit</Text>
        </TouchableOpacity>
    </View>)}
  <Image source={require("../assets/images/Ellipse 2.png")} style={styles.background}   />     
</View>
</KeyboardDismiss>
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
    color: 'white'
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
  },
  datePicker: {
    
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: Colors.black,
    borderRadius: 12,
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    paddingBottom: '5%'
  }

})
