import BasketCount from "../helpers/BasketCount";
import HomeStackNavigations from "../navigations/HomeStackNavigations";
import { BOTTOM_TAB_BAR_ROUTES } from "../navigations/constant";
import Basket from "../screens/basket/Basket";
import FavoriteScreen from "../screens/favorite/FavoriteScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

export const BottomTabBarRoutes = [
    {
        name: BOTTOM_TAB_BAR_ROUTES.HomeStack,
        component: HomeStackNavigations,
        options : {
            headerShown : false,
        }
    },
    {
        name: BOTTOM_TAB_BAR_ROUTES.Basket,
        component: Basket,
        options :{
            tabBarBadge: <BasketCount />,
        }
    },
    {
        name: BOTTOM_TAB_BAR_ROUTES.Favorite,
        component: FavoriteScreen,
    },
    {
        name: BOTTOM_TAB_BAR_ROUTES.Profile,
        component: ProfileScreen,
    },
]