
import { BasketOutline } from "../../../assets/svg/BasketOutline";
import { HomeOutline } from "../../../assets/svg/HomeOutline";
import { PersonOutline } from "../../../assets/svg/PersonOutline";
import { StarOutline } from "../../../assets/svg/StarOutline";
import CustomIcon from "../../components/icon/CustomIcon";
import { BOTTOM_TAB_BAR_ROUTES } from "../constant";

export const getBottomTabBarScreenOptions = (route) => {
    return {
        headerShown: true,
        headerTitleAlign: "left",
        headerTitle: "E-Market",
        headerTitleStyle: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
        },
        tabBarShowLabel: false,
        headerStyle: {
            backgroundColor: "#2A59FE",
            shadowColor: "transparent",
            elevation: 0,
        },
        tabBarIcon: ({focused}) => {
            const colorFocused = focused ? "#2A59FE" : 'black';
            const fill = focused ? "#2A59FE" : 'none';
            if (route.name === BOTTOM_TAB_BAR_ROUTES.HomeStack) {
               return <HomeOutline stroke={colorFocused} fill={fill} height={30} width={32.31} />
            } else if (route.name === BOTTOM_TAB_BAR_ROUTES.Basket) {
               return <BasketOutline stroke={colorFocused} fill={fill} height={30} width={32.31} />
            } else if (route.name === BOTTOM_TAB_BAR_ROUTES.Favorite) {
                return <StarOutline stroke={colorFocused} fill={fill} height={30} width={32.31} />
            } else if (route.name === BOTTOM_TAB_BAR_ROUTES.Profile) {
                return <PersonOutline stroke={colorFocused} fill={fill} height={30} width={32.31} />
            }
           
        },
    }
  };
