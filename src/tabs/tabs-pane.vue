<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number
        }
    },
    data() {
        return {
            active: false
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
        console.log('pane', this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    }
}
</script>

<style lang="scss" scoped>
    .tabs-pane {
        &.active {
            // background: red;
        }
    }
</style>
