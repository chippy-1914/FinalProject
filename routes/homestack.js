import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Regiform from '../components/Form'
import Login from '../components/Login'
import AddProd from '../components/AddProd'
import Addtocart from '../components/Addtocart'
import Wishlist from '../components/wishlist';
import Cdashboard from '../components/Cdashboard';
import Vdashboard from '../components/Vdashboard'
import Details from '../components/producteach'
import StarRating from '../components/review'
import ProductList from '../components/productList'
import Checkout from '../components/checkout'
import ViewReview from '../components/ViiewReview';

const screens={
    Cdashboard:{
        screen:Cdashboard,
        navigationOptions: {headerShown: false}
    },
    Vdashboard:{
        screen:Vdashboard,
        navigationOptions: {headerShown: false}
    },
    CustomerReg:{
        screen:Regiform,
        navigationOptions: {headerShown: false}
    },
    Login:{
        screen:Login,
        navigationOptions: {headerShown: false}
    },
    AddProd:{
        screen:AddProd,
        navigationOptions: {headerShown: false}
    },
    Addtocart:{
        screen:Addtocart,
        navigationOptions: {headerShown: false}
    },
    Wishlist:{
        screen:Wishlist,
        navigationOptions: {headerShown: false}
    },
    Rating:{
        screen:StarRating,
        navigationOptions: {headerShown: false}
    },
    ProductList:{
        screen:ProductList,
        navigationOptions: {headerShown: false}
    },
    ProductEach:{
        screen:Details,
        navigationOptions: {headerShown: false}
    },
    Checkout:{
        screen:Checkout,
        navigationOptions: {headerShown: false}
    },
    ViewReview:{
        screen:ViewReview,
        navigationOptions: {headerShown: false}
    },

}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);