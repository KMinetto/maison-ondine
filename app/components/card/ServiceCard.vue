<template>
    <NuxtLink :to="to" class="card-container">
        <NuxtImg :src="src" :alt="alt" sizes="100vw lg:33vw" loading="lazy" />
        <div class="card-content">
            <span class="card-service">{{ service }}</span>
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-text">{{ text }}</p>
            <hr>
            <div class="card-estimate">
                <div class="card-time">{{ time }}</div>
                <div class="card-price">{{ price }} €</div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
        to: string,
        src: string,
        alt: string,
        service?: string
        title?: string
        text?: string
        time: string
        price: number
    }>()
</script>

<style lang="css" scoped>
    .card-container {
        border: 1px solid var(--color-border);
        background-color: var(--color-bg);
        border-radius: var(--radius-card);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: inherit;
        transition:
            border-color 0.4s var(--ease),
            box-shadow 0.4s var(--ease),
            transform 0.4s var(--ease)
        ;
    }

    .card-container:hover {
        border-color: var(--color-accent);
        box-shadow: rgba(36, 31, 27, 0.09) 0px 18px 40px !important;
        transform: translateY(-4px) !important;
    }

    .card-container:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 4px;
    }

    .card-container img {
        display: block;
        width: 100%;
        height: 230px;
        flex-shrink: 0;
        object-fit:cover;
        object-position: center;
    }

    .card-content {
        padding: 26px 26px 28px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1 1 0%;
    }

    .card-content span {
        font-size: 10px;
        letter-spacing: .22em;
        text-transform: uppercase;
        color: var(--color-accent);
    }

    .card-content h3 {
        font-size: 30px;
        line-height: 1.08;
    }

    .card-content p {
        font-size: 14px;
        line-height: 1.6;
        flex: 1 1 0%;
    }

    .card-estimate {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-top: 16px;
        margin-top: 6px;
    }

    .card-time {
        font-size: 13px;
        color: var(--color-text-muted);
    }

    .card-price {
        font-family: var(--font-display);
        font-size: 23px;
    }

</style>