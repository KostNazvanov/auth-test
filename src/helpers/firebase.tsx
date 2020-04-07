import _firebase from 'firebase';
import firebaseConfig from '../configs/firebase.json';
import actions from "../actions";

const firebase = _firebase.initializeApp(firebaseConfig);
// TODO remove after testing
// @ts-ignore
window.firebase = firebase;
export default firebase;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    actions.loginSuccess({ user });
  } else {
    actions.logout({});
  }
});

export const signUp = (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
};

export const signIn = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
};

export const signOut = () => {
  return firebase.auth().signOut();
};
