<template>
    <div class="m-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        for(let node of this.$el.children) {
            if (node.nodeName.toLowerCase() !== 'button') {
                console.warn('m-button-group的子元素应该全是m-button')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-border-hover: #666;
    .m-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .m-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
