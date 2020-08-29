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
    height: 100%;
    .card_body {
        height: 100%;
        background-color: white;
        border-radius: 6px;
        border-left: 2px groove;
        border-bottom: 2px groove darkseagreen;
        box-shadow: 10px 10px 25px -15px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
            width: 100px;
            margin: 0.5rem auto;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
        }
        a {
            color: #212529;
        }
    }
}
</style>
