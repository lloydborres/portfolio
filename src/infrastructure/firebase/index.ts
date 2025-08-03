import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

const firebaseApp = initializeApp(firebaseConfig);
const firebaseFirestore = getFirestore(firebaseApp);
const firebaseAnalytics = getAnalytics(firebaseApp);

export default firebaseApp;
export { firebaseFirestore, firebaseAnalytics };
