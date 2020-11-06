<template>
    <div class="container text-center py-5">
        <h1>你願意購買</h1>
        <h1>這樣的商品嗎</h1>
        <br />
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
                href="https://www.mol.gov.tw/topic/6025/13123/34950/"
                target="_blank"
                >勞退基金</a
            >
        </div>
        <br />
        <div>勞動部官網可以看到近15年來的平均收益率超過4%</div>
        <br />
        <img
            src="https://storage.googleapis.com/my-blog-287510.appspot.com/%E5%8B%9E%E9%80%80%E5%9F%BA%E9%87%91.jpg"
        />
        <br />
        <div>又因為提繳不納入年度薪資所得課稅的關係</div>
        <div>所得級距越高，節稅效果越明顯</div>
        <br />
        <img
            src="https://storage.googleapis.com/my-blog-287510.appspot.com/retire.jpg"
        />
        <br />
        <div>以國人薪資中位數490,000來計算</div>
        <div>絕大多數的人都可以達到5%的節稅效果</div>
        <br />
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">給付總額</th>
                    <th scope="col">
                        <div>給付總額</div>
                        <div>-薪資所得扣除額</div>
                        <div>-標準扣除額</div>
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
                    <td>節稅結果</td>
                    <td>
                        <div>29,400</div>
                        <div>(支付給未來的自己)</div>
                    </td>
                    <td></td>
                    <td>
                        <div>1,470</div>
                        <div>(紮紮實實少繳的稅金)</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>