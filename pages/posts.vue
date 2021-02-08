<template>
    <div class="container py-5">
        <br />
        <div class="row justify-center">
            <div v-for="(post, index) in posts" class="col-12" :key="index">
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
import axios from 'axios'
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
