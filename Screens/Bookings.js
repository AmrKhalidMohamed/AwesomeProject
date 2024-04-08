import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import useFetch from '../hooks/useFetch'

export default function Bookings() {
  const baseUrl = 'https://7e5f-154-178-181-57.ngrok-free.app'; 

  const { data: roomData, isLoading: roomIsLoading, error: roomError } = useFetch('rooms')
  const { data: imageData, isLoading: imageIsLoading, error: imageError } = useFetch('images')

  // Combine room data with its corresponding images
  const combinedData = useMemo(() => {
    if (!roomData || !imageData) return [];

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
    return roomData.map(room => ({
      ...room,
      images: imageMap[room.id] || [],
    }));
  }, [roomData, imageData]);

  return (
    <View>
      <Text>Bookings</Text>
      <FlatList
        data={combinedData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.room_number}</Text>
            <FlatList
              data={item.images}
              renderItem={({ item: image }) => (
                <Image
                  source={{ uri: `${baseUrl}/storage/${image.image_path.substring(7)}` }}
                  style={{ width: 100, height: 100 }}
                />
              )}
              horizontal
            />
          </View>
        )}
      />
    </View>
  )
}
