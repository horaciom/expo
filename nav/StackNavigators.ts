import {createStackNavigator} from 'react-navigation'
import Login from '../src/scenes/Login'
import SignUp from '../src/scenes/SignUp'
import Dashboard from '../src/scenes/Dashboard'

const AuthNavigator = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    signUp: {
      screen: SignUp,
      navigationOptions: {
        title: 'Registration',
      },
    },
  },
  {
    initialRouteName: 'login',
  }
)

const AppNavigator = createStackNavigator({
  dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
})

export {AuthNavigator, AppNavigator}
