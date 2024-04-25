import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import Colors from '../Component/Colors';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const navigation = useNavigation();
  const baseUrl = 'https://almalaab.fun';
  const screenWidth = Dimensions.get('window').width;
  const { data, isLoading, error } = useFetch('images');
  const [shuffledData, setShuffledData] = useState([]);
  const {t} = useTranslation()

  useEffect(() => {
    if (data && data.length > 0) {
      // Shuffle the data array
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setShuffledData(shuffled);
    }
  }, [data]);

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          padding: '2.5%',
          borderRadius: 100,
          width: hP('5.5%'),
          marginHorizontal: '4%',
          marginTop: '10%',
          backgroundColor: Colors.main,
          alignItems: 'center',
        }}
      >
        <Image source={require('../assets/images/Arrow 1.png')} style={{ width: hP('3%'), height: hP('3%') }} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', position: 'absolute', top: '5%', alignSelf: 'center' }}>
        <Text style={styles.title}>{t('Discover')}</Text>
        <Image style={{ position: 'relative' }} source={require('../assets/images/glowLine.png')} />
      </View>
      <FlatList
        style={{ marginTop: '5%' }}
        data={shuffledData}
        numColumns={2}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: `${baseUrl}/storage/app/${item.image_path}` }}
              style={{ width: screenWidth / 2, height: screenWidth / 2, marginVertical: 2.5, marginRight: 5 }}
            />
          </View>
        )}
      />
      <Image source={require('../assets/images/Ellipse 2.png')} style={styles.backgroundImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 32,
    fontFamily: 'kohR',
    color: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: '5%',
    zIndex: -2,
    width: '65%',
  },
});

export default Gallery;
