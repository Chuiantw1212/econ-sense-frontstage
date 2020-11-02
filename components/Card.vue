<template>
    <div class="myCard-custom">
        <div class="card_body">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.myCard-custom {
    color: #212529;
    .card_body {
        background-color: white;
        border-radius: 6px;
        // border-left: 2px groove;
        // border-bottom: 2px groove darkseagreen;
        box-shadow: 10px 10px 25px -15px;
        padding: 16px 8px;
        img {
            max-width: 100%;
            margin: 0.5rem auto;
            max-height: 160px;
            display: block;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            margin-bottom: 16px;
        }
        a {
            color: #212529;
        }
    }
}
</style>
