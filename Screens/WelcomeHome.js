import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import Colors from '../Component/Colors';

export default function WelcomeHome() {
  const navigation = useNavigation();

  // Load custom fonts
  const [loaded] = useFonts({
    koh: require('../assets/fonts/KohSantepheap-Bold.ttf'),
  });

  // Return early if fonts are not loaded
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.Viewstyle} >
       
      <View style={{marginTop:hP("4.5")}}>
        <View >
        <Text style={{color:"#ffff",fontSize:hP("4.5%"),fontWeight:"bold",fontFamily:"koh",marginLeft:"10%",}} >Lorem ipsum dolor</Text>
        <Text style={{color:"#ffff",fontSize:hP("2.5%"),fontWeight:"bold",fontFamily:"koh",marginLeft:"10%",}} >Lorem ipsum dolor sit amet consectetur.</Text>
        </View>

      
     <Image source={require("../assets/images/Ellipse 2.png")} style={{position:"absolute",zIndex:-1, width:"80%" }}   /> 
      <Image source={require("../assets/images/Group 19.png")} style={{width:"100%" }} />
      <TouchableOpacity
      onPress={()=>navigation.navigate("Home")}
          style={{
      
       backgroundColor: "#9E44E6",
      width:"50%"    , 
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        borderRadius:30,
      marginBottom:"1%"
       }}
      >

          <Text style={{alignItems:"center",textAlign:"center",color:"#ffff",fontSize:20,fontWeight:"bold",}} >Book now</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
       style={{
      
       backgroundColor: "#9E44E6",
      width:"50%"    , 
        alignItems:"center",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        borderRadius:30,
        marginBottom:10
       }}
      >
          <Text style={{alignItems:"center",textAlign:"center",color:"#ffff",fontSize:20,fontWeight:"bold", }} >Gallery</Text>
         
      </TouchableOpacity>
  
      
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'koh',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'koh',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '80%',
  },
  logo: {
    width: '90%',
    position: 'relative',
    right: -35,
  },
  button: {
    backgroundColor: "#9E44E6",
    width: "90%",
    alignSelf: 'center',
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
