<template>
    <div class="container">
        <div class="text-center">
            <h1>理財FQ</h1>
            <p>回答過的理財問題整理成冊</p>
        </div>
        <br />
        <div class="row justify-content-center">
            <div v-for="(post, index) in posts" class="col-12 col-lg-10" :key="index">
                <PostPreview v-model="posts[index]"></PostPreview>
            </div>
        </div>
    </div>
</template>
<script>
import PostPreview from '@/components/PostPreview.vue'
import WidgetSearch from '@/components/widgets/Search.vue'
import WidgetCategories from '@/components/widgets/Categories.vue'
import Pagination from '@/components/Pagination.vue'
import * as firebase from "firebase/app";
export default {
    head: {
        title: '常識經濟學 - 理財FQ'
    },
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
        async readPosts() {
            Swal.fire({
                title: '載入中',
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: 2000,
                onOpen: () => {
                    Swal.showLoading();
                }
            })
            const db = firebase.firestore()
            const allPosts = db.collection("postPreviews")
            const querySnapshot = await allPosts.orderBy('date').limit(10).get()
            this.posts = []
            querySnapshot.forEach(doc => {
                const data = doc.data()
                this.posts.push(data)
            })
            this.posts.reverse()
            Swal.close()
        }
    }
}
</script>

<style>
</style>
