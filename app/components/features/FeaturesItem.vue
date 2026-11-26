<template>
    <div class="feature-div">
        <h3 class="feature-number">{{ number }}</h3>
        <h2 class="feature-title">{{ title }}</h2>
        <p class="feature-text">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    number: string,
    title: string,
    text: string
}>()
</script>

<style lang="css" scoped>
.feature-div {
    margin: auto 0;
    padding: 48px clamp(24px, 5vw, 100px);
    border: 1px solid transparent;
    border-right-color: var(--color-border);
}

.feature-div:last-child {
    border-right: 0;
}

.feature-number {
    font-size: 22px;
    font-weight: var(--fw-light);
    color: var(--color-accent);
}

.feature-title {
    font-size: 42px;
    font-weight: var(--fw-regular);
    margin: 20px 0
}

.feature-text {
    font-size: 22px;
    font-weight: var(--fw-regular);
}

@media (max-width: 899px) {
    .feature-div {
        background-repeat: 0;
        border-bottom: var(--line);
    }

    .feature-div:last-child {
        border-bottom: 0;
    }

    .feature-title {
        font-size: 32px;
    }

    .feature-text {
        font-size: 18px;
    }
}
</style>