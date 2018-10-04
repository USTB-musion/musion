<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionTabs',
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

    }
}
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>
