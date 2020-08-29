<template>
    <div class="myTheme">
        <h2 class="theme__title">{{title}}</h2>
        <div class="row">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    }
};
</script>
<style lang="scss" scoped>
.myTheme {
    margin-top: 1rem;
    .theme__title {
        margin-bottom: 1rem;
    }
}
</style>

