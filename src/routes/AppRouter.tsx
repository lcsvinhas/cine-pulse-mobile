import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { cores } from '../styles/cores'
import Filmes from '../screens/Filmes'
import { Feather } from '@expo/vector-icons'
import SplashScreen from '../screens/SplashScreen'
import Login from '../screens/Login'
import Contato from '../screens/Contato'

const Tab = createBottomTabNavigator()

export default function AppRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: cores.header,
        tabBarInactiveBackgroundColor: cores.header,
        tabBarActiveTintColor: cores.cardFundo,
      }}>
      <Tab.Screen name='Filmes' component={Filmes} options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name='film' color={color} size={size} />
        }
      }} />
      <Tab.Screen name='Contato' component={Contato} options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name='message-circle' color={color} size={size} />
        }
      }} />
      <Tab.Screen name='Login' component={Login} options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name='log-in' color={color} size={size} />
        }
      }} />
    </Tab.Navigator>
  )
}