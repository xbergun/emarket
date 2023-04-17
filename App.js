import { StatusBar } from 'expo-status-bar';
import BottomTabBarNavigations from './src/navigations/BottomTabBarNavigations';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomTabBarNavigations />
        <StatusBar style="light" />
      </NavigationContainer>
    </NativeBaseProvider>
  );

}
