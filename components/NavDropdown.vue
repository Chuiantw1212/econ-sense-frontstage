<template>
    <div class="navDropdown" ref="dropdown">
        <a
            class="nav-link"
            :class="{'active':routePath.includes(route.name)}"
            @click="openSubMenu()"
        >{{route.text}}</a>
        <div v-if="isOpen" class="navDropdown__layer">
            <ul class="navDropdown__layer__list bg-dark" ref="dropdown__layer">
                <template v-for="(route,index) in route.children">
                    <router-link
                        :key="index"
                        class="nav-link"
                        :active-class="'active'"
                        :to="{name:route.name}"
                    >{{route.text}}</router-link>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    data: () => ({
        isOpen: false,
    }),
    props: {
        route: {
            type: Object,
            required: true,
        },
    },
    mounted () {
        setTimeout(() => {
            window.addEventListener('click', this.detectClickOutside)
            window.addEventListener('scroll', this.closeDropdown)
        }, 100)
    },
    destroyed () {
        window.removeEventListener('click', this.detectClickOutside)
        window.removeEventListener('scroll', this.closeDropdown)
    },
    watch: {
        $route () {
            this.closeDropdown()
        }
    },
    computed: {
        routePath () {
            return this.$route.path
        }
    },
    methods: {
        closeDropdown () {
            this.isOpen = false
        },
        openSubMenu () {
            this.$emit('clickOnLink')
            this.isOpen = !this.isOpen
        },
        detectClickOutside (event) {
            const dropdwonLayer = this.$refs['dropdown']
            const isClickInside = dropdwonLayer.contains(event.target);
            if (!isClickInside) {
                this.isOpen = false;
            }
        },
        routeByRouteName (routeName) {
            this.$router.push({
                name: routeName
            })
            this.isOpen = false
        }
    }
}
</script>
<style scoped lang="scss">
.navDropdown {
    position: relative;
    z-index: 30;
    cursor: pointer;
    .navDropdown__layer {
        position: absolute;
        min-width: 100%;
        .navDropdown__layer__list {
            list-style: none;
            padding: 0;
            .list__item {
                padding: 12px;
                transition: all 0.38s;
                cursor: pointer;
                .item__link {
                    color: white;
                    &:hover {
                        text-decoration: none;
                    }
                }
            }
            .nav-link {
                white-space: nowrap;
            }
        }
    }
    .nav-link {
        user-select: none;
    }
}
</style>
 

