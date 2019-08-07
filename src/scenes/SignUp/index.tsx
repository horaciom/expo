import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import {
	Container,
	Header,
	Button,
	Text,
	Body,
	Form,
	Item as FormItem,
	Input,
	Label,
	Title
} from 'native-base'

import { firebaseApp } from '../../../helpers/appConfig'

export default class SignUp extends Component<{ navigation }> {
	constructor(props) {
		super(props)
		this.state = {
			// used to display a progress indicator if waiting for a network response.
			loading: false,
			// entered credentials
			email: '',
			password: ''
		}

		//console.log(firebaseApp)
	}

	// A method to passs the username and password to firebase and make a new user account
	signup() {
		this.setState({
			// When waiting for the firebase server show the loading indicator.
			loading: true
		})

		// Make a call to firebase to create a new user.
		// this.props.firebaseApp
		// 	.auth()
		// 	.createUserWithEmailAndPassword(this.state.email, this.state.password)
		// 	.then(() => {
		// 		// then and catch are methods that we call on the Promise returned from
		// 		// createUserWithEmailAndPassword
		// 		alert('Your account was created!')
		// 		this.setState({
		// 			// Clear out the fields when the user logs in and hide the progress indicator.
		// 			email: '',
		// 			password: '',
		// 			loading: false
		// 		})
		// 		this.props.navigator.push({
		// 			component: Login
		// 		})
		// 	})
		// 	.catch(error => {
		// 		// Leave the fields filled when an error occurs and hide the progress indicator.
		// 		this.setState({
		// 			loading: false
		// 		})
		// 		alert('Account creation failed: ' + error.message)
		// 	})
	}

	navigate = () => {
		console.log('me ejecuto')
		this.props.navigation.navigate('signIn')
	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>SignUp</Title>
					</Body>
				</Header>
				<Form style={{ marginHorizontal: 16 }}>
					<FormItem floatingLabel>
						<Label>Email</Label>
						<Input />
					</FormItem>
					<FormItem floatingLabel last>
						<Label>Password</Label>
						<Input secureTextEntry={true} />
					</FormItem>

					<Button full success style={{ marginVertical: 8, marginTop: 24 }}>
						<Text> Sign Up </Text>
					</Button>
					<Button full bordered success small onPress={this.navigate}>
						<Text> Go back to sign in </Text>
					</Button>
				</Form>
			</Container>
		)
	}
}
