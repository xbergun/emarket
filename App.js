import { StatusBar } from 'expo-status-bar';
import BottomTabBarNavigations from './src/navigations/BottomTabBarNavigations';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";
import { Provider } from 'react-redux'
import { store } from './src/store/store';

export default function App() {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <BottomTabBarNavigations />
          <StatusBar style="light" />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );

}
