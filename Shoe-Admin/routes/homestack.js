import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Adminform from '../components/admin'
import Login from '../components/Login'
import VenForm from '../components/vendor'
import Dashboard from '../components/dashboard';


const screens={
    Login:{
        screen:Login,
        navigationOptions: {headerShown: false}
    },
    AdminReg:{
        screen:Adminform,
        navigationOptions: {headerShown: false}
    },
    VendorReg:{
        screen:VenForm,
        navigationOptions: {headerShown: false}
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions: {headerShown: false}
    }
    
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);