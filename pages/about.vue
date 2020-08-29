<template>
    <div class="container pb-5">
        <MyPageHeader :src="imageUrl" name_zh="朱奕安" name_en="(Ian Chu)">
            <img
                alt="myAvatar"
                src="https://storage.googleapis.com/my-blog-287510.appspot.com/myAvatar.png"
            />
        </MyPageHeader>
        <Card class="my-social">
            <div class="row justify-content-center p-2">
                <a
                    class="d-flex justify-content-center mx-2"
                    href="https://github.com/Chuiantw1212"
                    target="_blank"
                    rel="noopener"
                >
                    <i class="my-social__icon fab fa-github"></i>
                    <span class="align-self-center ml-1">chuiantw1212</span>
                </a>
                <div class="d-flex justify-content-center mx-2">
                    <i class="my-social__icon fab fa-line"></i>
                    <span class="align-self-center ml-1">chuian1212</span>
                </div>
            </div>
            <div class="row justify-content-center p-2">
                <h6 class="col-12 font-weight-bold">美國東北大學Informatics (GPA:3.71)</h6>
                <h6 class="col-12 font-weight-bold">金融專精網頁工程師/ 手作愛好者</h6>
                <a class="col-12" href="mailto:chuiantw1212@gmail.com">chuiantw1212@gmail.com</a>
            </div>
        </Card>
        <MyTheme title="獨立開發">
            <Card class="col-md-6 col-lg-4 mt-3">
                <img
                    alt="oldPortfolio"
                    src="https://storage.googleapis.com/my-blog-287510.appspot.com/oldPortfolio.png"
                />
                <h3>
                    <a href="https://deedoo.appspot.com/#/" target="_blank" rel="noopener">舊程式教學網站</a>
                </h3>
                <p>舊的個人網站，原本用來教學程式用，意識到臺灣科技人才擁擠，故暫緩活動</p>
            </Card>
            <Card class="col-md-6 col-lg-4 mt-3">
                <img alt="josie" src="https://storage.googleapis.com/deedoo-material/josie.png" />
                <h3>
                    <a
                        href="https://chuiantw1212.github.io/josies-portfolio/#/home"
                        target="_blank"
                        rel="noopener"
                    >UIUX設計師個人網頁</a>
                </h3>
                <p>在Ladies, Wind & Design的活動上結識, 答應要幫他做一個協助轉職的網頁</p>
            </Card>
            <Card class="col-md-6 col-lg-4 mt-3">
                <img
                    alt="work-designer"
                    src="https://storage.googleapis.com/deedoo-material/work-designer.png"
                />
                <h3>
                    <a
                        href="https://life-design-241101.appspot.com/#/designer"
                        target="_blank"
                        rel="noopener"
                    >生涯設計工作坊</a>
                </h3>
                <p>認同生涯規劃從教育著手，故以技術投資方式協助</p>
            </Card>
        </MyTheme>
        <MyTheme title="學經歷">
            <div class="col-11">
                <h4>專職</h4>
                <MyListItem>
                    <h4>FinTech股份有限公司 資深前端工程師</h4>
                    <h5>March 2019 ~</h5>
                    <ul>
                        <li>
                            開發專案
                            <ul>
                                <li>
                                    從崩潰邊緣拉起
                                    <a
                                        href="https://www.fundrich.com.tw/"
                                        target="_blank"
                                        rel="noopener"
                                    >基富通</a>好享退專案
                                </li>
                                <li>
                                    協助
                                    <a
                                        href="https://efirst.firstbank.com.tw/efirstWeb/dashboard/landingPage"
                                        target="_blank"
                                        rel="noopener"
                                    >一銀活動網頁</a>開發
                                </li>
                                <li>主筆新底層前端開發</li>
                            </ul>
                        </li>
                        <li>
                            傳授知識
                            <ul>
                                <li>前端內訓15人20小時</li>
                                <li>4名後進前端工程師</li>
                            </ul>
                        </li>
                        <li>
                            留下資產
                            <ul>
                                <li>新底層專案</li>
                                <li>大量元件與基底程式</li>
                            </ul>
                        </li>
                    </ul>
                </MyListItem>
                <MyListItem>
                    <h4>區塊鏈有限公司 網頁全端工程師</h4>
                    <h5>March 2018 - March 2019</h5>
                    <ul>
                        <li>外派中國支援前端開發一個月</li>
                        <li>2週獨立以Vue + Express + Face recognition.js實做臉部辨識Demo</li>
                        <li>獨立以Vue + Express + MS SQL Server實作低買高賣Demo，用Docker發布於Linux主機上</li>
                    </ul>
                </MyListItem>
                <MyListItem>
                    <h4>博弈網遊有限公司 遊戲前端工程師</h4>
                    <h5>March 2017 - March 2018</h5>
                    <ul>
                        <li>利用遊戲引擎開發遊戲</li>
                        <li>以Vue.js製作簡單的RWD網頁</li>
                    </ul>
                </MyListItem>
                <MyListItem>
                    <h4>工作以前</h4>
                    <h5>June 2009 - March 2017</h5>
                    <ul>
                        <li>
                            <a
                                href="https://drive.google.com/drive/folders/0B0eqIVhCIJL2ZEFWVXIxYkxCRjg?usp=sharing"
                                target="_blank"
                                rel="noopener"
                            >美國東北大學Informatics學霸(GPA:3.71)</a>
                        </li>
                        <li>義務役政戰預官</li>
                        <li>國立中興大學資工系(GPA:2.51)(期末專題第二)(ITSA全國大專院校軟體創意競賽銅牌獎)</li>
                    </ul>
                </MyListItem>
            </div>
            <div class="col">
                <h4>兼職</h4>
                <MyListItem>
                    <h4>網頁教學Meetup</h4>
                    <h5>Oct 2018 - Dec 2018</h5>
                    <p>3人25小時</p>
                    <h5>Dec 2019 ~ Mar 2020</h5>
                    <p>2人每周2.5小時於小樹屋北車承德903</p>
                </MyListItem>
            </div>
        </MyTheme>
        <MyTheme title="核心技能">
            <Card class="col-md-6">
                <h4>Frontend 50%</h4>
                <ul>
                    <li>前端語言：HTML, CSS (SCSS), Javascript</li>
                    <li>前端框架：Vue.js (vuex, vue-router, i18n), Nuxt</li>
                    <li>前端套件：ECharts, Bootstrap, axios, Hightlight.js, devExpress</li>
                    <li>前端環境：Vue Cli, Webpack</li>
                </ul>
            </Card>
            <Card class="col-md-6 mt-3 mt-md-0">
                <h4>Backend 35%</h4>
                <ul>
                    <li>後端語言: Node.js</li>
                    <li>後端框架: Express.js (Typescript)</li>
                    <li>後端套件: socket.io, Passport.js</li>
                    <li>資料庫：NoSQL</li>
                </ul>
            </Card>
            <Card class="col-md-6 mt-3">
                <h4>雲服務 15%</h4>
                <ul>
                    <li>DevOps: Google App Engine, Azure Web App Service</li>
                    <li>Storage: Google Firestore</li>
                    <li>其它：Google Analytics、Google AdSense</li>
                </ul>
            </Card>
            <Card class="col-md-6 mt-3">
                <h4>其他</h4>
                <ul>
                    <li>編輯器：Visual Studio Code</li>
                    <li>版控GUI：GitKraken</li>
                    <li>OS：Mac或Windows，上下班都用</li>
                    <li>領域知識：FinTech</li>
                </ul>
            </Card>
        </MyTheme>
        <MyTheme title="FAQ">
            <div class="col-12">
                <ol>
                    <li>
                        <p class="m-0">大學念甚麼的?</p>
                        <p>資訊工程系，軟硬體參半，但是只喜歡軟體，所以也只拿了一半的成績。好在很會做專題，不至於一事無成。</p>
                    </li>
                    <li>
                        <p class="m-0">是在畢業後直接去美國嗎?</p>
                        <p>不是，適逢人生低潮，尋求改變，先考預官。預官之後，受同裁影響，認定出國是一個改變的契機，所以花了一年備考。一邊用稱不上是積極的等級備考，一邊思考自己要甚麼。</p>
                        <p>備考之外的時間，為了做狼人殺網頁遊戲，自學了Javascript前後端。</p>
                    </li>
                    <li>
                        <p class="m-0">為什麼要考預官?為什麼要去美國?</p>
                        <p>尋求改變。</p>
                    </li>
                    <li>
                        <p class="m-0">為什麼不在美國找工作?為什麼要回台灣?</p>
                        <p>當時履歷太弱，沒有強到可以跨越種族與語言的限制。</p>
                    </li>
                    <li>
                        <p class="m-0">未來的目標是甚麼?</p>
                        <p>
                            推廣Javascript、把自己發揮到極限。上班追求效率，準時上下班；下班
                            <a
                                href="https://github.com/Chuiantw1212"
                                target="_blank"
                                rel="noopener"
                            >持續精進自己</a>
                        </p>
                    </li>
                </ol>
            </div>
        </MyTheme>
        <MyTheme title="推薦信與其他證明">
            <ol>
                <li>
                    <a
                        href="https://drive.google.com/open?id=1ytUwY-Ayqtg2nFDL-NMdkxqkj55gKOMY"
                        target="_blank"
                        rel="noopener"
                    >專案經理</a>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/open?id=1kLbgMLBR5y9Np9nIeX1xzX80uaHgzp9V"
                        target="_blank"
                        rel="noopener"
                    >實習生</a>
                </li>
            </ol>
        </MyTheme>
    </div>
</template>
<script>
export default {
    components: {
        MyPageHeader: () => import("@/components/MyPageHeader.vue"),
        MyTheme: () => import("@/components/MyTheme.vue"),
        Card: () => import("@/components/Card.vue"),
        MyListItem: () => import("@/components/MyListItem.vue")
    },
    data: () => ({
        imageUrl: require("@/assets/banner.jpg")
    })
}
</script>

<style lang="scss">
.my-social {
    text-align: center;
    i,
    a,
    span {
        color: black;
    }
    .my-social__icon {
        font-size: 44px;
    }
}
</style>
