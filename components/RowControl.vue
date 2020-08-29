<template>
    <div class="rowControl">
        <div class="rowControl__left">
            <slot name="left"></slot>
        </div>
        <div class="rowControl__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.rowControl {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .rowControl__left {
        display: flex;
        justify-content: flex-end;
        > :not(:first-child) {
            margin-left: 24px;
        }
    }
    .rowControl__right {
        display: flex;
        justify-content: flex-end;
        > :not(:last-child) {
            margin-right: 24px;
        }
    }
}
</style>