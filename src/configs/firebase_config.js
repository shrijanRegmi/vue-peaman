import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyDK3DnHw8FyFy9gNxv3w4UNvDUTuhNg1p0',
  authDomain: 'peaman-ac825.firebaseapp.com',
  databaseURL: 'https://peaman-ac825.firebaseio.com',
  projectId: 'peaman-ac825',
  storageBucket: 'peaman-ac825.appspot.com',
  messagingSenderId: '338536543666',
  appId: '1:338536543666:web:ee30c22a1fc1c64b98a0ab',
  measurementId: 'G-6RSXW48DCB',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

