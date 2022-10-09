<template>
    <div class="container text-center">
        <h1>勞退試算</h1>
        <p class="m-0">不算不知道，一算嚇一跳。</p>
        <i>— 某不知名網頁工程師　朱老闆</i>
        <hr />
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退專戶試算</h2>
                <InputNumber v-model="monthlyIncome" title="個人目前薪資（元/每月）" @change="updateChart()"></InputNumber>
                <InputNumber :value="getEstimatedIncomeTax()" title="預估每年綜所稅" :disabled="true" @change="updateChart()">
                </InputNumber>
                <InputNumber v-model="age" title="勞退提繳起算年齡" @change="updateCareerLength(), updateChart()"></InputNumber>
                <InputNumber v-model="retireYear" title="欲申請退休之年齡（至少60）" @change="updateCareerLength(), updateChart()">
                </InputNumber>
                <InputNumber v-model="careerLength" title="預估勞退年資（年）" disabled @change="updateChart()"></InputNumber>
                <InputNumber v-model="internalRateReturn" title="預估個人退休金投資報酬率（%/每年）"></InputNumber>
                <InputNumber value="6" title="雇主提撥6%" disabled></InputNumber>
                <InputNumber v-model="depositRateMannul" title="自行提撥率（最多自提6%）" :maximumValue="6"
                    @change="updateChart()"></InputNumber>
                <p class="text-left">累積退休金：{{ getAccountValue().toLocaleString() }}元</p>
                <p class="text-left">累積節稅效益:{{ getTaxDeduction() }}</p>
                <canvas id="pensionAccount"></canvas>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退年金試算</h2>
                <p class="text-left">累積退休金：{{ getAccountValue().toLocaleString() }}元</p>
                <InputNumber v-model="bankRate" title="當地銀行二年期定期存款利率（%/每年）"></InputNumber>
                <p class="text-left">
                    自提前每月退休金：{{ getMonthlyIncome(this.depositDefaultRate).toLocaleString() }}元
                </p>
                <p class="text-left">
                    自提後退休金：{{ getMonthlyIncome(this.depositRateMannul + 6).toLocaleString() }}元
                </p>
                <p class="text-left">退職所得免稅額：每年78,1000元（每月65,000）</p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退一次金試算</h2>
                <p class="text-left">累積退休金：{{ getAccountValue().toLocaleString() }}元</p>
                <p class="text-left">當年度退職所得申報： {{ getAnnulIncome().toLocaleString() }}</p>
                <p class="text-left">
                    當年度所得稅試算：
                    {{ estimateOneTimeTax().toLocaleString() }}
                </p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>勞退併入遺產</h2>
                <p class="text-left">免稅額：1,200萬元。</p>
                <p class="text-left">課稅級距金額：遺產淨額5,000萬元以下者，課徵10％。</p>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8">
                <h2>勞退試算預設值說明</h2>
                <ul class="text-left">
                    <li>綜所稅以單身試算扣除一般扣除額120,000，另外僅扣除薪資特別扣除額</li>
                    <li>
                        每月經常薪資：2021年的國人薪資中位數約莫為500,000元，換算每月的經常性薪資約莫是42000左右。
                        最新資訊可以從<a href="https://earnings.dgbas.gov.tw/experience_sub_01.aspx"
                            target="_blank">行政院主計總處</a>取得。
                    </li>
                    <li>
                        退休年齡：2021年的國人預期退休年齡中位數約為65歲。且餘命參考自<a href="https://www.bli.gov.tw/0018437.html"
                            target="_blank">勞退試算</a>
                    </li>
                    <li>
                        預估個人退休金投資報酬率：4.62%，引用自勞動部2021年3月的<a
                            href="https://www.mol.gov.tw/topic/6025/13123/34950/#:~:text=%E6%88%AA%E8%87%B3109%E5%B9%B412%E6%9C%88,%E6%94%B6%E7%9B%8A%E7%8E%874.62%EF%BC%85%E3%80%82"
                            target="_blank">經營績效</a>。
                    </li>
                </ul>
            </div>
        </div>
        <img class="container__image"
            src="https://storage.googleapis.com/my-blog-287510.appspot.com/pension/middle%20salary.png" />
        <!-- <div class="row justify-content-center text-left">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>最低儲蓄率計算機</h2>
                <h3>主計處統計薪資</h3>
                <InputRadio v-model="education" name="教育程度" :items="pensionItems"></InputRadio>
            </div>
        </div> -->
        <hr />
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>中華民國退休基金協會試算</h2>
                <p>點擊圖片開始試算</p>
                <a href="https://rfa.pension.org.tw/RetireComputer-Person/startpage.php" target="_blank">
                    <img src="@/assets/pension.png" /></a>
            </div>
        </div>

    </div>
</template>
<script>
import Chart from 'chart.js'
import lifeExpectancy from '@/libs/lifeExpectancy.js'
export default {
    head: {
        title: '常識經濟學 - 勞退試算'
    },
    data: function () {
        return {
            education: null,
            pensionItems: [
                {
                    text: '學士',
                    value: 'bachelor'
                },
                {
                    text: '碩士',
                    value: 'master'
                },
            ],
            incomeData: {
                bachelor: ['47.9', '55.9', '74.8', '81.4'],
                master: ['68.8', '90.2', '120.2', '129.2']
            },
            age: 40,
            monthlyIncome: 41500,
            internalRateReturn: 4.62,
            // incomeYOY: 1.72,
            depositDefaultRate: 6,
            depositRateMannul: 6,
            careerLength: 25,
            retireYear: 65,
            bankRate: 0.987,
            taxFreeUnit: 18,
            pensionChart: null,
            defaultPensionAmount: 0,
            // 節稅效果
            estimatedIncomeTax: 0,
            taxDiscount: 0,
        }
    },
    components: {
        InputNumber: () => import('@/components/input/InputNumber.vue')
    },
    mounted() {
        this.careerLength = Math.max(0, this.retireYear - this.age)
        this.initChart()
        this.updateChart()
    },
    methods: {
        getTaxDeduction() {
            const annulIncome = this.monthlyIncome * 12 - 408000
            let depositPart = this.monthlyIncome * 12 * this.depositRateMannul
            let taxRate = 0
            if (0 <= annulIncome < 540000) {
                taxRate = 5
            } else if (540000 <= annulIncome < 1210000) {
                taxRate = 12
            } else if (1210000 <= annulIncome < 2420000) {
                taxRate = 20
            } else if (2420000 <= annulIncome < 4530000) {
                taxRate = 30
            } else {
                taxRate = 40
            }
            let taxDeduction = Math.floor(depositPart * taxRate / 100)
            return taxDeduction.toLocaleString()
        },
        getEstimatedIncomeTax() {
            const annulIncome = this.monthlyIncome * 12 - 408000
            if (0 <= annulIncome < 540000) {
                return Math.floor(annulIncome * 0.05)
            } else if (540000 <= annulIncome < 1210000) {
                return Math.floor(annulIncome * 0.12 - 37800)
            } else if (1210000 <= annulIncome < 2420000) {
                return Math.floor(annulIncome * 0.20 - 134600)
            } else if (2420000 <= annulIncome < 4530000) {
                return Math.floor(annulIncome * 0.30 - 376600)
            } else {
                return Math.floor(annulIncome * 0.40 - 829600)
            }
        },
        estimateOneTimeTax() {
            const getAnnulIncome = this.getAnnulIncome()
            if (0 <= getAnnulIncome < 540000) {
                return Math.floor(getAnnulIncome * 0.05)
            } else if (540000 <= getAnnulIncome < 1210000) {
                return Math.floor(getAnnulIncome * 0.12 - 37800)
            } else if (1210000 <= getAnnulIncome < 2420000) {
                return Math.floor(getAnnulIncome * 0.20 - 134600)
            } else if (2420000 <= getAnnulIncome < 4530000) {
                return Math.floor(getAnnulIncome * 0.30 - 376600)
            } else {
                return Math.floor(getAnnulIncome * 0.40 - 829600)
            }
        },
        getLifeRemain() {
            const retireYear = Math.max(60, this.retireYear)
            const lifeRemain = lifeExpectancy[retireYear]
            return lifeRemain
        },
        updateCareerLength() {
            const retireYear = Math.max(this.retireYear, this.age)
            this.careerLength = retireYear - Number(this.age)
        },
        getTaxFreeAmount() {
            const taxFreeUnit = 180000
            const careerLength = Math.max(0, this.careerLength)
            const taxFreeAmount = taxFreeUnit * careerLength
            return taxFreeAmount
        },
        getAnnulIncome() {
            let income = this.getAccountValue()
            const taxFreeAmount = this.getTaxFreeAmount()
            // 免稅額
            let taxAmount = 0
            income -= taxFreeAmount
            if (income <= 0) {
                return taxAmount
            }
            // 超過免稅額半數課稅
            taxAmount += Math.min(taxFreeAmount, income) / 2
            income -= taxFreeAmount
            if (income <= 0) {
                return taxAmount
            }
            // 超過全數課稅
            taxAmount += income
            return taxAmount
        },
        getAccountValue() {
            const data = this.getPensionEndValue(this.depositRateMannul + 6)
            if (!data.length) {
                return 0
            }
            const accountValue = data[data.length - 1]
            return accountValue
        },
        getPresentValue(lifeExpectancy = 20) {
            const r = 1 + (0.987 / 100)
            const fraction = 1 - Math.pow(1 / r, lifeExpectancy)
            const deno = 12 * (Math.pow(r, 1 / 12) - 1)
            const presentValue = fraction / deno * Math.pow(r, 1 / 12)
            return presentValue
        },
        getMonthlyIncome(depositRateMannul) {
            const rateMannual = Math.min(depositRateMannul, 12)
            const accumulations = this.getPensionEndValue(rateMannual)
            const accumulateResult = accumulations[accumulations.length - 1]
            const lifeExpectancy = this.getLifeRemain(this.retireYear)
            const annuity = this.getPresentValue(lifeExpectancy)
            if (!accumulateResult || !annuity) {
                return 0
            }
            let income = accumulateResult / annuity / 12
            return Number(income.toFixed(0))
        },
        getPensionEndValue(depositDefaultRate) {
            let annualSavings = this.monthlyIncome * 12 * depositDefaultRate * 0.01
            let totalAmount = 0
            const data = []
            for (let i = 0; i < Number(this.careerLength); i++) {
                totalAmount *= 1 + (this.internalRateReturn / 100)
                totalAmount += annualSavings
                data.push(totalAmount)
                // annualSavings *= 1 + (this.incomeYOY / 100)
            }
            const wholeData = data.map(number => {
                return Number(number.toFixed(0))
            })
            return wholeData
        },
        initChart() {
            this.pensionChart = new Chart('pensionAccount', {
                type: 'bar',
                options: {
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                    }
                }
            })
        },
        updateChart() {
            const labels = []
            const careerLength = Number(this.careerLength)
            for (let i = 0; i < careerLength; i++) {
                labels.push(`年資${i + 1}年`)
            }
            const backgroundColorDefault = []
            for (let i = 0; i < careerLength; i++) {
                backgroundColorDefault.push('black')
            }
            const backgroundColorManuual = []
            for (let i = 0; i < careerLength; i++) {
                backgroundColorManuual.push('#4472c4')
            }
            const datasets = [
                {
                    label: '雇主提撥6%',
                    data: this.getPensionEndValue(this.depositDefaultRate),
                    backgroundColor: backgroundColorDefault,
                },
                {
                    label: `雇主6%+自提${this.depositRateMannul}%`,
                    data: this.getPensionEndValue(this.depositRateMannul + 6),
                    backgroundColor: backgroundColorManuual
                }
            ]
            this.pensionChart.data = {
                labels,
                datasets
            }
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