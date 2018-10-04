<template>
    <div class="tabs-item" @click="updateItem">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionTabsItem',
    inject: ['eventBus'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String | Number,
            required: true
        }
    },
    created() {
        console.log('item', this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            console.log('name', name)
        })
    },
    methods: {
        updateItem() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs-item {

    }
</style>
