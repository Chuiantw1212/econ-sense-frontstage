<template>
    <div class="inputGroup">
        <div class="inputGroup__titleGroup">
            <span
                class="titleGroup__text"
                :class="{ 'titleGroup__text--required': required }"
                >{{ title }}</span
            >
            <span class="inputGroup__message">{{ message }}</span>
        </div>
        <div class="inputGroup__options">
            <label
                class="options__label"
                v-for="(option, index) in currentOptions"
                :key="index"
            >
                <input
                    class="options__label__input"
                    type="radio"
                    :value="option[itemValue]"
                    v-model="_value"
                />
                <div class="options__label__container">
                    <div
                        v-if="value === option[localItemValue]"
                        class="container__content"
                    ></div>
                </div>
                <span class="label__text">{{ option[localItemText] }}</span>
            </label>
        </div>
    </div>
</template>
<script>
import { optionsMixin } from './_mixins.js'
export default {
    mixins: [optionsMixin,],
    data: function () {
        return this.newData()
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        _value: {
            get() {
                return this.value
            },
            set(newValue) {
                this.$emit('input', newValue)
            }
        }
    },
}
</script>
<style lang="scss" scoped src="./_input.scss">
</style>