<template>
    <div class="text-center">
        <section>
            <div class="row">
                <div class="col text-center">
                    <h1 class="bold">
                        <strong>常識經濟學</strong>
                    </h1>
                </div>
            </div>
            <div>
                <p>讓富裕不再是秘密</p>
            </div>
            <hr />
            <!-- <h2>理財框架</h2> -->
            <div class="row">
                <div class="col-4">
                    <router-link class="home__link" :to="'/vocation'" :tag="'div'">
                        <h3 class="card__header">自我定位</h3>
                        <Card>
                            <img
                                src="@/assets/icon/machine-learning.svg"
                                alt="money-flow"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/management'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">經營管理</h3>
                        <Card>
                            <img
                                src="@/assets/icon/flow-chart.svg"
                                alt="invest-self"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/wealth'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">累積資產</h3>
                        <Card>
                            <img
                                src="@/assets/icon/invest.svg"
                                alt="invest-money"
                            />
                        </Card>
                    </router-link>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-4">
                    <router-link class="home__link" :to="'/self'" :tag="'div'">
                        <h3 class="card__header">自我定位</h3>
                        <Card>
                            <img
                                src="@/assets/icon/machine-learning.svg"
                                alt="money-flow"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/management'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">經營管理</h3>
                        <Card>
                            <img
                                src="@/assets/icon/flow-chart.svg"
                                alt="invest-self"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/wealth'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">累積資產</h3>
                        <Card>
                            <img
                                src="@/assets/icon/invest.svg"
                                alt="invest-money"
                            />
                        </Card>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <router-link class="home__link" :to="'/self'" :tag="'div'">
                        <h3 class="card__header">自我定位</h3>
                        <Card>
                            <img
                                src="@/assets/icon/machine-learning.svg"
                                alt="money-flow"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/management'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">經營管理</h3>
                        <Card>
                            <img
                                src="@/assets/icon/flow-chart.svg"
                                alt="invest-self"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-4">
                    <router-link
                        class="home__link"
                        :to="'/wealth'"
                        :tag="'div'"
                    >
                        <h3 class="card__header">累積資產</h3>
                        <Card>
                            <img
                                src="@/assets/icon/invest.svg"
                                alt="invest-money"
                            />
                        </Card>
                    </router-link>
                </div>
            </div>
            <!-- <h2>理財框架</h2> -->
            <!-- <p class="m-0 mt-5">2018年10月，上了人生的第一堂理財課程</p>
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
            <p class="m-0">
                讓我確定自己不孤單，也補足我對生涯財務規劃的知識藍圖
            </p>
            <br />
            <p class="m-0">如果你總是覺得富有有什麼秘密或是捷徑</p>
            <p class="m-0">希望這個網站的內容可以幫助到你</p> -->
        </section>
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
        Pagination,
        Card: () => import('./index/Card.vue')
    },
}
</script>

<style style="scss">
.card__header {
    font-size: 20px;
}
.home__link {
    cursor: pointer;
}
</style>
