<template>
    <div class="container text-center">
        <h1>資產配置</h1>
        <p class="m-0">時間是你的朋友，而衝動則是你的敵人。</p>
        <i>— Vanguard創辦人　約翰‧柏格（John C. Bogle）</i>
        <hr />
        <h2>股利所得抵稅</h2>
        <p class="m-0">
            <a
                href="https://www.etax.nat.gov.tw/etwmain/web/ETW118W/CON/460/7811567922763436027?tagCode="
                target="_blank"
            >
                台灣股利金額的8.5%可計算抵減稅額。
            </a>
        </p>
        <p>如果一個人的所得税級距是5%，就相當於"多折抵"3.5%，甚至可以退稅。</p>
        <div class="row">
            <div class="col">
                <img
                    class="width--100"
                    src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/tax2020.png"
                />
            </div>
        </div>
        <br />
        <h2>商品訊息</h2>
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th>商品</th>
                    <td>建議通路</td>
                    <td>內部報酬率(IRR)</td>
                </tr>
                <tr>
                    <th>指數型ETF、複委託</th>
                    <td>
                        <p class="m-0">
                            <a
                                href="https://www.yuanta.com.tw/file-repository/content/lending/mb/index_mobile.html"
                                target="_blank"
                            >
                                元大
                            </a>
                            、
                            <a
                                href="https://www.kgieworld.com.tw/Stock/stock_lending/index.html"
                                target="_blank"
                            >
                                凱基
                            </a>
                            、
                            <a
                                href="https://www.fubon.com/securities/hot_new/so-easy/lend.html"
                                target="_blank"
                            >
                                富邦
                            </a>
                        </p>
                    </td>
                    <td>8%</td>
                </tr>
                <tr>
                    <th>太陽能板</th>
                    <td>
                        <p class="m-0">
                            <a
                                rel="noreferrer"
                                href="www.sunnyfounder.com/i/F98QOW"
                                target="_blank"
                            >
                                陽光伏特加家
                            </a>
                        </p>
                    </td>
                    <td>6%</td>
                </tr>
                <tr>
                    <th>p2p網路借貸</th>
                    <td>
                        <p class="m-0">
                            <a
                                rel="noreferrer"
                                href="https://www.lnb.com.tw/activity/mgm/1/CGBY113/1161359209"
                                target="_blank"
                            >
                                LnB信用市集
                            </a>
                        </p>
                    </td>
                    <td>5%</td>
                </tr>
            </tbody>
        </table>
        <br />
        <h2>通路訊息</h2>
        <p>給你滿滿的大平台。</p>
        <br />
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="card my-1">
                    <a
                        rel="noreferrer"
                        href="https://www.lnb.com.tw/activity/mgm/1/CGBY113/1161359209"
                        target="_blank"
                    >
                        <img
                            alt="Lnb信用市集"
                            class="card__image"
                            src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/Lnb-logo-2.jpg"
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">LnB信用市集</h5>
                        <p class="text-left">
                            台灣最好的P2P借貸平台，不斷的擴充選項給投資人，自動下單免盯盤的蘿菠投方案，更是大舉把其他平台給甩在後面。點擊Logo獲取100元回饋金。
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card my-1">
                    <a
                        rel="noreferrer"
                        href="https://www.sunnyfounder.com/i/F98QOW"
                        target="_blank"
                    >
                        <img
                            alt="陽光伏特家"
                            class="card__image"
                            src="https://storage.googleapis.com/my-blog-287510.appspot.com/wealth/sunnyfounder.jpg"
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">陽光伏特家</h5>
                        <p class="text-left">
                            出資太陽能農場，不定期會釋出案件，也有監控系統監看每個電廠的發電狀況，平均收益更高達6%。且視同租賃所得，稅務優勢導致幾乎免稅。點擊Logo獲取100元回饋金。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    head: {
        title: '常識經濟學 - 資產配置'
    },
    methods: {
        openEmail() {
            window.open('mailto:chuiantw1212jobs@gmail.com')
        }
    }
}
</script>
<style lang="scss" scoped>
.width--100 {
    width: 100%;
    display: block;
}
.card__image {
    align-self: center;
    max-width: 240px;
}
</style>