<template>
    <li :id="id" >
        <a href="/reservation" class="row">
            <div class="row-main">
            <h3 class="row-name">{{ name }}</h3>
            <p class="row-detail">{{ detail }}</p>
            </div>
            <span class="row-duration">{{ formatDuration(duration) }}</span>
            <span class="row-price">{{ formatPrice(price) }}</span>
            <NuxtLink
            :to="{ path: '/reservation', query: { prestation: id } }"
            class="row-link"
            :aria-label="`Réserver : ${name}`"
            >
                Réserver
            </NuxtLink>
        </a>
        
    </li>
</template>

<script setup lang="ts">
defineProps<{
    id: string
    name: string
    detail: string
    duration: number
    price: number | null
}>()
</script>

<style lang="css" scoped>
.row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(96px, 0.55fr) auto 96px;
    align-items: center;
    column-gap: 24px;
    padding: 22px 16px;
    margin-inline: -16px;
    border-top: var(--line);
    scroll-margin-top: calc(var(--header-h) + 24px);
    transition: 
        background-color var(--transition),
        padding-left var(--transition)
    ;
}

.row:hover {
    padding-left: 20px;
    background-color: var(--color-surface);
}

.row:target {
    background-color: var(--color-selected);
}

.row-name {
    font-size: 22px;
    line-height: 1.2;
}

.row-detail {
    margin-top: 4px;
    font-size: 13px;
    color: var(--color-text-muted);
}

.row-duration {
    font-size: 13px;
    white-space: nowrap;
}

.row-price {
    font-family: var(--font-display);
    font-size: 22px;
    text-align: right;
    white-space: nowrap;
}

.row-link {
    justify-self: end;
    font-size: 11px;
    font-weight: var(--fw-regular);
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--color-accent);
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition);
}

.row-link:hover {
    border-color: currentColor;
}

.row-link:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
}

@media (max-width: 599px) {
    .row {
        grid-template-columns: auto 1fr auto;
        grid-template-areas: 
            'main main main'
            'duration price link'
        ;
        row-gap: 12px;
    }

    .row-main { grid-area: main; }
    .row-duration { grid-area: duration; }
    .row-price { grid-area: price; }
    .row-link { grid-area: link; }
}
</style>