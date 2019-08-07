import React from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'

class AuthLoadingScreen extends React.Component<{ navigation }> {
	constructor(props) {
		super(props)
		this.bootstrapAsync()
	}

	bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken')
		this.props.navigation.navigate(userToken ? 'App' : 'Auth')
	}

	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle='default' />
			</View>
		)
	}
}
export default AuthLoadingScreen
