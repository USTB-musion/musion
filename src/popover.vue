<template>
    <div class="popover" @click="xxx">
        <slot name="content" v-if="visible"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MusionPopover',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        xxx() {
            this.visible = !this.visible
        }
    }
}
</script>

<style lang="less" scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
    }
</style>
