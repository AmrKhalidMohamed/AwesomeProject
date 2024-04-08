import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';
import Colors from '../Component/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function InfoScreen() {
  const navigation = useNavigation();

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

      <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur.</Text>
      <ScrollView>
        <TouchableOpacity style = {styles.card} onPress={() => navigation.navigate("FirstForm")}>
        <ImageBackground source={require('../assets/images/card1.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >
          <Image source={require('../assets/images/dots.png')} style={{position: 'absolute',right:'5%',bottom:'35%'}}/>
          <Text style={styles.cardTitle}>El Malaap 1</Text>
          <Text style={styles.cardSubTitle}>10 available rooms</Text>
          </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}>
        <ImageBackground source={require('../assets/images/card2.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >
          <Image source={require('../assets/images/dots.png')} style={{position: 'absolute',right:'5%',bottom:'35%'}}/>
          <Text style={styles.cardTitle}>El Malaap 2</Text>
          <Text style={styles.cardSubTitle}>Coming soon</Text>
          </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
      </ScrollView>

      <Image source={require("../assets/images/Ellipse 2.png")} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#ffff",
    fontSize: hP('3.5%'),
    fontFamily: "kohR",
    marginHorizontal: "5%",
    marginVertical: "4%"
  },
  card: {
    width: '90%',
    height: 326,
    borderRadius: 12,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  cardImage: {
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontFamily: 'interB',
    fontSize: 32,
    color: 'white',
    position: 'absolute',
    bottom: '40%',
    marginLeft: '5%',
  },
  gradient: {
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 12
  },
  cardSubTitle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'interR',
    position: 'absolute',
    bottom: '25%',
    marginLeft: '5%',
  },
  backgroundImage: {
    position: "absolute",
    bottom: '5%',
    zIndex: -2,
    width: '65%',
  }
});
