import firebase from 'firebase/app'
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAM0Qx2Fa00mQDl8z1GVhM_ZABhgM-Gb8I",
    authDomain: "merngram-2f709.firebaseapp.com",
    projectId: "merngram-2f709",
    storageBucket: "merngram-2f709.appspot.com",
    messagingSenderId: "140589251373",
    appId: "1:140589251373:web:ed8d3a897b03f4064471a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export {projectStorage};