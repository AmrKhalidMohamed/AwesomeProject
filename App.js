import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './Component/Navigation/HomeNavigation';
import { CustomerProvider } from './Context/CustomerContext';
import { BranchProvider } from './Context/BranchContext';
import './i18n'



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'koh': require('./assets/fonts/KohSantepheap-Bold.ttf'),
    'kohR': require('./assets/fonts/KohSantepheap-Regular.ttf'),
    'interB': require('./assets/fonts/Inter-Bold.ttf'),
    'interR': require('./assets/fonts/Inter-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <CustomerProvider>
      <BranchProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
          <NavigationContainer>
           <HomeNavigation/>
          </NavigationContainer>
      </View>
      </BranchProvider>
    </CustomerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
