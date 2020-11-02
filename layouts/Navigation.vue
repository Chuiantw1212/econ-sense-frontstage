<template>
    <div>
        <NavLightbox
            v-if="isLightBoxOpen"
            :isOpen.sync="isLightBoxOpen"
            :routes="currentSubMenu"
        ></NavLightbox>
        <nav
            id="myNavigation"
            class="fixed-top navbar navbar-expand-md navbar-dark bg-dark"
            aria-label="breadscrumb"
        >
            <a class="navbar-brand js-scroll-trigger" :href="`/`">
                <img
                    class="navbar__brand"
                    src="@/assets/常-透明.png"
                    alt="logo"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">理財生活化</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/easy">順向理財</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/knowledge">主動投資人生</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/wealth">被動投資金錢</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">月更文章</a>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link myNavigation__aboutMe"
                            :to="'/special'"
                        >
                            <span class="aboutMe__description">關於網站</span>
                            <img
                                alt="myAvatar"
                                class="aboutMe__avatar"
                                src="https://storage.googleapis.com/my-blog-287510.appspot.com/myAvatar.png"
                            />
                        </router-link>
                    </li>
                </ul>
            </div>
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
    overflow: hidden;
    // width: 44px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    .aboutMe__avatar {
        border-radius: 50%;
        width: 44px;
    }
}
.navbar {
    .navbar__brand {
        width: 40px;
    }
    .navbar-brand {
        font-size: 24px;
    }
}

@media screen and (min-width: 768px) {
    #myNavigation {
        .myNavigation__aboutMe {
            position: absolute;
            right: 1rem;
            display: flex;
            justify-content: space-between;
            padding: 0;
            .aboutMe__description {
                display: none;
            }
        }
    }
}
// .nav {
//     .nav-link {
//         padding: 0;
//     }
// }
// .nav-item {
//     position: relative;
//     margin-left: 0.5rem;
//     .nav-link {
//         color: lightgrey;
//         background-color: unset;
//         border: none;
//         &:hover {
//             color: white;
//         }
//     }
// }
</style>
