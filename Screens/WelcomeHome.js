import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import Colors from '../Component/Colors';

export default function WelcomeHome() {
  const navigation = useNavigation();

  // Load custom fonts
  const [loaded] = useFonts({
    koh: require('../assets/fonts/KohSantepheap-Bold.ttf'),
  });

  // Return early if fonts are not loaded
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lorem ipsum dolor</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur.</Text>
        <Image source={require("../assets/images/Ellipse 2.png")} style={styles.backgroundImage} />
        <Image source={require("../assets/images/Group 19.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate("HomeTap")} style={styles.button}>
          <Text style={styles.buttonText}>Book now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'koh',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'koh',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    width: '80%',
  },
  logo: {
    width: '90%',
    position: 'relative',
    right: -35,
  },
  button: {
    backgroundColor: "#9E44E6",
    width: "90%",
    alignSelf: 'center',
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
