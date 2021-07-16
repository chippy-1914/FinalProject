import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Adminform from "../components/admin";
import Login from "../components/Login";
import VenForm from "../components/vendor";
import Adashboard from "../components/AdminHome";
import ViewVendor from "../components/ViewVendor";

const screens = {
  Adashboard: {
    screen: Adashboard,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  AdminReg: {
    screen: Adminform,
    navigationOptions: { headerShown: false },
  },
  VendorReg: {
    screen: VenForm,
    navigationOptions: { headerShown: false },
  },
  ViewVendor: {
    screen: ViewVendor,
    navigationOptions: { headerShown: false },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
