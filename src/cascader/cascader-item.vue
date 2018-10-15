<template>
    <div class="cascader-x">
        {{sourceItem.name}}
        <cascader-item
            v-if="sourceItem.children"
            v-for="item in sourceItem.children"
            :key="item"
            :sourceItem="item">
        </cascader-item>
    </div>
</template>

<script>
export default {
    name: 'cascaderItem',
    props: {
        sourceItem: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .cascader-x {
        border: 1px solid red;
        margin: 20px;
    }
</style>
