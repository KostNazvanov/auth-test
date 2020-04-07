import firebase from 'firebase';
import firebaseConfig from '../configs/firebase.json';

const app = firebase.initializeApp(firebaseConfig);
// TODO remove after testing
// @ts-ignore
window.firebase = app;

app.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('signed in', user);
  } else {
    console.log('signed out');
  }
});

export const signUp = async (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
};

export const signIn = async (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
};

export const signOut = async () => {
  return firebase.auth().signOut();
};
