import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackRoutes } from '../routes/homeStackRoutes';
import { getHomeStackScreenOptions } from './screenOptions/HomeStackScreenOptions';
import CustomIcon from '../components/icon/CustomIcon';

const Stack = createNativeStackNavigator();


const HomeStackNavigations = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) =>  getHomeStackScreenOptions(route)}
        >
            {
                HomeStackRoutes.map((route, index) => {
                    return (
                        <Stack.Screen
                            key={index}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        />
                    );
                }
                )
            }
        </Stack.Navigator>
    );
}

export default HomeStackNavigations;