<template>
    <div class="myCard">
        <div class="card_body">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$size-sm: 130px;
$size-md: 180px;
$size-lg: 210px;
.myCard {
    margin: auto;
    width: $size-sm;
    height: $size-sm; // color: #212529;
    .card_body {
        background-color: white;
        border-radius: 6px;
        // border-left: 2px groove;
        // border-bottom: 2px groove darkseagreen;
        box-shadow: 10px 10px 25px -15px;
        // padding: 16px 8px;
        padding: 1.25rem;
        img {
            max-width: 100%;
            // margin: 0.5rem auto;
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

@media screen and (min-width: 768px) {
    .myCard {
        margin: auto;
        width: $size-md;
        height: $size-md; // color: #212529;
    }
}

@media screen and (min-width: 992px) {
   .myCard {
        margin: auto;
        width: $size-lg;
        height: $size-lg; // color: #212529;
    }
}
</style>
