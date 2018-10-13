<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionBody',
    inject: ['eventBus'],
    created() {
        console.log('body', this.eventBus)
    }
}
</script>

<style lang="scss" scoped>
    .tabs-body {

    }
</style>
