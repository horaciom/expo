import React from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity } from 'react-native'

const LoginScreen = ({ navigation }) => {
	const navigate = () => {
		console.log('me ejecuto')
		navigation.navigate('signUp')
	}

	return (
		<View style={styles.container}>
			<Text>Login screen</Text>

			<TouchableOpacity onPress={navigate}>
				<Text>Sign Up</Text>
			</TouchableOpacity>
		</View>
	)
}

export default LoginScreen
