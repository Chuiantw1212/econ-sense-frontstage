<template>
    <div class="card m-1 pb-4">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-subtitle text-muted">{{ subtitle }}</p>
            <p>
                (
                <a
                    :href="`https://www.taaze.tw/apredir.html?154858690/https://www.taaze.tw/usedList.html?oid=${productId}`"
                    target="_blank"
                    >二手書 / 電子書 / 新書</a
                >
                )
            </p>
        </div>
        <img class="card__image" :src="imgSrc" alt="封面" />
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        productId: {
            type: String,
            default: ''
        },
        imgSrc: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.card__image {
    align-self: center;
    max-width: 240px;
}
</style>