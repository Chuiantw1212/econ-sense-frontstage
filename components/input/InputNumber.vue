<template>
    <div
        :id="`inputGroup$`"
        :ref="`inputGroup$`"
        class="inputGroup"
        :class="{ 'inputGroup--error': message }"
    >
        <div class="inputGroup__titleGroup">
            <span
                class="titleGroup__text"
                :class="{ 'titleGroup__text--required': required }"
                >{{ title }}</span
            >
            <span class="inputGroup__message">{{ message }}</span>
        </div>
        <label class="inputGroup__label">
            <input
                v-if="!disabled"
                v-model="_value"
                class="label__input"
                :type="type"
                autocomplete="off"
                :step="step"
                @keypress="checkIsNumber($event)"
            />
            <input
                v-else
                :disabled="true"
                :class="{ 'label__input--disabled': disabled }"
                class="label__input"
                :type="type"
                :value="_value"
                :readonly="value"
            />
        </label>
    </div>
</template>
<script>
// import { handleArrowMixin, resetDataMixin, oldValueMixin } from '@/components/_mixins.js'
// import { inputWidthMixin } from '@/components/_mixins'
export default {
    // mixins: [handleArrowMixin, inputWidthMixin, resetDataMixin, oldValueMixin],
    data: function () {
        return this.newData()
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        width: {
            type: [String, Number],
            default: '1'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        validate: {
            type: Function,
            default: function () {
                return ''
            }
        },
        // Value from minimumValue to maximumValue
        minimumValue: {
            type: Number,
            default: 0
        },
        maximumValue: {
            type: Number,
            default: 0
        },
        // Value from minimumWholeDigits to maximumWholeDigits
        minimumWholeDigits: {
            type: Number,
            default: 0
        },
        maximumWholeDigits: {
            type: Number,
            default: 0
        },
        // Value from minimumFractionDigits to maximumFractionDigits
        minimumFractionDigits: {
            type: Number,
            default: 0
        },
        maximumFractionDigits: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'number'
        },
        precision: { // minimumFractionDigits && maximumFractionDigits
            type: [Number, String],
            default: null
        },
        hasFraction: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        _value: {
            get() {
                return this.value
            },
            set(newValue) {
                if (newValue && this.type === 'number') {
                    // 正常數字需轉型別
                    const formatNewNumber = Number(newValue)
                    this.$emit('input', formatNewNumber)
                } else {
                    // 空字串以及其他不可以轉型別避免生成0，導致必填檢核失效
                    this.$emit('input', newValue)
                }
                this.$emit('change')
            }
        },
        step() {
            const step = Math.pow(0.1, this.precision)
            return step
        }
    },
    watch: {
        _value(newValue, oldValue) {

        },
        // eslint-disable-next-line
        precision(newPrecision) {
            this.toPrecision(newPrecision)
        }
    },
    methods: {
        toPrecision(precision) {
            const isNullable = !precision && precision !== 0
            if (!isNullable) {
                const oldValue = Number(this._value)
                const newValue = oldValue.toFixed(precision)
                this._value = newValue
            }
        },
        checkIsNumber(event) {
            /**
             * 用event.prevent來阻擋input的"顯示內容"更新
             * https://stackoverflow.com/questions/39291997/how-to-block-e-in-input-type-number
             */
            const invalidChars = ["-", "e", "+", "E"]
            if (!this.hasFraction) {
                invalidChars.push('.')
            }
            const eventKey = event.key
            if (invalidChars.includes(eventKey) || !this.validateNumber(event)) {
                event.preventDefault();
            }
            if (eventKey === "." && !String(event.target.value)) {
                event.target.value = "";
                event.preventDefault();
            }
        },
        validateNumber(event) {
            /**
             * iPad 的 按鈕沒有event.key可以用，所以需要這個替代方案
             * https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input
             */
            var key = window.event ? event.keyCode : event.which;
            if (event.keyCode === 8 || event.keyCode === 46) {
                return true;
            } else if (key < 48 || key > 57) {
                return false;
            } else {
                return true;
            }
        },
        isFloatDynamic(number) {
            const re = /^\d\d*(\.\d*)?$/;
            return re.test(String(number));
        },
        newData() {
            return {
                message: '',
            }
        }
    }
}
</script>
<style lang="scss" scoped src="./_input.scss">
</style>