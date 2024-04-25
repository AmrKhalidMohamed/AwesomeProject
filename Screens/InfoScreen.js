import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';
import Colors from '../Component/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useCustomer } from '../Context/CustomerContext';
import { useTranslation } from 'react-i18next';

export default function InfoScreen() {
  const navigation = useNavigation();
  const route = useRoute()
  const { customerId } = useCustomer();
  const { t } = useTranslation();

  console.log(customerId)
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

      <Text style={styles.title}>{t('homeText')}</Text>
      <ScrollView style={{ marginBottom: hP('10%') }}>
        <TouchableOpacity style = {styles.card}
        onPress={() => navigation.navigate('FirstForm', 1)}
        >
        <ImageBackground source={require('../assets/images/card1.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >
          <Image source={require('../assets/images/dots.png')} style={{position: 'absolute',right:'5%',bottom:'35%'}}/>
          <Text style={styles.cardTitle}>{t('elmalaap')} 1</Text>
          <Text style={styles.cardSubTitle}>5 {t('availableRooms')}</Text>
          </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.card}
          onPress={() => navigation.navigate('FirstForm', 2)}
        >
        <ImageBackground source={require('../assets/images/card2.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >
          <Image source={require('../assets/images/dots.png')} style={{position: 'absolute',right:'5%',bottom:'35%'}}/>
          <Text style={styles.cardTitle}>{t('elmalaap')} 2</Text>
          <Text style={styles.cardSubTitle}>11 {t('availableRooms')}</Text>
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
    fontSize: hP('3%'),
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
