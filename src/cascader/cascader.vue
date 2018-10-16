<template>
    <div class="cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
        <div class="popover" v-if="popoverVisible">
            <cascader-items :items="source"></cascader-items>
        </div>
    </div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
    name: 'MusionCascader',
    data() {
        return {
            popoverVisible: false
        }
    },
    computed: {
    },
    props: {
        source: {
            type: Array
        }
    },
    components: {
        CascaderItems
    }
}
</script>

<style scoped lang="scss">
    @import '../var';
    .cascader {
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }
        .popover {
            border: 1px solid red;
            height: 200px;
            width: 80px;
        }
    }
</style>
