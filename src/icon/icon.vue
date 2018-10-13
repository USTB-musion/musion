<template>
        <svg v-if="name" class="m-icon">
            <use :xlink:href="`#icon-${name}`"></use>
        </svg> 
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="scss" scoped>
    .m-icon {
        width: 1em;
        height: 1em; 
    }
</style>
