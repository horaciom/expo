import { createStackNavigator } from 'react-navigation'
import Login from '../src/scenes/login'
import SignUp from '../src/scenes/sign-up'

const StackNavigator = createStackNavigator(
	{
		login: {
			screen: Login,
			navigationOptions: {
				header: null
			}
		},
		signUp: {
			screen: SignUp,
			navigationOptions: {
				title: 'Registration'
			}
		}
	},
	{
		initialRouteName: 'login'
	}
)

export default StackNavigator
