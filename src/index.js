import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase'

// import { seedDatabase } from './seed'

const config = {
    apiKey: "AIzaSyDYuKr_SWKu8nVSWpj0x5-b6HglFSvlmFM",
    authDomain: "netflix-clone-44b22.firebaseapp.com",
    projectId: "netflix-clone-44b22",
    storageBucket: "netflix-clone-44b22.appspot.com",
    messagingSenderId: "620904054502",
    appId: "1:620904054502:web:e64fb943e242637cbf4527",
    measurementId: "G-Q7W08PMW2F"
};

const firebase = window.firebase.initializeApp(config)
// seedDatabase(firebase)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
