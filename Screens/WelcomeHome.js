import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import Colors from '../Component/Colors';



  


export default function WelcomeHome() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Load custom fonts
  const [loaded] = useFonts({
    koh: require('../assets/fonts/KohSantepheap-Bold.ttf'),
    kohR: require('../assets/fonts/KohSantepheap-Regular.ttf'),
  });

  // Return early if fonts are not loaded
  if (!loaded) {
    return null;
  }

return (
  <View style={styles.viewStyle} >
     <TouchableOpacity onPress={toggleLanguage} style={styles.languageSwitcher}>
      <Text style={styles.languageText}>
        {i18n.language === 'en' ? 'Ar' : 'En'}
      </Text>
    </TouchableOpacity>
      
    <View style={{marginTop:hP("4.5")}}>
      <View >
        <Text style={styles.title} >Lorem ipsum dolor</Text>
        <Text style={styles.subtitle} >Lorem ipsum dolor sit amet consectetur.</Text>
      </View>

      <Image source={require("../assets/images/Ellipse 2.png")} style={styles.backgroundImage}   /> 
    </View>
      <View style = {styles.logo}>
        <Image source={require("../assets/images/Group 19.png")}/>
      </View>
      <View style = {styles.buttonsView}>
        <TouchableOpacity onPress={()=>navigation.navigate("mainHome")} style={styles.button1}>
            <Text style={[styles.buttonText, {color: 'white'}]} >{t('bookNowButton')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("SecondForm")}>
            <Text style={[styles.buttonText, { color: Colors.main }]} >{t('galleryButton')}</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.black,
  },
  title: {
    color: '#ffffff',
    fontSize: hP('5%'),
    fontFamily: 'koh',
    marginTop:'15%',
    marginHorizontal: '5%',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: hP('2.5%'),
    fontFamily: 'kohR',
    marginHorizontal: '5%',
  },
  backgroundImage: {
    position: "absolute",
    zIndex: -1,
    width: '65%',
  },
  logo: {
    width: '90%',
    position: 'absolute',
    right: 0,
    bottom: '7%'
  },

  buttonsView: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: Colors.main,
    width: "90%",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 9,
    elevation: 3,
  },

  button2: {
    backgroundColor: "white",
    width: "90%",
    alignItems: "center",
    borderRadius: 25,
  },

  buttonText: {
    fontSize: hP('4.5%'),
    padding: '.5%',
    fontFamily: 'interB',
  },
  languageSwitcher: {
    backgroundColor: Colors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    height: 55,
    width: 55,
    position: 'absolute',
    top: '5%',
    right: '5%'
  },
  languageText: {
    fontSize: 30,
    fontFamily: 'interR',
    color: 'white'
  },
});
