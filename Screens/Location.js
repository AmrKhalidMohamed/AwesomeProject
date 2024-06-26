import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, ImageBackground, Linking, Platform } from 'react-native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Component/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

export default function Location() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const openMaps = (latitude, longitude) => {
    const url = Platform.select({
      ios: `https://maps.apple.com/?q=${latitude},${longitude}`,
      android: `https://maps.google.com/?q=${latitude},${longitude}`,
    });

    Linking.openURL(url);
  };

  return (
    <View style = {styles.viewStyle}>
      <TouchableOpacity onPress={()=>navigation.goBack()}
        style={{
        padding: '2.5%',
        borderRadius: 100,
        width: hP('5.5%'),
        marginHorizontal: '4%',
        marginTop: '10%',
        backgroundColor: Colors.main,
        alignItems:"center"} 
      }
      >
      <Image source={require("../assets/images/Arrow 1.png")} style = {{width:hP('3%'),height:hP('3%')}} />
      
      </TouchableOpacity>
      <Text style={styles.mainTitle}>{t('elmalaap')} 1</Text>
      <Text style={styles.subTitle}>{t('location1')}</Text>
      
      <TouchableOpacity style = {styles.card}
      onPress={() => openMaps(30.06162291222803, 31.34002381156385)}
      >
        
        <ImageBackground source={require('../assets/images/map.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >

          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >  
          
            <Text style={styles.cardTitle}>{t('openInMaps')}</Text>
            <Image 
            source={require('../assets/images/mapIcon.png')}
            style={{position: 'absolute',right: '5%'}}
            />
          
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.mainTitle}>{t('elmalaap')} 2</Text>
      <Text style={styles.subTitle}>{t('location2')}</Text>
      <TouchableOpacity 
      style = {styles.card}
      onPress={() => openMaps(30.06243420348924, 31.32874284220168)}
      >
        <ImageBackground source={require('../assets/images/map.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >  
          <Text style={styles.cardTitle}>{t('openInMaps')}</Text>
          <Image 
          source={require('../assets/images/mapIcon.png')}
          style={{position: 'absolute',right: '5%'}}
          />
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <Image source={require("../assets/images/Ellipse 2.png")} style={styles.backgroundImage}/>
    </View>
  )
}


const styles = StyleSheet.create({
  mainTitle: {
    alignSelf: 'flex-start',
    fontSize: hP('5%'),
    fontFamily: 'koh',
    marginTop:'15%',
    marginHorizontal: '5%',
    color: 'white',
  },
  title: {
    fontSize: 32,
    fontFamily: 'kohR',
    color: 'white',
  },
  subTitle: {
    fontSize: hP('2.5%'),
    fontFamily: 'kohR',
    marginHorizontal: '5%',
    marginVertical: '2%',
    color: 'white'
  },
  viewStyle: {
    flex: 1,
    backgroundColor: Colors.black
  },
  card: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 110,
    borderRadius: 12,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  cardImage: {
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
  },
  cardTitle: {
    position: 'absolute',
    left: '5%',
    fontFamily: 'interB',
    fontSize: 32,
    color: 'white',
  },
  gradient: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 12
  },
  backgroundImage: {
    position: "absolute",
    bottom: '5%',
    zIndex: -2,
    width: '65%',
  },
})
