import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AuthNavigator, AppNavigator } from './StackNavigators'
import AuthLoadingScreen from '../src/scenes/AuthLoadingScreen'
const switchNavigator = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppNavigator,
		Auth: AuthNavigator
	},
	{
		initialRouteName: 'AuthLoading'
	}
)

const AppContainer = createAppContainer(switchNavigator)

export default AppContainer
