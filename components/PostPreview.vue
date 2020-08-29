<template>
    <div class="card mb-4">
        <div class="card__clickable" @click="routeToPost()">
            <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
            <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p
                    class="card-text"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            </div>
        </div>
        <div class="card-footer text-muted">
            January 1, 2020
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        routeToPost() {
            this.$router.push({
                name: 'post'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.card__clickable {
    cursor: pointer;
}
</style>