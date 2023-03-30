import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCgpCfqBuBLzGY38hWz8divtyMo29tZnXY",
  authDomain: "nikoweb-a13af.firebaseapp.com",
  projectId: "nikoweb-a13af",
  storageBucket: "nikoweb-a13af.appspot.com",
  messagingSenderId: "580441491672",
  appId: "1:580441491672:web:6fb258f3a52119b305efad",
  measurementId: "G-2010JYNQ0V"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const initMyFirebase = () => {

  if (!getApps().length) {



    const auth = getAuth(app);

    if (typeof window !== "undefined") {
      const analytics = getAnalytics(app);
      const performance = getPerformance(app);
    }

    console.log("Initialized firebase")
  } else {
    console.log("Already Initialized firebase")
  }
};

export default initMyFirebase;