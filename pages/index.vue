<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1 class="my-4">
                    Page Heading
                    <small>Secondary Text</small>
                </h1>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
            <!-- Sidebar Widgets Column -->
            <div class="col-md-4">
                <WidgetSearch></WidgetSearch>
                <WidgetCategories></WidgetCategories>
            </div>
        </div>
        <!-- /.row -->
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
