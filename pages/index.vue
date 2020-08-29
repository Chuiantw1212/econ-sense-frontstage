<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
            <div class="col-12 col-lg-6">
                <PostPreview></PostPreview>
            </div>
        </div>
        <Pagination></Pagination>
    </div>
</template>

<script>
import PostPreview from '@/components/PostPreview.vue'
import WidgetSearch from '@/components/widgets/Search.vue'
import WidgetCategories from '@/components/widgets/Categories.vue'
import Pagination from '@/components/Pagination.vue'
export default {
    components: {
        PostPreview,
        WidgetSearch,
        WidgetCategories,
        Pagination
    }
}
</script>

<style>
</style>
