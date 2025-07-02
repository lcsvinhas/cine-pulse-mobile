import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
import Animated, { BounceOutUp } from 'react-native-reanimated'

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('AppRouter' as never);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={BounceOutUp.delay(500)}
        source={require('../../../assets/LOGO PULSE SEM FUNDO.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}