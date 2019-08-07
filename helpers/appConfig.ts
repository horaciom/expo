import firebase from 'firebase/app'

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyARNte03GC22yMACgCOYyVrA43c3SDMPjg',
	authDomain: 'test-c5838-cad26.firebaseapp.com',
	databaseURL: 'https://test-c5838-cad26.firebaseio.com',
	storageBucket: 'test-c5838.appspot.com'
})

export { firebaseApp }
