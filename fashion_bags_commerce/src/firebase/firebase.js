// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC9lh7wRRxYvHDsSNpNvHVLHCD65EyBRs0',
  authDomain: 'bagsgirl-datn.firebaseapp.com',
  projectId: 'bagsgirl-datn',
  storageBucket: 'bagsgirl-datn.appspot.com',
  messagingSenderId: '845000352943',
  appId: '1:845000352943:web:a1bbd7eb4b7cc7737f605a',
  measurementId: 'G-3MJ7W76BEY',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
