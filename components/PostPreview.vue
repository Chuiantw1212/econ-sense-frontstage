<template>
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
        <div
            class="card-body d-flex flex-column align-items-start"
            @click="routeToPost(value)"
        >
            <strong class="d-inline-block mb-2 text-primary">{{
                value.class
            }}</strong>
            <h3 class="mb-0">{{ value.title }}</h3>
            <div class="mb-1 text-muted">{{ value.date | formatDate }}</div>
            <p class="card-text mb-auto">
                {{ value.subtitle }}
            </p>
            <router-link
                :to="{
                    path: 'post',
                    query: {
                        id: value.contentId,
                    },
                }"
            >
                繼續閱讀
            </router-link>
        </div>
        <img
            class="card-img-right flex-auto d-none d-md-block"
            data-src="holder.js/200x250?theme=thumb"
            alt="Thumbnail [200x250]"
            style="width: 200px; height: auto"
            data-holder-rendered="true"
            :src="value.imageSrc"
        />
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    methods: {
        routeToPost(post) {
            this.$router.push({
                path: 'post',
                query: {
                    id: post.contentId
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.card-img-top {
    height: 300px;
    background-size: cover;
    background-position: center;
}
.card {
    cursor: pointer;
}
</style>