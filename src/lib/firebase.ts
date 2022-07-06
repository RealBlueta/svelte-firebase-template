import { initializeApp,  } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({

});

const auth = getAuth(app);

export default app;
export { auth };