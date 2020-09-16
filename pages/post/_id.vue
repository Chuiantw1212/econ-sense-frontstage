<template>
	<div class="container pt-4">
		<div class="row justify-content-center">
			<!-- Post Content Column -->
			<div class="col col-lg-8">
				<!-- Title -->
				<h1 class>Post Title</h1>

				<!-- Date/Time -->
				<p>Posted on January 1, 2019 at 12:00 PM</p>

				<hr />

				<!-- Preview Image -->
				<img class="img-fluid rounded" src="http://placehold.it/900x300" alt />

				<hr />

				<!-- Post Content -->
				<p
					class="lead"
				>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>

				<blockquote class="blockquote">
					<p
						class="mb-0"
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					<footer class="blockquote-footer">
						Someone famous in
						<cite title="Source Title">Source Title</cite>
					</footer>
				</blockquote>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>

				<hr />
			</div>
		</div>
		<div class="row my-5">
			<PostRelative></PostRelative>
			<PostRelative></PostRelative>
			<PostRelative></PostRelative>
		</div>
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
			db: firebase.firestore()
		}
	},
	methods: {
		readPosts() {
			// const allPosts = this.db.collection("posts")
			// allPosts.limit(10).get().then((querySnapshot) => {
			// 	this.posts = []
			// 	querySnapshot.forEach(doc => {
			// 		const data = doc.data()
			// 		this.posts.push(data)
			// 	})
			// })
		}
	}
}
</script>