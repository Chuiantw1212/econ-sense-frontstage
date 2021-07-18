<template>
    <div class="container text-center">
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
            <!-- <h2>財富框架</h2> -->
            <div class="row">
                <div class="col-lg-4">
                    <router-link
                        class="home__link"
                        :to="'/target'"
                        :tag="'div'"
                    >
                        <Card>
                            <h4>自我定位</h4>
                            <img
                                src="@/assets/icon/machine-learning.svg"
                                alt="money-flow"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-lg-4">
                    <router-link
                        class="home__link"
                        :to="'/management'"
                        :tag="'div'"
                    >
                        <Card>
                            <h4>經營管理</h4>
                            <img
                                src="@/assets/icon/flow-chart.svg"
                                alt="invest-self"
                            />
                        </Card>
                    </router-link>
                </div>
                <div class="col-lg-4">
                    <router-link
                        class="home__link"
                        :to="'/assets'"
                        :tag="'div'"
                    >
                        <Card>
                            <h4>資產配置</h4>
                            <img
                                src="@/assets/icon/invest.svg"
                                alt="invest-money"
                            />
                        </Card>
                    </router-link>
                </div>
            </div>
            <hr />
            <div class="row justify-content-center mt-5">
                <div class="col col-md-8 text-left">
                    <h3>財富是你人生的解題秘技嗎？</h3>
                    <p>
                        一路上成長過程，我們幾乎都在為了準備考試，沒有多少時間能夠自我探索。偏偏社會要我們對於那些學校沒有教過的事物，總是期望我們能夠滿分通過，人生有哪些考題給我們足夠的時間和資訊—足以讓我們的人生考試順利通過，甚至讓我們畢業？如果要找一個是非分明的答案，恐怕只剩下死亡是最確定的。
                    </p>
                    <p>
                        在於我花費許多時間金錢探索自我以後，就像是對我來說，財富應當是一種籌碼，用來投資在你想要體驗的人生上，而不是讓你為了賺錢而忍受人生！然而財富自由的定義，卻意味著沒有任何捷徑和貪心可以抵達的地方，而且它勢必成為一種責任來回應你的能力。
                    </p>
                    <p>
                        就像現在的我，我自願做這件事，將財務知識透明化，讓那些資訊不對稱的密碼需要被解放，也讓專業變成常識｡當你在面對危機時，我期許這麼做可以使你少一樣財務上的絆腳石，並且足以讓你成為與危機匹配的對手，甚至讓你在危機中識別了機會的珍貴體驗。
                    </p>
                    <p>
                        我在常識經濟學這個網站分享了許多財務上的相關知識，希望能夠給你一種判斷思維，幫助對美好的話術有免疫力和思考的空間，真正幫助你往後的選擇能夠達到人生自由。希望你可以跟我一起發現財富最大的秘密：人生不再視為一種是非題，而是一道不斷擴寫的問答題。
                    </p>
                </div>
            </div>
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
.home__link {
    cursor: pointer;
}
</style>
