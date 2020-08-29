<template>
    <div class="lessonGrid">
        <template v-for="(routeName,index) in routeNames">
            <router-link :key="index" :active-class="'lesson--active'" :to="{name:routeName}">
                <Card class="lesson__card">
                    <h5>{{routeName}}</h5>
                </Card>
            </router-link>
        </template>
    </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
    props: {
        routeNames: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        Card
    },
    methods: {
        routeByName (routeName) {
            this.$router.push({
                name: routeName
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.lesson--active {
    text-decoration: underline;
}
.lessonGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    .lesson__card {
        color: black;
    }
    > * {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            text-align: center;
        }
        cursor: pointer;
    }
}

@media screen and (min-width: 576px) {
    .lessonGrid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (min-width: 1210px) {
    .lessonGrid {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
</style>