<template>
    <div
        class="inputGroup"
        :ref="`inputGroup`"
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
                class="label__input"
                v-model="_value"
                :placeholder="placeholder"
                :data-required="required"
                :data-title="title"
                :data-message="message"
                autocomplete="off"
            />
            <input
                v-else
                :id="uuid"
                :disabled="true"
                class="label__input"
                :class="{ 'label__input--disabled': disabled }"
                :value="_value"
                :readonly="value"
                :data-required="required"
            />
        </label>
    </div>
</template>
<script>
/**
 * The prototype of all the other inputs,
 * read these codes thoroughly makes it easy to read other inputs.
 */
export default {
    data: function () {
        return this.newData()
    },
    props: {
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
        placeholder: {
            type: String,
            default: ''
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 0
        },
        types: {
            type: Array,
            default: () => {
                return [] // 需要限制時使用'english', 'number', 'symbol'
            }
        }
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
    watch: {
        _value(newValue) {
            newValue = String(newValue).trim()
            let isValid = true
            const isRequiredAndEmpty = (this.required && !newValue)
            if (isRequiredAndEmpty) {
                isValid = false
                this.message = this.$t('isRequired')
            } else if (newValue && this.min && newValue.length < this.min) {
                this.message = this.$t('exceedMinimum')
            } else if (newValue && this.max && newValue.length > this.max) {
                this.message = this.$t('exceedMaximum')
            } else if (this.types.length !== 0) {
                this.message = ""
                // Chinese won't trigger keypress
                const characters = Array.from(newValue)
                characters.some(character => {
                    return !this.checkTypes(character)
                })
            } else {
                this.message = ""
            }
            this.$emit('update:isValid', isValid)
            this.$emit('change')
        },
        disabled() {
            this.message = ''
        }
    },
    methods: {
        checkTypes(character) {
            const hasEnglish = this.types.includes('english') // 0位元
            const hasNumber = this.types.includes('number') // 2位元
            const hasSymbol = this.types.includes('symbol') // 4位元
            let statusCode = 0
            if (hasEnglish) {
                statusCode += 1
            }
            if (hasNumber) {
                statusCode += 2
            }
            if (hasSymbol) {
                statusCode += 4
            }
            switch (statusCode) {
                case 1: {
                    // English Only
                    if (!this.checkIsEnglish(character)) {
                        this.message = this.$t('englishPlease')
                        return false
                    }
                    break;
                }
                case 2: {
                    // Number Only
                    if (!this.checkIsNumeric(character)) {
                        this.message = this.$t('numberPlease')
                        return false
                    }
                    break;
                }
                case 3: {
                    // English + Number
                    if (!this.checkIsEnglish(character) && !this.checkIsNumeric(character)) {
                        this.message = this.$t('noSymbol')
                        return false
                    }
                    break;
                }
                case 4: {
                    // Symbol Only
                    if (!this.checkIsSymbol(character)) {
                        this.message = this.$t('symbolPlease')
                        return false
                    }
                    break;
                }
                case 5: {
                    // English and Symbol
                    if (!this.checkIsEnglish(character) && !this.checkIsSymbol(character)) {
                        this.message = this.$t('noNumber')
                        return false
                    }
                    break;
                }
                case 6: {
                    // Number and Symbol
                    if (!this.checkIsNumeric(character) && !this.checkIsSymbol(character)) {
                        this.message = this.$t('noEnglish')
                        return false
                    }
                    break;
                }
                case 7: {
                    // No Chinese
                    if (!this.checkIsEnglish(character) &&
                        !this.checkIsNumeric(character) &&
                        !this.checkIsSymbol(character)) {
                        this.message = this.$t('noChinese')
                        return false
                    }
                    break;
                }
                default: {
                    // eslint-disable-next-line
                    console.log('InputText Type Exception.')
                }
            }
            return true
        },
        checkIsEnglish(character) {
            const regex = /^[a-zA-Z \-',]+$/
            return regex.test(character)
        },
        checkIsNumeric(character) {
            const regex = /^[0-9]+$/;
            return regex.test(character)
        },
        checkIsSymbol(character) {
            const regex = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./]/
            return regex.test(character)
        },
        newData() {
            return {
                message: '',
            }
        }
    }
}
</script>
<style lang="scss" scoped src="@/components/input/_input.scss">
</style>