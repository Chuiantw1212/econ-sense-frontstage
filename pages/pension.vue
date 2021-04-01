<template>
    <div class="container text-center">
        <h1>勞退試算</h1>
        <p class="m-0">不算不知道，一算嚇一跳。</p>
        <i>— 某不知名網頁工程師　朱老闆</i>
        <hr />
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退專戶試算</h2>
                <InputNumber
                    v-model="monthlyIncome"
                    title="個人目前薪資（元/每月）"
                    @change="updateChart()"
                ></InputNumber>
                <InputNumber
                    v-model="careerLength"
                    title="屆退時預期勞退年資（年）"
                    @change="updateChart()"
                ></InputNumber>
                <InputNumber
                    v-model="internalRateReturn"
                    title="預估個人退休金投資報酬率（%/每年）"
                    disabled
                ></InputNumber>
                <InputNumber
                    v-model="incomeYOY"
                    title="預估個人薪資成長率（%/每年）"
                    disabled
                ></InputNumber>
                <InputNumber
                    v-model="depositRateMannul"
                    title="退休金提繳率（雇主提撥6%，可再自提6%，最高12%）"
                    @change="updateChart()"
                ></InputNumber>
                <p class="text-left">累積退休金：{{ getAccountValue() }}元</p>
                <canvas id="pensionAccount"></canvas>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退年金試算</h2>
                <!-- <p>勞退年金三個變數，專戶總額、餘命、利率</p> -->
                <InputRadios
                    v-model="retireYear"
                    title="退休年齡（歲）"
                    :options="retireYearOptions"
                    @change="updateChart()"
                ></InputRadios>
                <InputNumber
                    v-model="bankRate"
                    title="當地銀行二年期定期存款利率（%/每年）"
                    disabled
                ></InputNumber>
                <p class="text-left">
                    自提前每月退休金：{{
                        getMonthlyIncome(this.depositDefaultRate)
                    }}元
                </p>
                <p class="text-left">
                    自提後退休金：{{
                        getMonthlyIncome(this.depositRateMannul)
                    }}元
                </p>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8">
                <h4>勞退試算預設值說明</h4>
                <ul class="text-left">
                    <li>
                        每月經常薪資：2021年的國人薪資中位數約莫為500,000元，換算每月的經常性薪資約莫是42000左右。
                    </li>
                    <li>
                        退休年齡：2021年的國人預期退休年齡中位數約為65歲。且餘命參考自<a
                            href="https://www.bli.gov.tw/0018437.html"
                            target="_blank"
                            >勞退試算</a
                        >
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
import Chart from 'chart.js'
export default {
    data: function () {
        return {
            monthlyIncome: 41500,
            internalRateReturn: 4.62,
            incomeYOY: 1.72,
            depositDefaultRate: 6,
            depositRateMannul: 12,
            careerLength: 35,
            retireYear: 20,
            bankRate: 0.987,
            retireYearOptions: [
                {
                    text: '60',
                    value: 24
                },
                {
                    text: '65',
                    value: 20
                },
                {
                    text: '70',
                    value: 17
                }
            ],
            pensionChart: null,
            defaultPensionAmount: 0,
        }
    },
    components: {
        InputNumber: () => import('@/components/input/InputNumber.vue')
    },
    mounted() {
        this.initChart()
    },
    methods: {
        getAccountValue() {
            const data = this.getPensionEndValue(this.depositRateMannul)
            const accountValue = data[data.length - 1]
            return accountValue.toLocaleString()
        },
        getPresentValue(lifeExpectancy = 20) {
            const r = 1 + (0.987 / 100)
            const fraction = 1 - Math.pow(1 / r, lifeExpectancy)
            const deno = 12 * (Math.pow(r, 1 / 12) - 1)
            const presentValue = fraction / deno * Math.pow(r, 1 / 12)
            return presentValue
        },
        getMonthlyIncome(depositRateMannul) {
            const accumulations = this.getPensionEndValue(depositRateMannul)
            const accumulateResult = accumulations[accumulations.length - 1]
            const annuity = this.getPresentValue(this.retireYear)
            let income = accumulateResult / annuity / 12
            return Number(income.toFixed(0))
        },
        getPensionEndValue(depositDefaultRate) {
            let annualSavings = this.monthlyIncome * 12 * depositDefaultRate * 0.01
            let totalAmount = 0
            const data = []
            for (let i = 0; i < this.careerLength; i++) {
                totalAmount *= 1 + (this.internalRateReturn / 100)
                totalAmount += annualSavings
                data.push(totalAmount)
                annualSavings *= 1 + (this.incomeYOY / 100)
            }
            const wholeData = data.map(number => {
                return Number(number.toFixed(0))
            })
            // const accumulateResult = wholeData[wholeData.length - 1]
            // this.defaultPensionAmount = accumulateResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
            return wholeData
        },
        initChart() {
            const labels = []
            for (let i = 0; i < this.careerLength; i++) {
                labels.push(`${i + 1}年`)
            }
            const backgroundColorDefault = []
            for (let i = 0; i < this.careerLength; i++) {
                backgroundColorDefault.push('black')
            }
            const backgroundColorManuual = []
            for (let i = 0; i < this.careerLength; i++) {
                backgroundColorManuual.push('#4472c4')
            }
            this.pensionChart = new Chart('pensionAccount', {
                type: 'bar',
                data: {
                    labels,
                    datasets: [
                        {
                            label: '雇主提撥6%',
                            data: this.getPensionEndValue(this.depositDefaultRate),
                            backgroundColor: backgroundColorDefault,
                            // borderColor: [
                            //     'rgba(255, 99, 132, 1)',
                            //     'rgba(54, 162, 235, 1)',
                            //     'rgba(255, 206, 86, 1)',
                            //     'rgba(75, 192, 192, 1)',
                            //     'rgba(153, 102, 255, 1)',
                            //     'rgba(255, 159, 64, 1)'
                            // ],
                            // borderWidth: 1
                        },
                        {
                            label: `雇主6%+自提${this.depositRateMannul - 6}%`,
                            data: this.getPensionEndValue(this.depositRateMannul),
                            backgroundColor: backgroundColorManuual
                        }
                    ]
                },
                options: {
                    // legend: {
                    //     display: false
                    // },
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                    }
                }
            })
        },
        updateChart() {
            const pensionValues = this.getPensionEndValue(this.depositRateMannul)
            this.pensionChart.data.datasets[1].data = pensionValues
            this.pensionChart.update()
        },
    }
}
</script>
<style lang="scss" scoped>
.container__image {
    max-width: 100%;
}
</style>