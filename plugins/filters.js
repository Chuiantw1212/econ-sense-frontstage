import Vue from 'vue'
Vue.filter('formatDate', value => {
    const dateInstance = new Date(value)
    if (dateInstance) {
        return dateInstance.toLocaleString()
    }
})