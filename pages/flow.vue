<template>
    <div class="container text-center py-5">
        <h1>順向理財</h1>
        <p>不花心思的方法，才是好方法</p>
        <br />
        <h2>夢幻商品?</h2>
        <p class="m-0">你願意花多少錢購買以下的商品呢</p>
        <div class="row">
            <div class="col-lg-4">
                <Card>
                    <h2>政府擔保</h2>
                    <img src="@/assets/icon/protection.svg" alt="protection" />
                </Card>
            </div>
            <div class="col-lg-4">
                <Card>
                    <h2>每年4%成長</h2>
                    <img src="@/assets/icon/graphics.svg" alt="grow" />
                </Card>
            </div>
            <div class="col-lg-4">
                <Card>
                    <h2>退傭5%</h2>
                    <img src="@/assets/icon/refund.svg" alt="refund" />
                </Card>
            </div>
        </div>
        <br />
        <div>聽起來夢幻到你想報警抓我了對嗎？</div>
        <div>其實這不是秘密，只是大部分的人都沒注意到</div>
        <div>
            這是我國的<a
                href="https://www.mol.gov.tw/topic/3078/9686/22657/"
                target="_blank"
                >勞退基金</a
            >
        </div>
        <br />
        <div>
            勞動部官網可以看到<a
                href="https://www.mol.gov.tw/topic/6025/13123/34950/"
                target="_blank"
                >近15年來的平均收益率超過4%</a
            >
        </div>
        <div>又因為提繳不納入年度薪資所得課稅的關係</div>
        <div>所得級距越高，節稅效果越明顯</div>
        <div>以國人薪資中位數490,000來計算</div>
        <div>
            絕大多數的人都可以達到
            <a
                href="https://www.etax.nat.gov.tw/etwmain/front/ETW158W1"
                target="_blank"
            >
                5%的節稅效果
            </a>
        </div>
        <br />
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">薪水</th>
                    <th scope="col">
                        <div>薪水減去扣除額</div>
                    </th>
                    <th scope="col">5%所得稅</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>原始薪資</td>
                    <td>490,000</td>
                    <td>170,000</td>
                    <td>8,500</td>
                </tr>
                <tr>
                    <td>提繳6%</td>
                    <td>460,606</td>
                    <td>140,600</td>
                    <td>7,030</td>
                </tr>
                <tr>
                    <td class="align-middle">節稅結果</td>
                    <td class="align-middle">
                        <div>29,400</div>
                        <div>(支付給未來的自己)</div>
                    </td>
                    <td class="align-middle">-</td>
                    <td class="align-middle">
                        <div class="text-danger">1,470</div>
                        <div class="text-danger">(紮紮實實少繳的稅金)</div>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
        <!-- <div></div> -->
        <h2>月收入分配</h2>
        <br />
        <p>先來看一個人一輩子的收入曲線</p>
        <img
            class="flow__image"
            src="https://storage.googleapis.com/my-blog-287510.appspot.com/flow/income-curve-greyscale.jpg"
            alt="income-curve"
        />
        <p class="m-0">人大約從25開始工作到65歲退休，並且在85歲上天堂</p>
        <p class="m-0">那即是40年的勞動生涯與20年的退休生活</p>
        <p class="m-0">如果退休的生活品質要與退休前同等</p>
        <p class="m-0">勞動生涯花掉400萬的人，退休應該會花掉200萬</p>
        <p class="m-0">意思就是一個人每花2塊錢都應該存下1塊錢用作退休</p>
        <p class="m-0">再加上應急的救命錢，可以得到以下粗略規劃</p>
        <br />
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">薪水6成</th>
                    <th scope="col">薪水3成</th>
                    <th scope="col">薪水1成 + 目標儲蓄金</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="align-middle">存放帳戶</td>
                    <td class="align-middle">
                        <p class="m-0">月支出帳戶</p>
                        <p class="m-0">只綁一張信用卡</p>
                    </td>
                    <td class="align-middle">投資帳戶</td>
                    <td class="align-middle">
                        <p class="m-0">年支出帳戶</p>
                        <!-- <p class="m-0">可以不要信用卡</p> -->
                    </td>
                </tr>
                <tr>
                    <td class="align-middle">科目</td>
                    <td class="align-middle">
                        <p class="m-0">食衣住行樂</p>
                    </td>
                    <td class="align-middle">
                        <p class="m-0">投資自己</p>
                        <p class="m-0">金融、房地產、創業</p>
                    </td>
                    <td class="align-middle">
                        <p class="m-0">保險、稅務</p>
                        <p class="m-0">3年內的目標儲蓄(結婚、生子等)</p>
                        <p class="m-0">緊急預備金等等</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="m-0">但需要注意投資的錢順位應該放在開銷的錢之前</p>
        <p class="m-0">
            任何情況下，一個人應該先投資自己，然後才是開銷提升自己的生活水準
        </p>
        <br />
        <h2>帳戶管理</h2>
        <p class="m-0">首先月支出帳戶需要關注的領現與信用卡的便利性</p>
        <p class="m-0">信用卡就看個人習慣，比較推薦現金回饋的信用卡，最簡單</p>
        <br />
        <p class="m-0">投資帳戶則最好選集保收付銀行</p>
        <p class="m-0">買賣基金不會有匯費產生</p>
        <p>如果日後成為財富管理會員，還能有跨行提款免費的優惠</p>
        <br />
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">月支出帳戶</th>
                    <th scope="col">投資帳戶</th>
                    <th scope="col">年支出帳戶</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="align-middle">考量</td>
                    <td class="align-middle">
                        <p class="m-0">ATM密集度</p>
                        <p class="m-0">信用卡功能</p>
                    </td>
                    <td class="align-middle">
                        <p class="m-0">集保收付銀行</p>
                        <p class="m-0">財富管理方案</p>
                    </td>
                    <td class="align-middle">
                        <p class="m-0">方便即可</p>
                        <!-- <p class="m-0">可以不要信用卡</p> -->
                    </td>
                </tr>
                <tr>
                    <td class="align-middle">銀行推薦</td>
                    <td class="align-middle">
                        <p class="m-0">領現便利：中信、國泰、台新</p>
                        <p class="m-0">信用卡就看個人考量</p>
                    </td>
                    <td class="align-middle">
                        華南、兆豐、台新、永豐、富邦、中信、國泰、第一
                    </td>
                    <td class="align-middle">不拘</td>
                </tr>
            </tbody>
        </table>
        <br />
        <h2>手癢又懶得記帳?</h2>
        <p class="m-0">金融科技與法規的進步</p>
        <p class="m-0">讓不動手就能記帳這件事情成為現實</p>
        <a href="https://moneybook.com.tw/?referrer=CQxbIc" target="_blank">
            <img
                src="https://storage.googleapis.com/my-blog-287510.appspot.com/flow/moneybook.jpg"
            />
        </a>
        <p class="m-0">
            <a href="https://moneybook.com.tw/?referrer=CQxbIc" target="_blank"
                >麻布記帳</a
            >綁定網路銀行權限，自動同步更新所有收支，從此不再需要紀錄發票
        </p>
        <p class="m-0">這樣的金融服務，每個月月費要收多少呢</p>
        <br />
        <p class="m-0 text-danger">免費</p>
        <br />
        <!-- <p class="m-0">好到不像真的</p>
        <p class="m-0">
            可是他
            <a href="https://moneybook.com.tw/?referrer=CQxbIc" target="_blank">
                真的是真的
            </a>
        </p> -->
        <p class="m-0">
            透過
            <a href="https://moneybook.com.tw/?referrer=CQxbIc" target="_blank"
                >連結</a
            >
            取得15天免費同步
        </p>
        <p class="m-0">15天過後也只是換成要手動去按某一顆按鈕同步而已</p>
        <p class="m-0">功能依舊強大，而且依舊免費</p>
    </div>
</template>
<style lang="scss" scoped>
.flow__image {
    width: 80%;
}
</style>