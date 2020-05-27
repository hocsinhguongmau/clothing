import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBgASwd9IGltPF-3sogQa7jzRVPQ9Nu4I0",
	authDomain: "crwn-db-cc2d4.firebaseapp.com",
	databaseURL: "https://crwn-db-cc2d4.firebaseio.com",
	projectId: "crwn-db-cc2d4",
	storageBucket: "crwn-db-cc2d4.appspot.com",
	messagingSenderId: "671738233252",
	appId: "1:671738233252:web:db69a96aac0174168d8131",
	measurementId: "G-MCPQQ6SPPW"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
