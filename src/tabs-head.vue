<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
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
    .tabs-head {

    }
</style>
