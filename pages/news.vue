<template>
    <div class="container text-center">
        <h1>精選新聞</h1>
        <p>蒐錄熱銷的金融產品</p>
        <br />
        <div class="row justify-content-center">
            <div
                v-for="(post, index) in posts"
                class="col-12 col-lg-10"
                :key="index"
            >
                <PostPreview v-model="posts[index]"></PostPreview>
            </div>
        </div>
        <br />
        <span class="footer__info">
            <!-- <a href="https://ctee.com.tw/" target="_blank">工商時報</a> -->
            相關新聞標題與內容之著作權與智慧財產權均屬原網站及原作者所有，本網站僅提供新聞聯播，不主張任何權利。</span
        >
    </div>
</template>
<script>
import axios from 'axios'
//   const Swal = require('sweetalert2')
export default {
    data: function () {
        return {
            posts: []
        }
    },
    components: {
        PostPreview: () => import('@/components/PostPreview.vue'),
    },
    async created() {
        // 保險新聞｀｀
        let insurancePosts = await this.getPosts({
            url: 'https://news.google.com/rss/search?q=site%3Ahttps%3A%2F%2Fctee.com.tw%2F%20%22%E9%87%91%E7%AE%A1%E6%9C%83%22%20%22%E4%BF%9D%E9%9A%AA%E5%B1%80%22%20%22%E5%81%9C%E5%94%AE%22%20-%E6%8A%95%E8%B3%87%E5%9E%8B%20%20-%E7%9B%A3%E5%AF%9F%E9%99%A2&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
            category: '保險',
            imageSrc: 'https://storage.googleapis.com/my-blog-287510.appspot.com/%E5%B7%A5%E5%95%86%E6%99%82%E5%A0%B1.jpg'
        })
        // let cardPosts = await this.getPosts({
        //     url: 'https://news.google.com/rss/search?q=intitle%3A%E4%BF%A1%E7%94%A8%E5%8D%A1%20%22%E7%90%86%E8%B2%A1%22%20-%E7%A5%9E%E5%8D%A1%20-%E5%AF%B6%E5%8F%AF%E5%AD%9F%20-%E9%A6%99%E6%B8%AF%20site%3Ahttps%3A%2F%2Fwww.gvm.com.tw%20OR%20%20site%3Ahttps%3A%2F%2Fwww.cw.com.tw%2F%20OR%20site%3Ahttps%3A%2F%2Fwww.managertoday.com.tw%2F&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
        //     category: '信用卡',
        // })
        let posts = [...insurancePosts,]
        posts.sort((one, another) => {
            const oneTime = new Date(one.date)
            const anotherTime = new Date(another.date)
            return anotherTime - oneTime
        })
        posts = posts.slice(0, 20)
        this.posts = posts
        Swal.close()
    },
    methods: {
        async getPosts(config) {
            const {
                url = 'https://news.google.com/rss/search?q=site%3Ahttps%3A%2F%2Fctee.com.tw%2F%20%22%E9%87%91%E7%AE%A1%E6%9C%83%22%20%22%E4%BF%9D%E9%9A%AA%E5%B1%80%22%20%22%E5%81%9C%E5%94%AE%22%20-%E6%8A%95%E8%B3%87%E5%9E%8B%20%20-%E7%9B%A3%E5%AF%9F%E9%99%A2&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
                category = '分類',
                imageSrc,
            } = config
            const response = await axios.request({
                url: 'https://econ-sense-server.df.r.appspot.com/news',
                params: {
                    url
                },
                method: 'get'
            })
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.data, "text/xml");
            const items = xmlDoc.getElementsByTagName('item')
            let posts = Array.from(items).map((item) => {
                const title = item.getElementsByTagName('title')[0].innerHTML
                const date = item.getElementsByTagName('pubDate')[0].innerHTML
                // const link = item.getElementsByTagName('link')[0].innerHTML
                const descriptionHTML = item.getElementsByTagName('description')[0].innerHTML
                const href = descriptionHTML.match(/https:\/\/.*(?=" )/)
                return {
                    title,
                    category,
                    date,
                    href,
                    imageSrc,
                }
            })
            return posts
        },
        getImageSrc(link) {
            const siteMap = {
                'https://ctee.com.tw': '',
                'https://www.gvm.com.tw': '',
                'https://www.managertoday.com.tw': '',
            }
        }
    }
}
</script>