import { firebase, googleAuthProvider } from '../firebase/firebase.js';

export const login = (uid,email) => ({
    type: 'LOGIN',
    uid,email
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
        
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};