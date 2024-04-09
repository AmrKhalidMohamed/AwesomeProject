import { View, Text, FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React, { useMemo } from 'react'
import useFetch from '../hooks/useFetch'
import Colors from '../Component/Colors'
import { heightPercentageToDP as hP, widthPercentageToDP as wP} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';
import  axios  from 'axios';

export default function Bookings() {
  const navigation=useNavigation()
 
const { data, isLoading, error }=useFetch("bookings")



const handleDelete = async () => {
  try {
    const response = await axios('https://fbfb-45-242-16-109.ngrok-free.app/api/bookings/bookings_id', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
     
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete element');
    }

    
    Alert.alert('Success', 'Element deleted successfully');
  } catch (error) {
    console.log(error)
    Alert.alert('Error', error.message);
  }
};


  return (
    <View style={{ backgroundColor: Colors.black, height: hP("100%"), width: wP("100%"), marginTop: "auto", flex: 1 }}>
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
      <Text style={styles.title}>Bookings</Text>
       <FlatList
         data={data}
         renderItem={({item})=>(
          <TouchableOpacity  style={styles.liststyle}>
               <ScrollView  style={{padding:10}}>
                <Text  style={styles.textstyle}> Booking Date :  {item.booking_date}</Text>
                <Text  style={styles.textstyle}> Start Time :  {item.booking_date}</Text>
                <Text  style={styles.textstyle}> End Time :  {item.booking_date}</Text>
                 <TouchableOpacity 
                 onPress={handleDelete}
                 
                 style={{alignSelf:"center",padding:10, borderColor:"white",borderWidth:"1",width:wP(50),borderRadius:100,backgroundColor:"white" }}  >
                  <Text  style={{fontSize:hP(2),textAlign:"center"}}>Cancel Booking</Text>
                 </TouchableOpacity>
               </ScrollView>
          </TouchableOpacity>
         )}
       
       />


     <Image source={require("../assets/images/Ellipse 2.png")} style={styles.backgroundImage} />
      
       
    </View>
  )
}
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    bottom: '5%',
    zIndex: -2,
    width: '65%',
  },
  title: {
    color: "#ffff",
    fontWeight:"bold",
    fontSize: hP('5%'),
    fontFamily: "kohR",
    marginHorizontal: "5%",
    marginVertical: "4%",
    textAlign:"center"
  },
  liststyle:{
    marginTop:10,
    width:wP("90%"),
    alignSelf:"center",
    borderRadius:"15",
     height:hP(20),
     borderWidth:1.5,
     border:1,
     borderRightColor:"white",
     borderLeftColor:"white",
     borderBlockColor:"white"
  },
 textstyle:{
  fontWeight:"bold",
    fontSize: hP('2.5%'),
    fontFamily: "kohR",
    color:"white",
    paddingBottom:10
 }
})
