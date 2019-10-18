import firebase from '@firebase/app';
import '@firebase/auth';
import Storage from './storage'
import Platform from './platform'

export function sharedInitApp(source) {
    Platform.add(source)
}

export function sharedInitStorage(storage) {
    Storage.add(storage)
}

//Move these values in a secret file to add to .gitignore
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

export function	sharedIsLoggedIn() {
    return Storage.get().getItem('jwtToken')
}

export function sharedResetStorage() {
    Storage.get().clear();
}

export const useMockData = false;
