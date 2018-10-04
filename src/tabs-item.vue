<template>
    <div class="tabs-item" @click="updateItem" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionTabsItem',
    inject: ['eventBus'],
    data() {
        return {
            active: false
        }
    },
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
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created() {
        console.log('item', this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
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
        // flex-grow: 1;
        flex-shrink: 0;
        padding: 0 1em;
        &.active {
            background: red;
        }
    }
</style>
