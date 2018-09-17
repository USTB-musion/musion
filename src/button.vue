<template>
    <button class="m-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <m-icon v-if="icon && !loading" :name="icon" class="icon"></m-icon>
        <m-icon v-if="loading" name="loading" class="loading icon"></m-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator(value) {
                if (value !== 'left' && value !== 'right') {
                    return false
                } else {
                    return true
                }
            }
        }
    }
}
</script>

<style lang="less">
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
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
