import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { heightPercentageToDP as hP} from 'react-native-responsive-screen'
import Colors from '../Component/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Map2() {
    const navigation = useNavigation();
    return (
      <View style={styles.container} >
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
        <MapView style={styles.map}  provider={PROVIDER_GOOGLE} 
          initialRegion={{
              latitude: 30.062403,
              longitude:   31.328762,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
        >
         
        <Marker
        coordinate={{
          latitude: 30.062403,
          longitude:31.328762
        }}
        
        />
        </MapView>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    map:{
     width:Dimensions.get("window") .width,
     height:Dimensions.get("window") .height,
    
    }
})