import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import React from 'react';
import useFetch from '../hooks/useFetch';
import Colors from '../Component/Colors';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useCustomer } from '../Context/CustomerContext';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

export default function Bookings() {
  const navigation = useNavigation();

  const { data, isLoading, error, refetch } = useFetch("bookings");

  const { customerId } = useCustomer();

  const {t} = useTranslation()
  
  const handleDelete = async (bookingId) => {
    try {
      const response = await axios.delete(`https://dffd-102-43-145-164.ngrok-free.app/api/bookings/${bookingId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        Alert.alert('Success', 'Element deleted successfully');
      } else {
        throw new Error('Failed to delete element');
      }

    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a delay for fetching data
  }, []);
  
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

      <View style={{alignItems: 'center', position:'absolute', top:'5%',alignSelf:'center'}}>
      <Text  style={styles.title}>{t('yourBookings')}</Text>
      <Image style={{position: 'relative',}} source={require('../assets/images/glowLine.png')}/>
      </View>
       <FlatList
       data={data.filter(item => item.customer_id === customerId)}
       ListEmptyComponent={() => (
        <View style={styles.emptyList}>
          <Text style={styles.emptyText}>{t('noBookings')}</Text>
        </View>
      )}
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[Colors.main]} // Customize the loading indicator color
          progressBackgroundColor={Colors.black} // Customize the background color of the loading indicator
        />
      }
       renderItem={({ item }) => (
        <View>
          <View style = {styles.card}>
          <LinearGradient
            // Background Linear Gradient
            colors={['transparent','transparent', 'rgba(158, 68, 229, .3)']}
            style={styles.gradient}
          >  
          <Text style={styles.textstyle}>{t('date')}:  <Text style= {styles.textData}>({item.booking_date})</Text></Text>
          <Text style={styles.textstyle}>{t('startTime')}:  <Text style= {styles.textData}>({item.start_time})</Text></Text>
          <Text style={styles.textstyle}>{t('endTime')}:  <Text style= {styles.textData}>({item.end_time})</Text></Text>
          <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={styles.button}
          >
            <Text
            style={styles.buttonText}
            >{t('cancelBooking')}</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
        </View>
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
    fontSize: 32,
    fontFamily: 'kohR',
    color: 'white',
  },
  card: {
    justifyContent: 'center',
    width: '90%',
    height: 200,
    marginTop: '10%',
    borderRadius: 12,
    backgroundColor: '#1C1C1C',
    alignSelf: 'center'
  },
  gradient: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 12
  },
 textstyle:{
    alignSelf: 'flex-start',
    fontSize: hP('2.5%'),
    fontFamily: "interB",
    color: 'white',
    margin:5,
    marginLeft:20
 },
 emptyList: {
  flex: 1,
  justifyContent: 'center',
  alignSelf: 'center',
  marginTop: '20%'
  },
  emptyText: {
    fontSize: hP('3%'),
    color: 'white',
    fontFamily: 'interR',
  },
  button: {
    backgroundColor: Colors.main,
    alignItems: "center",
    alignSelf: 'center',
    borderRadius: 25,
    marginBottom: 9,
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: hP('3.5%'),
    padding: '.5%',
    paddingHorizontal: '5%',
    fontFamily: 'interB',
    color: 'white'
  },
})
