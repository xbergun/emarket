import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_TAB_BAR_ROUTES } from './constant';
import { BottomTabBarRoutes } from '../routes/BottomTabBarRoutes';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabBarNavigations = () => {
    return (
        <Tab.Navigator
            initialRouteName={BOTTOM_TAB_BAR_ROUTES.HomeStack}
            screenOptions={{
                tabBarShowLabel: false,
                headerTitleAlign: 'left',
                headerTitle: 'E-Market',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    fontSize: 24,
                },
                headerStyle:{
                    backgroundColor: '#2A59FE',
                }
            }}
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