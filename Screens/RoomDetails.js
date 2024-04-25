import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../Component/Colors';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import '../i18n'

const RoomDetails = ({ route }) => {
  const baseUrl = 'https://almalaab.fun';
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const {t, i18n} = useTranslation()
  const { roomId, combinedData, formData, customerId } = route.params;
  const { data: imageData, isLoading: imageIsLoading, error: imageError } = useFetch(`rooms/${roomId}/images`);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setSelectedIndex(viewableItems[0].index || 0);
    }
  };
  const [bookingData, setBookingData] = useState({
    customer_id: 'customer_id',
    room_id: 'room_id',
    booking_date: 'booking_date',
    start_time: 'start_time',
    end_time: 'end_time',
  });
  useEffect(() => {
    setBookingData({
      ...bookingData,
      customer_id: customerId, 
      room_id: roomId,
      booking_date: formData.formDate, 
      start_time: formData.formStartTime,
      end_time: formData.formEndTime
    });
  }, [customerId, roomId, formData]);

console.log(bookingData)
  const formSubmition = async () => {
    try{
      const response = await axios.post(`${baseUrl}/api/bookings`, bookingData);
      console.log('Response:', response.data);
      navigation.navigate('Home', {customerId})
    }catch(error){
      console.error('Error:', error);
    }
  }
  

  const [selectedRoomData, setSelectedRoomData] = useState([]);


  useEffect(() => {
    const filteredData = combinedData.filter(dataItem => dataItem.id === roomId);
    setSelectedRoomData(filteredData);
  }, [combinedData, roomId]);
  const otherRooms = combinedData.filter(room => room.id !== roomId)

  const renderItem = ({ item }) => {
    const displayDescription = i18n.language === 'ar' ? item.ArDescription : item.description;
    return (
        <View>
            <FlatList
                data={item.images}
                horizontal
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50,
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item: image }) => (
                    <Image
                        source={{ uri: `${baseUrl}/storage/app/${image.image_path}` }}
                        style={{ width: screenWidth, height: 233 }}
                    />
                )}
            />
            <Text style={styles.capacity}>{item.capacity} {t('person')}</Text>
            <View style={styles.dotContainer}>
                {imageData.map((_, index) => (
                    <View
                        key={index}
                        style={[styles.dot, index === selectedIndex ? styles.selectedDot : {}]}
                    />
                ))}
            </View>
            <Text style={styles.description}>{displayDescription}</Text>
            <View style={{ flexDirection: 'row', marginLeft: '3%', alignItems: 'center' }}>
                <Image source={require('../assets/images/money.png')} />
                <Text style={styles.price}> {item.price} {t('currency')} </Text>
            </View>
            <FlatList
                data={otherRooms}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoomDetails', { roomId: item.id, combinedData })}>
                            <Image
                                source={{ uri: `${baseUrl}/storage/app/${item.images[0].image_path}` }}
                                style={styles.image}
                            />
                            <View style={styles.cardText}>
                                <Text style={styles.cardColoredTitle}>{t('available')}</Text>
                                <Text style={styles.cardTitle}>{item.room_number}</Text>
                                <Text style={styles.cardSubTitle}>{t('upTo')} {item.capacity} {t('persons')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

  console.log(selectedRoomData)

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity onPress={() => navigation.goBack()}
        style={{
          padding: '2.5%',
          borderRadius: 100,
          width: hP('5.5%'),
          marginHorizontal: '4%',
          marginTop: '10%',
          backgroundColor: Colors.main,
          alignItems: "center"
        }}
      >
        <Image source={require("../assets/images/Arrow 1.png")} style={{ width: hP('3%'), height: hP('3%') }} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', position: 'absolute', top: '5%', alignSelf: 'center' }}>
        <Text style={styles.title}>Room {roomId}</Text>
        <Image style={{ position: 'relative' }} source={require('../assets/images/glowLine.png')} />
      </View>
      <FlatList
        data={selectedRoomData}
        style={{marginTop: '5%', height: '50%'}}
        renderItem = {renderItem}
      />
      <TouchableOpacity
      onPress={formSubmition}
      style={styles.button}
      >
      <Text
      style={styles.buttonText}
      >{t('bookButton')}</Text>
    </TouchableOpacity>
      <Image source={require("../assets/images/Ellipse 2.png")} style={styles.background}/>
    </View>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: Colors.black
  },
  title: {
    fontSize: 32,
    fontFamily: 'kohR',
    color: 'white',
  },
  dotContainer: {
      marginTop: '-5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(158, 68, 229, 0.4)',
    marginHorizontal: 5,
  },
  selectedDot: {
    backgroundColor: 'rgba(158, 68, 229, 0.8)',
  },
  background: {
      position: "absolute",
      bottom: '5%',
      zIndex: -2,
      width: '65%',
  },
  description: {
      justifyContent: 'flex-start',
      fontFamily: 'kohR',
      fontSize: 20,
      color: 'white',
      marginTop: '3%',
      width: '85%',
      marginLeft: '3%'
  },
  price: {
      fontFamily: 'interB',
      fontSize: 20,
      color: Colors.black
  },
  capacity: {
      fontFamily: 'interR',
      fontSize: 15,
      color: 'white',
      backgroundColor: Colors.black,
      paddingHorizontal: 9,
      marginLeft: '2%',
      borderRadius: 10,
      position: 'absolute',
      top: '2%',
      overflow: 'hidden',
  },
  cardContainer: {
      alignSelf: 'center',
      width: '90%',
    },
    card: {
      flex: 1,
      backgroundColor: '#1C1C1C',
      height: 123,
      borderRadius: 16,
      marginTop: 30,
      flexDirection: 'row',
    },
    image:{
      width: '45%',
      height: 90,
      borderRadius: 12,
      margin:'5%'
    },
    cardText: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'flex-start',
      justifyContent: 'center',
    },
    cardTitle: {
      fontSize: 24,
      fontFamily: 'kohR',
      color: 'white'
    },
    cardSubTitle: {
      fontSize: 14,
      fontFamily: 'interR',
      color: Colors.formStroke,
      alignSelf: 'flex-start'
    },
    cardColoredTitle: {
      fontSize: 12,
      fontFamily: 'kohR',
      color: 'white',
      backgroundColor: Colors.main,
      alignSelf: 'flex-start', 
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      overflow: 'hidden',
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
});
