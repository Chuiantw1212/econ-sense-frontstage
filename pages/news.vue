<template>
    <div class="text-center">
        <h1>精選新聞</h1>
        <p>蒐錄熱銷的金融產品</p>
        <br />
        <div class="row justify-center">
            <div v-for="(post, index) in posts" class="col-12" :key="index">
                <PostPreview v-model="posts[index]"></PostPreview>
            </div>
        </div>
        <br />
        <span class="footer__info">
            <a href="https://ctee.com.tw/" target="_blank">工商時報</a>
            相關新聞標題與內容之著作權與智慧財產權均屬原網站及原作者所有，本網站僅提供新聞聯播，不主張任何權利。</span
        >
    </div>
</template>
<script>
import axios from 'axios'
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
        Swal.fire({
            title: '載入中',
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 2000,
            onOpen: () => {
                Swal.showLoading();
            }
        })
        const response = await axios.request({
            url: 'https://econ-sense-server.df.r.appspot.com/news',
            params: {
                // url: 'https://news.google.com/rss/search?q=site%3Ahttps%3A%2F%2Fwww.chinatimes.com%2Fnewspapers%20%22%E9%87%91%E7%AE%A1%E6%9C%83%22%20%20%22%E5%81%9C%E5%94%AE%22%20%22%E4%BF%9D%E9%9A%AA%22%20%22%E9%A2%A8%E9%9A%AA%22&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
                url: 'https://news.google.com/rss/search?q=site%3Ahttps%3A%2F%2Fctee.com.tw%2F%20%22%E9%87%91%E7%AE%A1%E6%9C%83%22%20%22%E4%BF%9D%E9%9A%AA%E5%B1%80%22%20%22%E5%81%9C%E5%94%AE%22%20-%E6%8A%95%E8%B3%87%E5%9E%8B%20%20-%E7%9B%A3%E5%AF%9F%E9%99%A2&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant'
            },
            method: 'get'
        })
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const items = xmlDoc.getElementsByTagName('item')
        let posts = Array.from(items).map((item) => {
            const title = item.getElementsByTagName('title')[0].innerHTML
            const date = item.getElementsByTagName('pubDate')[0].innerHTML
            const descriptionHTML = item.getElementsByTagName('description')[0].innerHTML
            const href = descriptionHTML.match(/https:\/\/.*(?=" )/)
            return {
                title,
                class: '保險',
                date,
                href,
                imageSrc: 'https://storage.googleapis.com/my-blog-287510.appspot.com/%E5%B7%A5%E5%95%86%E6%99%82%E5%A0%B1.jpg'
            }
        })
        posts.sort((one, another) => {
            const oneTime = new Date(one.date)
            const anotherTime = new Date(another.date)
            return anotherTime - oneTime
        })
        posts = posts.slice(0, 8)
        this.posts = posts
        Swal.close()
    }
}
</script>