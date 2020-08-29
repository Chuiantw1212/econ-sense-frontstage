<template>
    <div class="container py-5">
        後臺系統建構中......
        <div class="row">
            <div v-for="(post,index) in posts" class="col-12 col-lg-6" :key="index">
                <PostPreview v-model="posts[index]"></PostPreview>
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
import * as firebase from "firebase/app";
export default {
    components: {
        PostPreview,
        WidgetSearch,
        WidgetCategories,
        Pagination
    },
    data: () => {
        return {
            posts: []
        }
    },
    created() {
        const attemptToRead = () => {
            window.requestAnimationFrame(() => {
                if (firebase.app) {
                    this.readPosts()
                } else {
                    attemptToRead()
                }
            })
        }
        if (process.client) {
            attemptToRead()
        }
    },
    methods: {
        readPosts() {
            const db = firebase.firestore()
            const allPosts = db.collection("posts")
            allPosts.limit(10).get().then((querySnapshot) => {
                this.posts = []
                querySnapshot.forEach(doc => {
                    const data = doc.data()
                    this.posts.push(data)
                })
            })
        }
    }
}
</script>

<style>
</style>
