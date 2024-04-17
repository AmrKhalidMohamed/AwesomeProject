import { Image, View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Component/Colors'
import { LinearGradient } from 'expo-linear-gradient';



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
      <TouchableOpacity style = {styles.card}>
        <ImageBackground source={require('../assets/images/map.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >  
          <Text style={styles.cardTitle}>Open in maps       <Image 
          source={require('../assets/images/mapIcon.png')}
          /></Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.mainTitle}>El Malaab 2</Text>
      <Text style={styles.subTitle}>Lorem ipsum dolor sit amet consectetur.</Text>
      <TouchableOpacity style = {styles.card}>
        <ImageBackground source={require('../assets/images/map.jpg')} style={styles.cardImage}
          imageStyle={{ borderRadius: 12}}
        >
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(158, 68, 229, .5)']}
            style={styles.gradient}
          >  
          <Text style={styles.cardTitle}>Open in maps       <Image 
          source={require('../assets/images/mapIcon.png')}
          /></Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  mainTitle: {
    fontSize: hP('5%'),
    fontFamily: 'koh',
    marginTop:'15%',
    marginHorizontal: '5%',
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
    fontFamily: 'interB',
    fontSize: 32,
    color: 'white',
    marginLeft: '5%',
  },
  gradient: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 12
  }
})
