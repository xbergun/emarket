import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabBarNavigations from './src/navigations/BottomTabBarNavigations';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NavigationContainer>
      <BottomTabBarNavigations />
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
