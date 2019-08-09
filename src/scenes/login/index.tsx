import React, { Component } from 'react'
import FormLogin from './Form'
import {
	NavigationScreenProp,
	NavigationState,
	NavigationParams
} from 'react-navigation'
import { KeyboardAvoidingView, Platform } from 'react-native'

interface Props {
	navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export default class LoginScreen extends Component<Props> {
	navigate = (): void => {
		console.log('aca')
		this.props.navigation.navigate('signUp')
	}
	render() {
		return <FormLogin goToSignup={this.navigate} />
	}
}
