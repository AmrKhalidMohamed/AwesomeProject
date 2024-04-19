import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import Colors from '../Component/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useBranch } from '../Context/BranchContext';

const AvailableRoomsPage = () => {
  const {t} = useTranslation()
  const navigation=useNavigation()
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = 'https://dffd-102-43-145-164.ngrok-free.app';
  const route = useRoute();
  const { formData, customerId } = route.params;
  const { data: imageData, isLoading: imageIsLoading, error: imageError } = useFetch('images');
  
  const { branch } = useBranch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 1: Query Bookings Table
        const bookingsResponse = await axios.get(`${baseUrl}/api/bookings?booking_date[eq]=${formData.formDate}`);
        const bookings = bookingsResponse.data.data;
        // Step 2: Query Rooms Table
        const roomsResponse = await axios.get(`${baseUrl}/api/rooms`);
        const rooms = roomsResponse.data.data;
        // Step 3: Filter Available Rooms
        const availableRooms = rooms.filter(room => {
          // Check if there are any bookings that overlap with the specified time range
          const overlappingBookings = bookings.filter(booking => {
            return (
              booking.room_id === room.id &&
              !(formData.formEndTime <= booking.start_time || formData.formStartTime >= booking.end_time)
              //&& branch != room.branch
              // console.log(formData.formStartTime == booking.end_time)
            );
          });
          // Check if the room can accommodate the specified number of people
          const isRoomAvailable = room.capacity >= formData.numberOfPeople && branch == room.branch;
          // Return true if there are no overlapping bookings and the room can accommodate the specified number of people
          return overlappingBookings.length === 0 && isRoomAvailable;
        });
        // Step 4: Set Available Rooms
        setAvailableRooms(availableRooms);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };
    fetchData();
  }, [formData]);

  const combinedData = useMemo(() => {
    if (!availableRooms || !imageData) return [];

    // Create a mapping of room IDs to their images
    const imageMap = imageData.reduce((acc, image) => {
      const roomId = image.room_id;
      if (!acc[roomId]) {
        acc[roomId] = [];
      }
      acc[roomId].push(image);
      return acc;
    }, {});

    // Combine room data with images
    return availableRooms.map(room => ({
      ...room,
      images: imageMap[room.id] || [],
    }));
  }, [availableRooms, imageData]);

  if (isLoading || imageIsLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (imageError) {
    return (
      <View>
        <Text>Error fetching images</Text>
      </View>
    );
  }
  return (
    <View style={styles.viewStyle}>
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
      <Text  style={styles.title}>{t('availableRooms')}</Text>
      <Image style={{position: 'relative',}} source={require('../assets/images/glowLine.png')}/>
      </View>
  <FlatList
    data={combinedData}
    renderItem={({ item }) => (
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RoomDetails', { roomId: item.id, combinedData, formData, customerId})}>
        <Image
          source={{ uri: `${baseUrl}/storage/${item.images[0].image_path.substring(7)}` }}
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
  <Image source={require("../assets/images/Ellipse 2.png")} style={styles.background}   />
</View>
  );
};
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
  background: {
    position: "absolute",
    bottom: '5%',
    zIndex: -2,
    width: '65%',
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
})


export default AvailableRoomsPage;
