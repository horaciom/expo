import { createStackNavigator } from 'react-navigation'
import Login from '../src/scenes/Login'
import SignUp from '../src/scenes/SignUp'
import Dashboard from '../src/scenes/Dashboard'

const AuthNavigator = createStackNavigator(
	{
		signIn: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		signUp: {
			screen: SignUp,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'signIn'
	}
)

const AppNavigator = createStackNavigator({
	dashboard: {
		screen: Dashboard,
		navigationOptions: {
			title: 'Dashboard'
		}
	}
})

export { AuthNavigator, AppNavigator }
