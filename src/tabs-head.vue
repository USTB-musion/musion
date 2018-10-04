<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusionTabsHead',
    inject: ['eventBus'],
    created() {
        console.log('head', this.eventBus)
    }
}
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid red;
        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>
