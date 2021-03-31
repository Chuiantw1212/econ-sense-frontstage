<template>
    <div class="container text-center">
        <h1>勞退試算</h1>
        <p class="m-0">不算不知道，一算嚇一跳。</p>
        <i>— 某不知名網頁工程師　朱老闆</i>
        <hr />
        <div class="row justify-content-center">
            <div class="col-12 col-sm-6 col-md-6">
                <h4>勞退試算</h4>
                <InputNumber
                    v-model="monthlyIncome"
                    title="個人目前薪資（月）"
                ></InputNumber>
                <InputNumber
                    v-model="internalReturn"
                    title="預估個人退休金投資報酬率（年）"
                ></InputNumber>
                <InputNumber
                    v-model="incomeYOY"
                    title="預估個人薪資成長率（年）"
                ></InputNumber>
                <InputNumber
                    v-model="depositRate"
                    title="退休金提繳率（月）"
                ></InputNumber>
                <InputNumber
                    v-model="careerLength"
                    title="工作年資："
                ></InputNumber>
                <InputRadios
                    v-model="retireYear"
                    title="退休年齡："
                    :options="retireYearOptions"
                ></InputRadios>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-6">
                <h4>勞退試算預設值說明</h4>
                <ul class="text-left">
                    <li>
                        每月經常薪資：2021年的國人薪資中位數約莫為500,000元，換算每月的經常性薪資約莫是42000左右。
                    </li>
                    <li>
                        預估個人退休金投資報酬率：4.62%，引用自勞動部2021年3月的<a
                            href="https://www.mol.gov.tw/topic/6025/13123/34950/#:~:text=%E6%88%AA%E8%87%B3109%E5%B9%B412%E6%9C%88,%E6%94%B6%E7%9B%8A%E7%8E%874.62%EF%BC%85%E3%80%82"
                            target="_blank"
                            >經營績效</a
                        >。
                    </li>
                    <li>
                        薪資每年成長幅度：2012年的國人薪資中位數為442,000元，2019年國人薪資中位數為498,000，回推每年的調幅約為1.72%。
                    </li>
                </ul>
            </div>
        </div>
        <p>
            最新資訊可以從<a
                href="https://earnings.dgbas.gov.tw/experience_sub_01.aspx"
                target="_blank"
                >行政院主計總處</a
            >取得，
        </p>
        <img
            class="container__image"
            src="https://storage.googleapis.com/my-blog-287510.appspot.com/pension/middle%20salary.png"
        />
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            monthlyIncome: 498000,
            internalReturn: 4.62,
            incomeYOY: 1.72,
            depositRate: 6,
            careerLength: 35,
            retireYear: 24,
            retireYearOptions: [
                {
                    text: '60',
                    value: 24
                },
                {
                    text: '65',
                    value: 20
                }
            ]
        }
    },
    components: {
        InputNumber: () => import('@/components/input/InputNumber.vue')
    }
}
</script>
<style lang="scss" scoped>
.container__image {
    max-width: 100%;
}
</style>