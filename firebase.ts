import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrrws96bgDmxdU-bv-cR-vdxrisuWGLk8",
  authDomain: "chatgpt-b39cf.firebaseapp.com",
  projectId: "chatgpt-b39cf",
  storageBucket: "chatgpt-b39cf.appspot.com",
  messagingSenderId: "18500345896",
  appId: "1:18500345896:web:e2e54f66b8048f41d1151d"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
export { db };