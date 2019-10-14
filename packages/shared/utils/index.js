import firebase from '@firebase/app';
import '@firebase/auth';

export function sharedInitNetworking() {
    firebase.initializeApp({
        apiKey: "AIzaSyCmhCklkTQlwbK4fnlmIqFkRZoaT0Zh3DE",
        authDomain: "monorepo-react-rn.firebaseapp.com",
        databaseURL: "https://monorepo-react-rn.firebaseio.com",
        projectId: "monorepo-react-rn",
        storageBucket: "monorepo-react-rn.appspot.com",
        messagingSenderId: "555329954958",
        appId: "1:555329954958:web:517d25fb398347719f55df",
        measurementId: "G-V9FX6FDNDE"
    });
}

export function	sharedLogout(storage) {
    firebase.auth().signOut();
    storage.removeItem('jwtToken'); 
}


export function	sharedIsLoggedIn(storage) {
    return storage.getItem('jwtToken')
}

export function sharedResetStorage(storage) {
    storage.clear();
}

