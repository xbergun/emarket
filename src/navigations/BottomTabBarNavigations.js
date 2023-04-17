import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_BAR_ROUTES } from './constant';
import { BottomTabBarRoutes } from '../routes/BottomTabBarRoutes';
import { StyleSheet } from 'react-native';
import { getBottomTabBarScreenOptions } from './screenOptions/BottomTabBarScreenOptions';

const Tab = createBottomTabNavigator();

const BottomTabBarNavigations = () => {
    return (
        <Tab.Navigator
            initialRouteName={BOTTOM_TAB_BAR_ROUTES.HomeStack}
            screenOptions={({ route }) => getBottomTabBarScreenOptions(route)}
        >

            {
                BottomTabBarRoutes.map((route, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={route.name}
                            component={route.component}
                            options={route.options}
                        />
                    );
                }
                )
            }

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    header : {
        backgroundColor: 'gray',
    },
});

export default BottomTabBarNavigations;