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
