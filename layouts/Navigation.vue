<template>
	<div>
		<NavLightbox v-if="isLightBoxOpen" :isOpen.sync="isLightBoxOpen" :routes="currentSubMenu"></NavLightbox>
		<nav
			id="myNavigation"
			class="navbar navbar-expand-md navbar-dark bg-dark justify-content-start"
			aria-label="breadscrumb"
		>
			<a class="navbar-brand js-scroll-trigger" :href="`/`">
				<img class="navbar__brand" src="@/assets/常2.png" />
			</a>
			<router-link class="myNavigation__aboutMe" :to="'/about'" tag="div">
				<img
					alt="myAvatar"
					class="aboutMe__avatar"
					src="https://storage.googleapis.com/my-blog-287510.appspot.com/myAvatar.png"
				/>
			</router-link>
		</nav>
	</div>
</template>
<script>
import $ from "jquery";
import NavLightbox from '@/components/NavLightbox.vue'
export default {
	data: () => ({
		currentRoutes: [],
		isLightBoxOpen: false,
	}),
	components: {
		NavLightbox,
	},
	props: {
		routes: {
			type: Array,
		},
	},
	methods: {
		switchItem(event, index) {
			const navItems = this.$refs["nav-item"];
			navItems.forEach(item => {
				item.classList.remove("active");
			});
			navItems[index].classList.add("active");
		},
	}
};
</script>
<style lang="scss" scoped>
.myNavigation__aboutMe {
	border-radius: 50%;
	overflow: hidden;
	width: 44px;
	cursor: pointer;
	position: absolute;
	right: 1rem;
	.aboutMe__avatar {
		width: 44px;
	}
}
.navbar {
	.navbar__brand {
		width: 44px;
	}
	.navbar-brand {
		margin: 0;
		// line-height: 48px;
		font-size: 24px;
	}
}
.nav {
	.nav-link {
		padding: 0;
	}
}
.nav-item {
	position: relative;
	margin-left: 0.5rem;
	.nav-link {
		color: lightgrey;
		background-color: unset;
		border: none;
		&:hover {
			color: white;
		}
	}
}
</style>
