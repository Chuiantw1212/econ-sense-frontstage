<template>
    <div class="container py-5 text-center">
        <div class="row">
            <div class="col text-center">
                <h1 class="bold">
                    <strong>理財生活化</strong>
                </h1>
            </div>
        </div>
        <div>
            <p>讓理財可理解、可執行、可分享</p>
        </div>
        <div class="row">
            <div class="col">
                <div class="card-body">
                    <Card>
                        <h2>順向理財</h2>
                        <img src="@/assets/icon/flow-chart.svg" />
                    </Card>
                </div>
            </div>
            <div class="col">
                <div class="card-body">
                    <Card>
                        <h2>主動投資人生</h2>
                        <img src="@/assets/icon/machine-learning.svg" />
                    </Card>
                </div>
            </div>
            <div class="col">
                <div class="card-body">
                    <Card>
                        <h2>被動投資金錢</h2>
                        <img src="@/assets/icon/invest.svg" />
                    </Card>
                </div>
            </div>
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
