// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function StartFirebase() {
    const firebaseConfig = {
        apiKey: 'AIzaSyBarNO70sLUzmp6ATqVzYcDlI0d6m9tOo8',
        authDomain: 'myshop-97993.firebaseapp.com',
        databaseURL: 'https://myshop-97993-default-rtdb.asia-southeast1.firebasedatabase.app',
        projectId: 'myshop-97993',
        storageBucket: 'myshop-97993.appspot.com',
        messagingSenderId: '964873163551',
        appId: '1:964873163551:web:eaf454a75cfcf481a6962a',
        measurementId: 'G-MF6P6V0QG3',
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

// Initialize Firebase
export default StartFirebase;
