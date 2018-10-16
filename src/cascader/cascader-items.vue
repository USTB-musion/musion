<template>
    <div class="cascaderItem">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item" :key="item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :items="rightItems"></cascader-items>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cascaderItems',
    data() {
        return {
            leftSelected: null
        }
    },
    props: {
        items: {
            type: Array
        }
    },
    computed: {
        rightItems() {
            if (this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left {
            border: 1px solid red; 
        }
        .right {
            margin-top: -1px;
        }
    }
</style>
