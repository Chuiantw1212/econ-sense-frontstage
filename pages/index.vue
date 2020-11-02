<template>
    <div class="container py-5 text-center">
        <div class="row">
            <div class="col text-center">
                <h1 class="bold">
                    <strong>理財生活化</strong>
                </h1>
            </div>
            <!-- <div
                v-for="(post, index) in posts"
                class="col-12 col-lg-6"
                :key="index"
            >
                <PostPreview v-model="posts[index]"></PostPreview>
            </div> -->
        </div>
        <div class="row">
            <div class="col">順向理財</div>
            <div class="col">主動投資人生</div>
            <div class="col">被動投資財富</div>
        </div>
        <!-- <Pagination></Pagination> -->
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
                const posts = []
                querySnapshot.forEach(doc => {
                    const data = doc.data()
                    data.id = doc.ref.id
                    posts.push(data)
                })
                posts.sort((one, another) => {
                    const oneDate = new Date(one.date)
                    const anotherDate = new Date(another.date)
                    return anotherDate - oneDate
                })
                this.posts = posts
            })
        }
    }
}
</script>

<style>
</style>
