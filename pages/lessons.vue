<template>
    <div class="container text-center py-5">
        <h1>好書推薦</h1>
        <p class="m-0">一個面向一本書，</p>
        <p class="m-0">每本都是精挑細選。</p>
        <hr />
        <section>
            <h2>自我定位</h2>
            <div class="row">
                <div class="col-12 col-md-4">
                    <Book
                        title="自我覺察"
                        subtitle="大器可以晚成"
                        productId="11100884682"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/latebloomers.jpeg"
                    ></Book>
                </div>
                <div class="col-12 col-md-4">
                    <Book
                        title="累積專業"
                        subtitle="你花掉的錢都會自己流回來"
                        productId="11100868187"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/%E8%8A%B1%E6%8E%89%E7%9A%84%E9%8C%A2%E9%83%BD%E6%9C%83%E8%87%AA%E5%B7%B1%E6%B5%81%E5%9B%9E%E4%BE%86.jpeg"
                    ></Book>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>經營管理</h2>
            <div class="row">
                <div class="col-12 col-md-4">
                    <Book
                        title="時間管理、目標管理"
                        subtitle="OTPR敏捷工作法"
                        productId="11100912211"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/OTPR.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-4">
                    <Book
                        title="記帳、收支管理"
                        subtitle="行動支付時代的金錢整理術"
                        productId="11100923100"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/daily.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-4">
                    <Book
                        title="聰明消費"
                        subtitle="精準購買"
                        productId="11100884641"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/buymeonce.jpg"
                    ></Book>
                </div>
            </div>
        </section>
        <section class="mt-5">
            <h2>維持資產品質</h2>
            <div class="row">
                <div class="col-12 col-md-4">
                    <Book
                        title="基金、ETF"
                        subtitle="綠角的基金八堂課"
                        productId="11100788917"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/greenhorn.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-4">
                    <Book
                        title="保險"
                        subtitle=" 醫生強烈建議你買的保險"
                        productId="11100900630"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/insurance.jpg"
                    ></Book>
                </div>
                <div class="col-12 col-md-4">
                    <Book
                        title="房地產"
                        subtitle="張金鶚的房產七堂課"
                        productId="11100202908"
                        imgSrc="https://storage.googleapis.com/my-blog-287510.appspot.com/lessons/realestate.jpg"
                    ></Book>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    components: {
        Book: () => import('./lessons/book.vue')
    }
}
</script>