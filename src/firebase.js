// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBz5wLYiKXtfVcpaRfN9n36SIa-DDhiTXQ',
  authDomain: 'lemar-chat-app-485be.firebaseapp.com',
  projectId: 'lemar-chat-app-485be',
  storageBucket: 'lemar-chat-app-485be.appspot.com',
  messagingSenderId: '1063133779426',
  appId: '1:1063133779426:web:40589a974f78e10bd615bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
