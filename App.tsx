import { NavigationContainer } from '@react-navigation/native'
import AppRouter from './src/routes/AppRouter'

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  )
}