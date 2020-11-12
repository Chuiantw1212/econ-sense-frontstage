<template>
	<div class="container py-5">
		<h1>理財百問</h1>
		<p class="m-0">這邊之後會做內容的調整，不是我想放甚麼就放甚麼</p>
		<p class="m-0">那就變成垃圾訊息了，有違理財生活化的初衷</p>
		<p class="m-0">會以講座上參與者的問題為核心，去延伸文章的題目</p>
		<br />
		<div class="row">
			<div v-for="(post, index) in posts" class="col-12 col-lg-6" :key="index">
				<PostPreview v-model="posts[index]"></PostPreview>
			</div>
		</div>
		<!-- <Pagination></Pagination> -->
	</div>
</template>
<script>
import PostPreview from '@/components/PostPreview.vue'
import WidgetSearch from '@/components/widgets/Search.vue'
import WidgetCategories from '@/components/widgets/Categories.vue'
import Pagination from '@/components/Pagination.vue'
import * as firebase from "firebase/app";
export default {
	components: {
		PostPreview,
		WidgetSearch,
		WidgetCategories,
		Pagination
	},
	data: () => {
		return {
			posts: []
		}
	},
	created() {
		const attemptToRead = () => {
			window.requestAnimationFrame(() => {
				if (firebase.app) {
					this.readPosts()
				} else {
					attemptToRead()
				}
			})
		}
		if (process.client) {
			attemptToRead()
		}
	},
	methods: {
		readPosts() {
			const db = firebase.firestore()
			const allPosts = db.collection("posts")
			allPosts.limit(10).get().then((querySnapshot) => {
				this.posts = []
				querySnapshot.forEach(doc => {
					const data = doc.data()
					data.id = doc.ref.id
					this.posts.push(data)
				})
			})
		}
	}
}
</script>

<style>
</style>
