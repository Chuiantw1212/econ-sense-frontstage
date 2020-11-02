<template>
    <div>
        <NavLightbox
            v-if="isLightBoxOpen"
            :isOpen.sync="isLightBoxOpen"
            :routes="currentSubMenu"
        ></NavLightbox>
        <nav
            id="myNavigation"
            class="fixed-top navbar navbar-expand-md navbar-dark bg-dark justify-content-start"
            aria-label="breadscrumb"
        >
            <a class="navbar-brand js-scroll-trigger" :href="`/`">
                <img
                    class="navbar__brand"
                    src="@/assets/常-透明.png"
                    alt="logo"
                />
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">理財文章</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/easy">順向理財</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/knowledge"
                            >主動投資你的腦袋</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wealth">被動投資你的財富</a>
                    </li>
                </ul>
            </div>
            <router-link
                class="myNavigation__aboutMe"
                :to="'/special'"
                tag="div"
            >
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
        width: 40px;
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
