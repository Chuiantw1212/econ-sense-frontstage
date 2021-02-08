<template>
    <div class="container text-center py-5">
        <br />
        <div class="row justify-center">
            <div v-for="(post, index) in posts" class="col-12" :key="index">
                <PostPreview v-model="posts[index]"></PostPreview>
            </div>
        </div>
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
            url: 'http://localhost:3001/news',
            params: {
                url: 'https://news.google.com/rss/search?q=site%3Amoney.udn.com%20%22%E9%87%91%E7%AE%A1%E6%9C%83%22%20%22%E4%BF%9D%E9%9A%AA%22%20%22%E5%81%9C%E5%94%AE%22&hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant'
            },
            method: 'get'
        })
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const items = xmlDoc.getElementsByTagName('item')
        this.posts = Array.from(items).map((item) => {
            const title = item.getElementsByTagName('title')[0].innerHTML
            const date = item.getElementsByTagName('pubDate')[0].innerHTML
            const descriptionHTML = item.getElementsByTagName('description')[0].innerHTML
            const href = descriptionHTML.match(/https:\/\/.*" /)
            return {
                title,
                date,
                href,
                imageSrc: 'https://storage.googleapis.com/my-blog-287510.appspot.com/%E7%B6%93%E6%BF%9F%E6%97%A5%E5%A0%B1.png'
            }
        })
        Swal.close()
    }
}
</script>