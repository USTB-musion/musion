<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <m-icon name="error" class="icon-error"/>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
import mIcon from './icon.vue'
export default {
    name: 'mInput',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            value: false
        },
        readonly: {
            type: Boolean,
            value: false
        },
        error: {
            type: String,

        }
    },
    components: {
        mIcon
    }
}
</script>

<style lang="scss" scoped>
            // --button-height: 32px;
            // --font-size: 14px;
            // --button-bg: white;
            // --button-active-bg: #eee;
            // --border-radius: 4px;
            // --color: #333;
            // --border-color: #999;
            // --border-color-hover: #666;
    $height: 32px;
    $border-color: #999;
    $border-hover-color: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: 0.5em;
        }
        font-size: $font-size;
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-hover-color;
            }
            &:focus {
                box-shadow: inset 1px 3px $box-shadow-color;
                outline: none;
            }
            &:disabled, &[readonly] {
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red
            }
        }
        .icon-error {
            fill: $red;
        }
        .error-message {
            color: $red;
        }
    }
</style>
