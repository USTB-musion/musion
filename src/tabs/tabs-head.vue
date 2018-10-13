<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusionTabsHead',
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected', (item, vm) => {
            // console.log('item:', item, vm)
            let {width, height, top, left} = vm.$el.getBoundingClientRect()
            left -= 12
            console.log(left, width)
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
    }
}
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        // border: 1px solid red;
        position: relative;
        border-bottom: 1px solid $border-color;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            transition: all 0.3s;
        }
        > .actions-wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }
</style>
