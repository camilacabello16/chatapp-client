import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAsfgMlG7rPqdIxnzq5oikKRzFF8uNVuIU",
    authDomain: "join-chat-9afdd.firebaseapp.com",
    projectId: "join-chat-9afdd",
    storageBucket: "join-chat-9afdd.appspot.com",
    messagingSenderId: "913138865124",
    appId: "1:913138865124:web:b84d15f4eba0a1f6e0edf1",
    measurementId: "G-RD9HV6PMHL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    analytics
};