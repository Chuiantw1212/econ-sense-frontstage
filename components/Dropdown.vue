<template>
    <div class="dropdown" :ref="`dropdown${name}`">
        <span class="dropdown__name">{{name}}</span>
        <select v-model="currentName" @change="mapOption($event)">
            <option v-if="placeholder">{{placeholder}}</option>
            <option v-for="(item,index) in options" :key="index">{{item.text}}</option>
        </select>
    </div>
</template>
<script>
export default {
    data: () => ({
        widths: ['80px', '184px', '392px', '600px', '1224px'],
    }),
    methods: {
        mapOption: function(e) {
            this.options[e.target.selectedIndex].click(e);
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '1'
        },
        options: {
            type: Array,
            default: () => {
                return [
                    {
                        text: 'ex:選項1',
                        value: '0',
                        click: function(e) {
                            return e
                        }
                    },
                    {
                        text: 'ex:選項2',
                        value: '1',
                        click: function(e) {
                            return e
                        }
                    },
                    {
                        text: 'ex:選項3',
                        value: '2',
                        click: function(e) {
                            return e
                        }
                    },
                ]
            }
        }
    },
    computed: {
        currentName: {
            get() {
                let name = null
                if (this.value && this.options.length) {
                    const currentOption = this.options.find((option) => {
                        return option.value === this.value
                    })
                    name = currentOption.text
                }
                return name
            },
            set(newValue) {
                const currentOption = this.options.find((option) => {
                    return option.text === newValue
                })
                this.$emit('input', currentOption.value)
            }
        }
    },
    mounted() {
        const targetWidth = this.widths[this.width]
        const dropdownElement = this.$refs[`dropdown${this.name}`]
        dropdownElement.style.minWidth = targetWidth
    }
}
</script>
<style lang="scss" scoped>
.dropdown {
    display: flex;
    flex-direction: column;
    color: #414042;
    .dropdown__name {
        font-weight: bold;
        font-size: 14px;
    }
    .dropdown__select {
        cursor: pointer;
        width: 100%;
        margin-top: 4px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #d0d0d0;
        background-color: #ffffff;
    }
}
</style>