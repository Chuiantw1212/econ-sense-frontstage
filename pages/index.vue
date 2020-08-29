<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-6">
                <Post></Post>
            </div>
            <div class="col-6">
                <Post></Post>
            </div>
            <div class="col-6">
                <Post></Post>
            </div>
            <div class="col-6">
                <Post></Post>
            </div>
            <div class="col-6">
                <Post></Post>
            </div>
            <div class="col-6">
                <Post></Post>
            </div>
        </div>
        <Pagination></Pagination>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'
import WidgetSearch from '@/components/widgets/Search.vue'
import WidgetCategories from '@/components/widgets/Categories.vue'
import Pagination from '@/components/Pagination.vue'
export default {
    components: {
        Post,
        WidgetSearch,
        WidgetCategories,
        Pagination
    }
}
</script>

<style>
</style>
