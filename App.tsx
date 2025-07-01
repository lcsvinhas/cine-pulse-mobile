import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import AppRouter from './src/routes/AppRouter';
import SplashScreen from './src/screens/SplashScreen';
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Modal, Text, StyleSheet, View } from 'react-native';
import Filmes from './src/screens/Filmes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isConnected === false}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Sem conexão com a internet
            </Text>
          </View>
        </View>
      </Modal>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="AppRouter" component={AppRouter} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'red',
    padding: 16,
    marginBottom: 50,
    borderRadius: 8,
  },
});
