<template>
    <div class="navLightBox">
        <ul class="navLightBox__list bg-dark" ref="navLightBox__list">
            <template v-for="(route, index) in routes">
                <li class="list__item" @click="routeToItem(route)" :key="index">{{route.text}}</li>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        routes: {
            required: true,
            type: Array,
            default: () => {
                return []
            }
        },
        isOpen: {
            required: true,
            type: Boolean,
            default: true
        }
    },
    computed: {
        _isOpen: {
            get () {
                return this.isOpen
            },
            set (newValue) {
                this.$emit('update:isOpen', newValue)
            }
        }
    },
    mounted () {
        setTimeout(() => {
            window.addEventListener('click', this.handleClickOutside)
        }, 100)
    },
    destroyed () {
        window.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
        handleClickOutside (event) {
            const validArea = this.$refs['navLightBox__list']
            if (!validArea) {
                return;
            }
            const isClickInside = validArea.contains(event.target)
            if (!isClickInside) {
                this._isOpen = false
            }
        },
        routeToItem (route) {
            this.$router.push({
                name: route.name
            })
            this._isOpen = false
        }
    }
}
</script>
<style lang="scss" scoped>
.navLightBox {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 20;
}
.navLightBox__list {
    background-color: #80cedb;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 12px;
    list-style: none;
    .list__item {
        margin-top: 20px;
        cursor: pointer;
        &:first-child {
            margin-top: 0;
        }
    }
}
</style>
 

