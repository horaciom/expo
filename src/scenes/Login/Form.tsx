//https://medium.com/@jan.hesters/unleash-the-power-of-easy-and-efficient-forms-in-react-native-with-formik-and-yup-9210e43794eb

import React, { Component } from 'react'

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
	Title,
	InputGroup,
	Icon,
	Item
} from 'native-base'
import { Formik, FormikProps, FormikActions } from 'formik'

interface Props {
	goToSignup: Function
}
interface FormValues {
	email: string
	password: string
}

export default class FormLogin extends Component<Props> {
	goToSignup = () => this.props.goToSignup()

	renderForm = ({
		values,
		handleSubmit,
		setFieldValue,
		touched,
		errors,
		setFieldTouched,
		isSubmitting
	}: FormikProps<FormValues>) => {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Login</Title>
					</Body>
				</Header>
				<Form style={{ marginHorizontal: 16 }}>
					<InputGroup>
						<Item error={true}>
							<Input
								placeholder={'Email'}
								keyboardType='email-address'
								autoCapitalize='none'
								value={values.email}
								onChangeText={value => setFieldValue('email', value)}
								onBlur={() => setFieldTouched('email')}
								editable={!isSubmitting}
							/>
							{true ? <Icon name='close-circle' /> : null}
						</Item>
					</InputGroup>
					{true ? <Text>Error</Text> : null}
					<FormItem floatingLabel last>
						<Input
							secureTextEntry={true}
							placeholder={'Password'}
							autoCapitalize='none'
							value={values.password}
							onChangeText={value => setFieldValue('password', value)}
							onBlur={() => setFieldTouched('password')}
							editable={!isSubmitting}
						/>
					</FormItem>

					<Button full success style={{ marginVertical: 8, marginTop: 24 }}>
						<Text> Sign In </Text>
					</Button>
					<Button full bordered success onPress={this.goToSignup}>
						<Text> Sign Up </Text>
					</Button>
				</Form>
			</Container>
		)
	}

	render(): React.ReactElement {
		return (
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={() => {}}
				render={(formikBag: FormikProps<FormValues>) =>
					this.renderForm(formikBag)
				}
			/>
		)
	}
}
