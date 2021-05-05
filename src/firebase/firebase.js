import firebase from 'firebase/app';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAKnvDIFmW4vDi-re8KDOLMEb7QIihf6MQ",
    authDomain: "fir-react-images.firebaseapp.com",
    projectId: "fir-react-images",
    storageBucket: "fir-react-images.appspot.com",
    messagingSenderId: "1006391551687",
    appId: "1:1006391551687:web:4897f4a5b4c659f03200e2"
}

firebase.initializeApp(config);
const storage = firebase.storage()

export {
    storage, firebase
};