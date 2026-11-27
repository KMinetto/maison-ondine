<template>
    <header class="page-header">
        <div class="page-header-titles">
            <span class="overline">{{ overline }}</span>
            <h1 class="page-header-title">{{ title }}</h1>
        </div>
        <p v-if="$slots.default" class="page-header-intro">
            <slot />
        </p>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    overline: string
    title: string
}>()
</script>

<style lang="css" scoped>
.page-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
    align-items: end;
    gap: 48px;
    padding: 64px var(--gutter) 56px;
}

.page-header-titles {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.page-header-title {
    font-size: clamp(44px, 5vw, 72px);
    line-height: 1;
    letter-spacing: -0.01em;
}

.page-header-intro {
    justify-self: end;
    max-width: 460px;
    font-size: 15px;
    line-height: 1.7;
}

.overline,
.page-header-title,
.page-header-intro {
    animation: page-header-fade-up 0.9s var(--ease) both;
}

.page-header-title { animation-delay: 0.1s; }
.page-header-intro { animation-delay: 0.25s; }

@keyframes page-header-fade-up {
    from {
        opacity: 0;
        transform: translateY(16px);
    }
}

@media (max-width: 899px) {
    .page-header {
        grid-template-columns: 1fr;
        gap: 24px;
        padding-block: 48px 40px;
    }

    .page-header-intro {
        justify-self: start;
    }
}

@media (prefers-reduced-motion: reduce) {
    .overline,
    .page-header-title,
    .page-header-intro {
        animation: none;
    }
}
</style>