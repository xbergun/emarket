import CustomIcon from "../components/icon/CustomIcon";
import { HOME_STACK_ROUTES } from "../navigations/constant";
import HomeScreen from "../screens/home/HomeScreen/HomeScreen";
import ProductDetailScreen from "../screens/home/ProductDetail/ProductDetailScreen";


export const HomeStackRoutes = [
    {
        name: HOME_STACK_ROUTES.Home,
        component: HomeScreen,
        options: {
            headerTitleAlign: "left",
        },
       
    },
    {
        name: HOME_STACK_ROUTES.ProductDetail,
        component: ProductDetailScreen,
    
    },
];