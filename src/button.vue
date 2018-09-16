<template>
    <button class="m-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#icon-${icon}`"></use>
        </svg> 
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                console.log(value)
            }
        }
    }
}
</script>

<style lang="less">
        .m-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: var(--button-height);
            font-size: var(--font-size);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            vertical-align: middle;

            &:hover {
                border-color: var(--border-color-hover);
            }

            &:active {
                background-color: var(--button-active-bg);
            }

            &:focus {
                outline: none;
            }

            > .icon {
                order: 1;
            }

            > .content {
                order: 2;
            }

            &.icon-right {
                > .icon {
                    order: 2;
                }
                > .content {
                    order: 1;
                }
            }

        }
</style>
