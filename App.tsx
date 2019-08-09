import React from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import AppContainer from './nav/AppContainer'

import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'
import { Container } from 'native-base'
interface State {
	isReady: Boolean
}

const styles = StyleSheet.create({
	statusBar: {
		marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : null
	}
})
export default class App extends React.Component<{}, State> {
	constructor(props) {
		super(props)
		this.state = {
			isReady: false
		}
	}
	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font
		})
		this.setState({ isReady: true })
	}
	render() {
		if (!this.state.isReady) {
			return <AppLoading />
		}

		return (
			<Container style={styles.statusBar}>
				<AppContainer />
			</Container>
		)
	}
}
