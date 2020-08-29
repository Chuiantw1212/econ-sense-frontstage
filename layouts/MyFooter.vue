<template>
    <div class="footer">
        <div class="footer__logoWrapper">
            <span @click="routeToHome()" class="footer__logo">常識經濟學</span>
        </div>
        <span class="footer__info">© 2020 常識經濟學 只教你需要的</span>
    </div>
</template>
<script>
export default {
    methods: {
        routeToHome() {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.footer {
    background-color: #5d5a51;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 0;
    position: relative;
    // text-align: center;
    padding: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .footer__logoWrapper {
        text-align: center;
        display: flex;
        justify-content: center;
        .footer__logo {
            display: block;
            color: #fff;
            font-size: 32px;
            font-weight: 100;
            letter-spacing: 2px;
            text-decoration: none;
            cursor: pointer;
        }
    }
    .footer__info {
        text-align: center;
    }
}
</style>