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
            <div class="col-lg-4">
                <router-link class="card-body home__link" :to="'/flow'" :tag="'div'">
                    <Card>
                        <h2>順向理財</h2>
                        <img src="@/assets/icon/flow-chart.svg" />
                    </Card>
                </router-link>
            </div>
            <div class="col-lg-4">
                <router-link class="card-body home__link" :to="'/knowledge'" :tag="'div'">
                    <Card>
                        <h2>主動投資人生</h2>
                        <img src="@/assets/icon/machine-learning.svg" />
                    </Card>
                </router-link>
            </div>
            <div class="col-lg-4">
                <router-link class="card-body home__link" :to="'/wealth'" :tag="'div'">
                    <Card>
                        <h2>被動投資金錢</h2>
                        <img src="@/assets/icon/invest.svg" />
                    </Card>
                </router-link>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">2019年以前我對理財一竅不通</div>
        </div>
        <div class="row">
            <div class="col">2020年末，我算得出我幾年後會財富自由</div>
        </div>
        <br />
        <div class="row">
            <div class="col">我看過許多課程</div>
        </div>
        <div class="row">
            <div class="col">高價卻無用</div>
        </div>
        <div class="row">
            <div class="col">有的用行銷話語包裝投資</div>
        </div>
        <div class="row">
            <div class="col">有的販賣有錢人才能用的方法</div>
        </div>
        <div class="row">
            <div class="col">有的灌輸整天盯盤的技巧</div>
        </div>
        <div class="row">
            <div class="col">看著有需要的人沒有得到幫助</div>
        </div>
        <div class="row">
            <div class="col">真心難過</div>
        </div>
        <br />
        <div class="row">
            <div class="col">2020年末我遇上一個好團隊</div>
        </div>
        <div class="row">
            <div class="col">
                讓我確定自己不孤單，也補足我對生涯財務規劃的知識藍圖
            </div>
        </div>
        <br />
        <div class="row">
            <div class="col">這是一個從無到有的故事</div>
        </div>
        <div class="row">
            <div class="col">就當被騙最後一次</div>
        </div>
        <div class="row">
            <div class="col">你願意把故事聽完嗎？</div>
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

<style style="scss">
.home__link {
    cursor: pointer;
}
</style>
