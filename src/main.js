import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBHmYi10eD482q-KSpDqv2VQnQ5SbUcGts",
    authDomain: "estimationdb.firebaseapp.com",
    databaseURL: "https://estimationdb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "estimationdb",
    storageBucket: "estimationdb.appspot.com",
    messagingSenderId: "142658442501",
    appId: "1:142658442501:web:e28bf3a9720eaeef00d36c",
    measurementId: "G-MWR5K92H03"
};

firebase.initializeApp(firebaseConfig)

let app;
app = createApp(App).use(store).use(router).mount('#app');
// firebase.auth().onAuthStateChanged(() => {
//     if (!app) {
//         app = createApp(App).use(store).use(router).mount('#app');
//     }
// })

