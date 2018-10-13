<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'MusionTabs',
    data() {
        return {
            eventBus: new Vue()
        }
    },
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },
    created() {

    },
    mounted() {
        this.$children.forEach((vm) => {
            if (vm.$options.name === 'MusionTabsHead') {
                vm.$children.forEach((item) => {
                    if (item.$options.name === 'MusionTabsItem' && item.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, item)
                    }
                })
            }
        })
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    }
}
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
