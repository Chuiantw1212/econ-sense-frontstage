<template>
    <div class="row">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'row'
}
</script>
<style lang="scss" scoped>
.row {
    margin: unset;
    padding: unset;
    display: flex;
    > * {
        margin-bottom: 16px;
    }
    > *:not(:last-child) {
        margin-right: 24px;
    }
    flex-wrap: wrap;
    align-items: center;
}
</style>