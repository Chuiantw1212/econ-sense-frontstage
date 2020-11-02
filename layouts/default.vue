<template>
    <div class="app">
        <Navigation></Navigation>
        <Nuxt class="" />
        <MyFooter></MyFooter>
    </div>
</template>
<script>
import MyFooter from './MyFooter.vue'
import Navigation from './Navigation.vue'
const firebase = require('firebase');
export default {
    components: {
        Navigation,
        MyFooter
    },
    mounted() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDjiWhVczvH_LtWHkd-eSVCLO6uJNbhQso",
            authDomain: "my-blog-287510.firebaseapp.com",
            databaseURL: "https://my-blog-287510.firebaseio.com",
            projectId: "my-blog-287510",
            storageBucket: "my-blog-287510.appspot.com",
            messagingSenderId: "32885456963",
            appId: "1:32885456963:web:7d9bab043ddd8a3e09d4f6",
            measurementId: "G-DY0VR8Q0RD"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}
</script>
<style>
.app {
    font-family: "Noto Sans TC", sans-serif;
    padding-top: 68px;
}
.container {
    min-height: 100vh;
}
</style>
