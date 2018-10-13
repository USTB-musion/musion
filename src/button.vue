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
import Vue from 'vue'
import Icon from './icon.vue'

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
    },
    components: {
        'm-icon': Icon
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
            height: $button-height;
            font-size: $font-size;
            padding: 0 1em;
            border-radius: $border-radius;
            border: 1px solid $border-color;
            background: $button-bg;
            vertical-align: middle;

            &:hover {
                border-color: $border-border-hover;
            }

            &:active {
                background-color: $button-active-bg;
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
