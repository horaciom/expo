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

export default class SignUp extends Component<Props> {
	constructor(props) {
		super(props)
	}

	signup() {}

	navigate = (): void => {
		this.props.navigation.navigate('signIn')
	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign Up</Title>
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
