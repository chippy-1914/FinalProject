import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Regiform from "../components/Form";
import Login from "../components/Login";
import AddProd from "../components/AddProd";
import Addtocart from "../components/Addtocart";
import Wishlist from "../components/wishlist";
import Cdashboard from "../components/Cdashboard";
import Vdashboard from "../components/Vdashboard";
import Details from "../components/producteach";
import StarRating from "../components/review";
import Checkout from "../components/checkout";
import Viewreview from "../components/Viewreview";
import Home from "../components/Home";
import Searchprod from "../components/Searchprod";
import Userprofile from "../components/Userprofile";
import Myorders from "../components/OrderPage";
import Profile from "../components/Profile";
import Helpline from "../components/Help";
import Vsearch from "../components/Vsearch ";
import ProductVen from "../components/productVen";
import OrderReq from "../components/OrderReq";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: { headerShown: false },
  },
  Cdashboard: {
    screen: Cdashboard,
    navigationOptions: { headerShown: false },
  },
  Vdashboard: {
    screen: Vdashboard,
    navigationOptions: { headerShown: false },
  },
  CustomerReg: {
    screen: Regiform,
    navigationOptions: { headerShown: false },
  },
  Searchprod: {
    screen: Searchprod,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  AddProd: {
    screen: AddProd,
    navigationOptions: { headerShown: false },
  },
  Addtocart: {
    screen: Addtocart,
    navigationOptions: { headerShown: false },
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: { headerShown: false },
  },
  Rating: {
    screen: StarRating,
    navigationOptions: { headerShown: false },
  },
  Orderpage: {
    screen: Myorders,
    navigationOptions: { headerShown: false },
  },
  ProductEach: {
    screen: Details,
    navigationOptions: { headerShown: false },
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: { headerShown: false },
  },
  ViewReview: {
    screen: Viewreview,
    navigationOptions: { headerShown: false },
  },
  Userprofile: {
    screen: Userprofile,
    navigationOptions: { headerShown: false },
  },
  Profile: {
    screen: Profile,
    navigationOptions: { headerShown: false },
  },
  Helpline: {
    screen: Helpline,
    navigationOptions: { headerShown: false },
  },
  Vsearch: {
    screen: Vsearch,
    navigationOptions: { headerShown: false },
  },
  ProductVen: {
    screen: ProductVen,
    navigationOptions: { headerShown: false },
  },
  OrderReq: {
    screen: OrderReq,
    navigationOptions: { headerShown: false },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
