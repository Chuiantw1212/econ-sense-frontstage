<template>
	<div class="theme">
		<h1 class="theme__title">{{title}}</h1>
		<div class="theme__grid">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: String
	}
};
</script>
<style lang="scss" scoped>
.theme {
	.theme__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 15px;
		> * {
			text-align: center;
			cursor: pointer;
		}
	}
}
@media screen and (min-width: 576px) {
	.theme {
		.theme__grid {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
}
@media screen and (min-width: 1210px) {
	.theme {
		.theme__grid {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
}
</style>

