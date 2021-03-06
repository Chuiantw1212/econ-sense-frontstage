<template>
    <div>
        <nav
            id="myNavigation"
            class="fixed-top navbar navbar-expand-md navbar-light bg-light"
            aria-label="breadscrumb"
        >
            <a class="navbar-brand js-scroll-trigger" :href="`/`">
                <img
                    class="navbar__brand"
                    src="@/assets/logo-letter-black.png"
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
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/self'"
                            :active-class="'active'"
                        >
                            自我定位
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/management'"
                            :active-class="'active'"
                            @click="collapseNavbar($event)"
                        >
                            經營管理
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/wealth'"
                            :active-class="'active'"
                        >
                            累積資產
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/lessons'"
                            :active-class="'active'"
                        >
                            好書推薦
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/posts'"
                            :active-class="'active'"
                        >
                            理財百問
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/news'"
                            :active-class="'active'"
                        >
                            精選新聞
                        </router-link>
                    </li>
                    <li class="nav-item" @click="collapseNavbar($event)">
                        <router-link
                            class="nav-link"
                            :to="'/special'"
                            :active-class="'active'"
                        >
                            關於作者
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
    mounted() {
        this.toggleClickOutside(true)
    },
    beforeDestroy() {
        this.toggleClickOutside(false)
    },
    methods: {
        collapseNavbar() {
            $('.navbar-collapse').collapse('hide');
        },
        toggleClickOutside(isOn) {
            const nuxtElement = document.getElementById('__nuxt')
            if (isOn) {
                nuxtElement.addEventListener('click', this.handleClickoutSide)
            } else {
                nuxtElement.removeEventListener('click', this.handleClickoutSide)
            }
        },
        handleClickoutSide(event) {
            const clickedTarget = event.target
            const navigation = document.getElementById('myNavigation')
            if (!navigation.contains(clickedTarget)) {
                $('.navbar-collapse').collapse('hide');
            }
        },
    }
};
</script>
<style lang="scss" scoped>
#myNavigation {
    opacity: 0.9;
    .navigation__brItem {
        color: black;
        display: block;
        padding: 0.5rem;
        cursor: default;
    }
    .myNavigation__aboutMe {
        overflow: hidden;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        .aboutMe__avatar {
            border-radius: 50%;
            width: 44px;
        }
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
</style>
