<template>
    <div class="app">
        <Header></Header>
        <Nuxt class="mt-5" />
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    components: {
        Header,
        Footer
    }
}
</script>
<style>
.app {
    font-family: "Noto Sans TC", sans-serif;
}
</style>
