<template>
	<div class="card mb-4">
		<div class="card__clickable" @click="routeToPost(value)">
			<div
				class="card-img-top"
				:style="{ 'background-image': 'url(' + value.imageSrc + ')' }"
				alt="Card image cap"
			/>
			<div class="card-body">
				<h2 class="card-title">{{value.title}}</h2>
				<p class="card-text">{{value.preview}}</p>
			</div>
		</div>
		<div class="card-footer text-muted">{{value.date}}</div>
	</div>
</template>
<script>
export default {
	props: {
		value: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	methods: {
		routeToPost(post) {
			this.$router.push({
				path: 'post',
				query: {
					id: post.id
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.card-img-top {
	height: 300px;
	background-size: cover;
	background-position: center;
}
.card__clickable {
	cursor: pointer;
}
</style>