import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

import firebaseConfig from './firebaseConfig';

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseDB = firebase.database();
const firebaseContacts = firebaseDB.ref('contacts');
const firebaseGallery = firebaseDB.ref('gallery');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');
const firebaseChats = firebaseDB.ref('chats');
const firebaseEngineers = firebaseDB.ref('engineers');

export {
  firebase,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseChats,
  firebaseContacts,
  firebaseGallery,
  firebaseEngineers,
  firebaseDB
}

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);
