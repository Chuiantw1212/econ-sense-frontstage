<template>
    <div class="post">
        <div class="row justify-content-center">
            <!-- Post Content Column -->
            <div v-if="post" class="col-12 col-md-10 col-lg-8">
                <!-- Title -->
                <h1 class>{{ post.title }}</h1>

                <!-- Date/Time -->
                <p>發布時間: {{ post.date | formatDate }}</p>

                <hr />

                <!-- Post Content -->
                <div class="post__content" v-html="post.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as firebase from "firebase/app";
export default {
    data: function () {
        return {
            post: null
        }
    },
    computed: {
        docId() {
            return this.$route.params.id
        }
    },
    mounted() {
        const attemptToRead = () => {
            window.requestAnimationFrame(() => {
                if (firebase.app) {
                    this.readPostSync()
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
        getLocalDate(date) {
            const dateInstance = new Date(date)
            const localDate = dateInstance.toLocaleString()
            return localDate
        },
        async readPostSync() {
            const db = firebase.firestore()
            const docRef = db.collection('posts').doc(this.docId)
            const docSnapShot = await docRef.get()
            const docData = docSnapShot.data()
            this.post = docData
        }
    }
}
</script>
<style lang="scss" scoped>
.post {
    .post__image {
        width: 100%;
    }
    .post__content {
        span {
            line-height: 1.7em;
            font-size: 18px;
        }
    }
}

@media screen and (min-width: 768px) {
    .post {
        .post__content {
            font-size: 20px;
        }
    }
}
</style>