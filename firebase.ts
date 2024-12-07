/** @format */

import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAt-rd5E_RKhVnxOkCFYPzVtVod1N0weEg",
	authDomain: "virtual-study-group-3c6f9.firebaseapp.com",
	projectId: "virtual-study-group-3c6f9",
	storageBucket: "virtual-study-group-3c6f9.firebasestorage.app",
	messagingSenderId: "363867699464",
	appId: "1:363867699464:web:b24f2646db2ecafe0054bd",
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth };
