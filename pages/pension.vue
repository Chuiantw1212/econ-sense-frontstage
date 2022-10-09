<template>
    <div class="container text-center">
        <h1>勞退試算</h1>
        <p class="m-0">不算不知道，一算嚇一跳。</p>
        <i>— 某不知名網頁工程師　朱老闆</i>
        <hr />
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6">
                <h2>儲蓄率試算</h2>
                <InputRadio v-model="education" name="教育程度" :items="pensionItems"></InputRadio>
                <canvas id="salaryStepChart"></canvas>
            </div>
        </div>
        <hr />

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
            salaryStepChart: null
        }
    },
    components: {
        InputNumber: () => import('@/components/input/InputNumber.vue')
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const data = {
                labels: ['25~29', '30~39', '40~49', '50~64'],
                datasets: [
                    {
                        label: '統計生涯中位數薪資',
                        data: [479000, 559000, 748000, 814000],
                        borderColor: 'rgb(255, 99, 132)',
                        fill: false,
                        stepped: true,
                    }
                ]
            }
            this.salaryStepChart = new Chart('salaryStepChart', {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    interaction: {
                        intersect: false,
                        axis: 'x'
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
                        }
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.container__image {
    max-width: 100%;
}
</style>