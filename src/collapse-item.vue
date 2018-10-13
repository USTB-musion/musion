<template>
    <div class="collapse-item">
        <div class="title">{{title}}</div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MusionCollapseItem',
    props: {
        title: {
            default: '',
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            border: 1px solid $grey;
            border-radius: $border-radius;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
        }
    }
</style>
