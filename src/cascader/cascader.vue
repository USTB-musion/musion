<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source" :key="item">
                <cascader-item :sourceItem="item"></cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
import CascaderItem from './cascader-item'
export default {
    name: 'MusionCascader',
    props: {
        source: {
            type: Array
        }
    },
    components: {
        CascaderItem
    }
}
</script>

<style scoped lang="scss">
    @import '../var';
    .cascader {

    }
</style>
