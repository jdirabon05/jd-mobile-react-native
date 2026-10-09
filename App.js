
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/features/splash/screens/SplashScreen.js';
import DashboardScreen from './src/features/dashboard/screens/DashboardScreen.js';
import TextScreen from './src/features/text/screens/TextScreen.js';


// export default function App() {
//   return (
//     <>
//       <SafeAreaView style={{ flex: 0, backgroundColor: '#2ecc71' }} />
      
//       {/* Main body safe area color */}
//       <SafeAreaView style={styles.mainContainer}>
//         <View style={styles.content}>
//           <Text>Content goes here</Text>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }r

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }} // Hides the top navigation header bar
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e74c3c',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
