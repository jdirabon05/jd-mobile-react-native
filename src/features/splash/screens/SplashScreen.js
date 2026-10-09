import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { SplashAssets } from '../assets'; 


export default function SplashScreen({ navigation }) {
  const animationRef = useRef(null);
  const [isTimerDone, setIsTimerDone] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    // Navigate directly after exactly 4.5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Dashboard');
    }, 8000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigation]);

  // 2. Check both conditions before navigating to ensure smooth flow
  useEffect(() => {
    if (isTimerDone && isAnimationDone) {
      navigation.replace('Dashboard');
    }
  }, [isTimerDone, isAnimationDone, navigation]);

  const handleAnimationFinish = () => {
    setIsAnimationDone(true);
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={SplashAssets.lottie_cat_walking} 
        style={styles.animation}
        autoPlay
        loop={true} // Keep looping the walking cat while waiting for the timer
        onAnimationFinish={handleAnimationFinish}
        resizeMode="contain" // Ensures the cat retains its aspect ratio without stretching
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Match this to your animation's background color
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    width: 200,   
    height: 200,  
  },
});
