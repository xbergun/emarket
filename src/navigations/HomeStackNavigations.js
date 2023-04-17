import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackRoutes } from '../routes/homeStackRoutes';

const Stack = createNativeStackNavigator();


const HomeStackNavigations = () => {
    return (
        <Stack.Navigator>
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