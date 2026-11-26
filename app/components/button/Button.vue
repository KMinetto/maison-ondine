<template>
    <div>
        <NuxtLink v-if="to" :to="to" :class="classes">
            <slot />
        </NuxtLink>
        <button v-else :type="type" :disabled="disabled" :class="classes">
            <slot />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        variant?: 'primary' | 'outline' | 'light',
        size?: 'md' | 'lg',
        to?: string,
        type?: 'button' | 'submit' | 'reset',
        disabled?: boolean
    }>(),
    { variant: 'primary', size: 'md', type: 'button', disabled: false },
);

const classes= computed(() => ['btn', `btn--${props.variant}`, `btn--${props.size}`]);
</script>

<style lang="css" scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: var(--line-width) solid transparent;
    border-radius: var(--radius-button);
    font-family: var(--font-text);
    font-weight: var(--fw-regular);
    text-transform: uppercase;
    white-space: nowrap;
    cursor: pointer;
    transition:
        background-color var(--transition),
        border-color var(--transition),
        color var(--transition)

}

/* Sizes */
.btn--md {
    font-size: 16px;
    padding: 14px 34px;
}

.btn--lg {
    font-size: 20px;
    padding: 22px 32px;
    letter-spacing: .1em;
}

/* Variants */
.btn--primary {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: var(--color-bg);
}

.btn--primary:hover {
    background-color: var(--ondine-hover);
    border-color: var(--ondine-hover);
}

.btn--outline {
    border-color: var(--color-text);
    color: var(--color-text);
}

.btn--outline:hover {
    background-color: var(--color-text);
    color: var(--color-bg);
}

/* On colored background */
.btn--light {
    background-color: var(--color-bg);
    color: var(--color-text);
    transition:
        transform var(--transition),
        box-shadow var(--transition);
}

.btn--light:hover {
    transform: translateY(var(--lift-sm));
    box-shadow: 0 14px 30px rgb(0 0 0 / .18);
}

/* Accessability */
.btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
}

.btn--light:focus-visible {
    outline-color: var(--color-bg);
}

.btn:disabled {
    opacity: .5;
    cursor: not-allowed;
}

@media (max-width: 599px) {
    .btn--lg {
        font-size: 16px;
        gap: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .btn--light:hover {
        transform: none;
    }
}
</style>