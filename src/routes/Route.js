import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Route = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Register: Register,
  },
  {
    navigationOptions: {
      headerTintColor: '#f4ff3',
      headerStyle: {
        backgroundColor: '#53532',
      },
    },
  },
);

const container = createAppContainer(Route);

export default container;
