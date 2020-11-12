<template>
	<div class="container pt-4">
		<div class="row justify-content-center">
			<!-- Post Content Column -->
			<div class="col col-lg-8">
				<!-- Title -->
				<h1 class>{{ post.title }}</h1>

				<!-- Date/Time -->
				<p>發布時間: {{ post.date | formatDate }}</p>

				<hr />

				<!-- Preview Image -->
				<img class="post__image" :src="post.imageSrc" alt />

				<hr />

				<!-- Post Content -->
				<div v-html="post.content"></div>

				<hr />
			</div>
		</div>
		<!-- <div class="row my-5">
			<PostRelative></PostRelative>
			<PostRelative></PostRelative>
			<PostRelative></PostRelative>
		</div> -->
	</div>
</template>
<script>
import PostRelative from '@/components/PostRelative.vue'
import * as firebase from "firebase/app";
export default {
	components: {
		PostRelative
	},
	data: function () {
		return {
			post: {}
		}
	},
	computed: {
		docId() {
			return this.$route.query.id
		}
	},
	mounted() {
		const attemptToRead = () => {
			window.requestAnimationFrame(() => {
				if (firebase.app) {
					this.readPostSync()
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
		getLocalDate(date) {
			const dateInstance = new Date(date)
			const localDate = dateInstance.toLocaleString()
			return localDate
		},
		async readPostSync() {
			const db = firebase.firestore()
			const docRef = db.collection('posts').doc(this.docId)
			const docSnapShot = await docRef.get()
			const docData = docSnapShot.data()
			this.post = docData
			console.log({
				docData
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.post__image {
	width: 100%;
}
</style>