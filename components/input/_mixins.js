const defaultValueKey = 'value'
const defaultNameKey = 'text'
export default {
    props: {
        itemValue: {
            type: String,
            default: defaultValueKey
        },
        itemText: {
            type: String,
            default: defaultNameKey
        },
        disabled: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: function () {
                return [
                    {
                        value: true,
                        text: '是'
                    },
                    {
                        value: false,
                        text: '否'
                    }
                ]
            }
        },
        OptID: {
            type: String,
            default: ''
        },
        hasBlank: {
            type: Boolean,
            default: false
        }
    },
    async mounted() {
        this.localDisabled = this.disabled
        this.currentOptions = this.options
        // 若有OptID則試著從Session拿取資料
        // if (this.OptID) {
        //     await this.setOptions()
        // } else {
        this.localItemValue = this.itemValue
        this.localItemText = this.itemText
        // }

    },
    methods: {
        async setOptions() {
            // let optionObj = {}
            // const optionObjString = sessionStorage.getItem('optionObj' + "_" + this.OptID)
            // if (optionObjString) {
            //     optionObj = JSON.parse(optionObjString)
            // }
            // // A: Get options from session
            // if (optionObj) {
            //     let currentOptions = optionObj[this.OptID]
            //     if (currentOptions) {
            //         if (this.hasBlank) {
            //             const blankOption = {}
            //             blankOption[this.itemValue] = ''
            //             blankOption[this.itemText] = ''
            //             blankOption['blank'] = 'blank'
            //             if (!currentOptions[0].hasOwnProperty('blank')) {
            //                 currentOptions.splice(0, 0, blankOption)
            //             }
            //         }
            //         this.currentOptions = currentOptions
            //         return
            //     }
            // }
            // // B: Get options from server
            // const response = await this.getOptionById(this.OptID)
            // const { Datas } = response
            // if (Datas) {
            //     const currentOptions = Datas
            //     /**
            //      * 避免因為DB手殘塞入空白的保護機制
            //      */
            //     currentOptions.forEach(option => {
            //         option[this.itemText] = option[this.itemText].trim()
            //     })
            //     if (this.hasBlank) {
            //         const blankOption = {}
            //         blankOption[this.itemValue] = ''
            //         blankOption[this.itemText] = ''
            //         blankOption['blank'] = 'blank'
            //         if (!currentOptions[0].hasOwnProperty('blank')) {
            //             currentOptions.splice(0, 0, blankOption)
            //         }
            //     }
            //     this.currentOptions = currentOptions
            //     // Set back options
            //     optionObj[this.OptID] = Datas
            //     const newOptionString = JSON.stringify(optionObj)
            //     sessionStorage.setItem('optionObj' + "_" + this.OptID, newOptionString)
            // }
        },
        newData() {
            const data = {
                currentOptions: this.currentOptions ? this.currentOptions : [],
                localItemValue: defaultValueKey,
                localItemText: defaultNameKey,
                localDisabled: this.disabled ? this.disabled : false,
                message: '',
            }
            return data
        },
    }
}