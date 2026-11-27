<template>
    <div ref="root" class="page">
        <PageHeader overline="Carte des prestations" title="Nos gestes">
            Les durées indiquées incluent le diagnostic et le shampooing rituel.
            Les tarifs couleur varient selon la longueur — le devis est condfirmé
            en salon avant le geste.
        </PageHeader>
        <div class="filters">
            <div class="filters-list" role="group" aria-label="Filtrer les prestations">
                <button
                    type="button"
                    class="chip"
                    :aria-pressed="active === null"
                    @click="select(null)"
                >
                Tout voir
                </button>
                <button
                    v-for="category in categories"
                    :key="category.id"
                    type="button"
                    class="chip"
                    :aria-pressed="active === category.id"
                    @click="select(category.id)"
                >
                    {{ category.title }}
                </button>
            </div>
        </div>
        <div class="categories">
            <section
                v-for="category in categories"
                v-show="!active || active === category.id"
                :key="category.id"
                class="category"
                :aria-labelledby="`categorie-${category.id}`"
            >
                <div class="category-head">
                    <h2 :id="`categorie-${category.id}`" class="category-title">{{ category.title }}</h2>
                    <p class="category-note">{{ category.note }}</p>
                </div>
                <ul class="category-list">
                    <PrestationsRow
                        v-for="prestation in category.items"
                        :key="prestation.id"
                        v-bind="prestation"
                        data-animate
                    />
                </ul>
            </section>
            <PrestationsHelp />
        </div>
    </div>
</template>

<script setup lang="ts">
import { categories } from '~/data/prestations';

const { $gsap, $ScrollTrigger } = useNuxtApp();
const root = ref<HTMLElement | null>(null);
const active = ref<String | null>(null);

function select(id: string | null) {
    active.value = id;
    nextTick(() => $ScrollTrigger.refresh());
};

useSeoMeta({
    title: 'Prestations et tarifs',
    description: 'Cartes et tarifs de Maison Ondine (Paris 3e) ; coupes, couleurs végétales, balayages, soins et chignons d\'occation. Diagnostic du cuir chevelu offert',
});

useSectionAnimation(root, () => {
    const rows = $gsap.utils.toArray<HTMLElement>('.category-list > li');
    $gsap.set(rows, { y: 24 });

    $ScrollTrigger.batch(rows, {
        start: 'top 92%',
        once: true,
        onEnter: (batch) => $gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: { amount: 0.08 },
            overwrite: true
        }),
    });
});
</script>

<style lang="css" scoped>
/* Filters */
.filters {
    padding: 20px var(--gutter);
    background-color: var(--color-surface);
}

.filters-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chip {
    padding: 8px 16px;
    border: 1px solid color-mix(in srgb, var(--color-text) 20%, transparent);
    border-radius: 999px;
    background: transparent;
    font: inherit;
    font-size: 12px;
    font-weight: var(--fw-regular);
    letter-spacing: .04em;
    color: var(--color-text);
    cursor: pointer;
    transition:
        background-color var(--transition),
        border-color var(--transition),
        color var(--transition)
    ;
}

.chip:hover {
    border-color: var(--color-text);
}

.chip[aria-pressed="true"] {
    background-color: var(--color-text);
    border-color: var(--color-text);
    color: var(--color-bg);
}

.chip:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
}

/* Categories */
.categories {
    display: flex;
    flex-direction: column;
    gap: 72px;
    padding: 64px var(--gutter) 96px;
}

.category-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 16px;
    row-gap: 4px;
    padding-bottom: 20px;
}

.category-title {
    font-size: clamp(28px, 3vw, 34px);
}

.category-note {
    font-size: 12px;
    color: var(--color-text-muted);
}

@media(max-width: 599px) {
    .categories {
        gap: 56px;
        padding-block: 48px 64px;
    }
}
</style>