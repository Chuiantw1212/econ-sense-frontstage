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
                <router-link class="home__link" :to="'/flow'" :tag="'div'">
                    <Card>
                        <h2>順向理財</h2>
                        <img
                            src="@/assets/icon/flow-chart.svg"
                            alt="money-flow"
                        />
                    </Card>
                </router-link>
            </div>
            <div class="col-lg-4">
                <router-link class="home__link" :to="'/knowledge'" :tag="'div'">
                    <Card>
                        <h2>主動投資人生</h2>
                        <img
                            src="@/assets/icon/machine-learning.svg"
                            alt="invest-knowledge"
                        />
                    </Card>
                </router-link>
            </div>
            <div class="col-lg-4">
                <router-link class="home__link" :to="'/wealth'" :tag="'div'">
                    <Card>
                        <h2>被動投資金錢</h2>
                        <img
                            src="@/assets/icon/invest.svg"
                            alt="invest-money"
                        />
                    </Card>
                </router-link>
            </div>
        </div>
        <p class="m-0 mt-5">2019年以前我對理財一竅不通</p>
        <p class="m-0">2020年末，我算得出我幾年後會財富自由</p>
        <br />
        <p class="m-0">我看過許多課程</p>
        <p class="m-0">高價卻無用</p>
        <p class="m-0">有的用行銷話語包裝投資</p>
        <p class="m-0">有的販賣有錢人才能用的方法</p>
        <p class="m-0">有的灌輸整天盯盤的技巧</p>
        <p class="m-0">看著有需要的人沒有得到幫助</p>
        <p class="m-0">真心想做點甚麼</p>
        <br />
        <p class="m-0">2020年末我遇上一個好團隊</p>
        <p class="m-0">讓我確定自己不孤單，也補足我對生涯財務規劃的知識藍圖</p>
        <br />
        <p class="m-0">這是一個從無到有的故事</p>
        <p class="m-0">就當被騙最後一次</p>
        <p class="m-0">你願意把故事聽完嗎？</p>
    </div>
</template>
<script>
import PostPreview from '@/components/PostPreview.vue'
import WidgetSearch from '@/components/widgets/Search.vue'
import WidgetCategories from '@/components/widgets/Categories.vue'
import Pagination from '@/components/Pagination.vue'
export default {
    components: {
        PostPreview,
        WidgetSearch,
        WidgetCategories,
        Pagination
    },
}
</script>

<style style="scss">
.home__link {
    cursor: pointer;
}
</style>
