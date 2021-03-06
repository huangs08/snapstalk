import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_APP_ID,
} from 'react-native-dotenv';

const API_KEY = FIREBASE_API_KEY;
const AUTH_DOMAIN = FIREBASE_AUTH_DOMAIN;
const DATABASE_URL = FIREBASE_DATABASE_URL;
const PROJECT_ID = FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = FIREBASE_STORAGE_BUCKET;
const APP_ID = FIREBASE_APP_ID;

// eslint-disable-next-line no-undef
export default (FirebaseKeys = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: '',
  appId: APP_ID,
});
