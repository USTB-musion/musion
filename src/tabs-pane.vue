<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionPane',
    inject: ['eventBus'],
    created() {
        console.log('pane', this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            console.log('name', name)
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs-pane {

    }
</style>
