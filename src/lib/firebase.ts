import { initializeApp,  } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyAfAy0vVbTi49sR1-ElvfeeP_xmhNjDr5U",
    authDomain: "exampleproject-2f93b.firebaseapp.com",
    projectId: "exampleproject-2f93b",
    storageBucket: "exampleproject-2f93b.appspot.com",
    messagingSenderId: "432495142096",
    appId: "1:432495142096:web:7bbd0bd6c62f35a552ead5"
});

const auth = getAuth(app);

export default app;
export { auth };