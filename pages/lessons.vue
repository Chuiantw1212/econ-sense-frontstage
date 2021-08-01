<template>
    <div class="container text-center">
        <h1>好書推薦</h1>
        <p class="m-0">一個面向一本入門，</p>
        <p class="m-0">每本都是精挑細選。</p>
        <hr />
        <section class="mt-5">
            <h2>全方位理財書</h2>
            <p>新手入門最佳解</p>
            <div class="row mt-1">
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="理財故事書"
                        subtitle="巴比倫最有錢的人"
                        productId="11100918455"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/babylon.jpeg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="有錢有閒"
                        subtitle="賺錢，也賺幸福"
                        productId="11100899131"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/millionaire.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="金錢 = 生命活力"
                        subtitle="跟錢好好相處"
                        productId="11100854970"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/your-money-or-your-life.jpeg"
                    ></Book>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>目標設定</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="投資自己"
                        subtitle="你花掉的錢都會自己流回來"
                        productId="11100868187"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/%E8%8A%B1%E6%8E%89%E7%9A%84%E9%8C%A2%E9%83%BD%E6%9C%83%E8%87%AA%E5%B7%B1%E6%B5%81%E5%9B%9E%E4%BE%86.jpeg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="均衡人生目標"
                        subtitle="一生幸福的人生企畫書"
                        productId="11100786472"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/efficiency.jpg"
                    ></Book>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>經營管理</h2>
            <div class="row">
                <!-- <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="自我管理"
                        subtitle="把時間當作朋友"
                        productId="11100841896"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/treatTimeAsFriend.jpeg"
                    ></Book>
                </div> -->
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="時間管理、目標管理"
                        subtitle="OTPR敏捷工作法"
                        productId="11100912211"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/OTPR.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="記帳、支付、信用卡"
                        subtitle="行動支付時代的金錢整理術"
                        productId="11100923100"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/daily.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card m-1 pb-4">
                        <div class="card-body">
                            <h3 class="card-title">節稅</h3>
                            <p class="card-subtitle text-muted">
                                國稅局節稅手冊
                            </p>
                            <p>
                                (
                                <a
                                    :href="`https://www.etax.nat.gov.tw/etwmain/web/ETW118W/CON/406/5140077482396615285?tagCode=`"
                                    target="_blank"
                                    >連結前往</a
                                >
                                )
                            </p>
                        </div>
                        <img
                            class="card__image"
                            src="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/tax.png"
                            alt="封面"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>資產配置</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="基金、ETF、資產配置"
                        subtitle="綠角的基金八堂課"
                        productId="11100788917"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/greenhorn.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="保險"
                        subtitle=" 醫生強烈建議你買的保險"
                        productId="11100900630"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/insurance.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="房地產"
                        subtitle="買一間會增值的房子"
                        productId="11100749070"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/realestate.jpeg"
                    ></Book>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>簡單生活</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="消費管理"
                        subtitle="精準購買"
                        productId="11100884641"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/buymeonce.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="斷捨離"
                        subtitle="新斷捨離"
                        productId="11100918482"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/%E6%96%B0%E6%96%B7%E6%8D%A8%E9%9B%A2.jpeg"
                    ></Book>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <Book
                        title="極簡主義"
                        subtitle="我們的極簡生活"
                        productId="11100828010"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/minimalist.jpeg"
                    ></Book>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head: {
        title: '常識經濟學 - 好書推薦'
    },
    components: {
        Book: () => import('./lessons/book.vue')
    }
}
</script>
<style lang="scss" scoped>
.card__image {
    align-self: center;
    max-width: 240px;
}
</style>