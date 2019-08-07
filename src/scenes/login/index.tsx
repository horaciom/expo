import React, { Component } from 'react'
import { NavigationScreenProp } from 'react-navigation'
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

interface Props {
	navigation: NavigationScreenProp<any, any>
}

export default class LoginScreen extends Component<Props> {
	navigate = () => {
		this.props.navigation.navigate('signUp')
	}
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Login</Title>
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
						<Text> Sign In </Text>
					</Button>
					<Button full bordered success onPress={this.navigate}>
						<Text> Sign Up </Text>
					</Button>
				</Form>
			</Container>
		)
	}
}
