<template>
    <section ref="root" class="services-section">
        <span class="best-services overline" data-animate>
            Services phares
        </span>
        <div class="services-title">
            <h2 data-animate>Trois gestes de la maison</h2>
            <NuxtLink
                to=".prestations"
                class="services-link"
                data-animate
            >Toutes les prestations →</NuxtLink>
        </div>
        <div class="services-cards">
            <ServiceCard
                v-for="card in cards"
                :key="card.id"
                v-bind="card"
                data-animate
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/card/ServiceCard.vue';
import { cards } from '~/data/home';

const { $gsap } = useNuxtApp();
const root = ref<HTMLElement | null>(null);

useSectionAnimation(root, (el, split) => {
    const label = split('.best-services', 'words');
    const heading = split('.services-title h2', 'words, chars');
    $gsap.set(['.best-services', '.services-title h2'], { autoAlpha: 1 });

    const tl = $gsap.timeline({
        defaults: {
            ease: 'power3.out'
        },
        scrollTrigger: { trigger: el, start: 'clamp(top 70%)', once: true }
    });

    tl
        .from(label.chars, { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.04 })
        .from(heading.chars, { autoAlpha: 0, y: 30, duration: 0.7, stagger: 0.03 }, '-=0.2')
        .from('.services-link', { autoAlpha: 0, y: 10, duration: 0.6 }, '<')
        .addLabel('cards', '-=0.1')
    ;

    $gsap.utils.toArray<HTMLElement>('.services-cards > *').forEach((card, i) => {
        const inner = $gsap.utils.selector(card);
        card.style.transition = 'none';

        const ct = $gsap.timeline({
            defaults: { ease: 'power3.out' }
        });

        ct
            .from(card, {
                autoAlpha: 0,
                y: 40,
                duration: 0.7,
                clearProps: 'transform',
                onComplete: () => { card.style.transition = '' },
            }).from(
                inner('img, .card-services, .card-title, .card-text, hr, .card-time, .card-price'),
                { autoAlpha: 0, y: 14, duration: 0.5, stagger: 0.12 }, '<0.25'
            )
        ;

        tl.add(ct, `cards+=${i * 0.5}`);
    });
});

</script>

<style lang="css" scoped>
.services-section {
    padding: 96px var(--gutter);
    display: flex;
    flex-direction: column;
    gap: 38px;
}

.services-title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.services-title h2 {
    font-size: 38px;
}

.services-link {
    border-bottom: 1px solid var(--color-text);
    transition: border-bottom var(--transition);
}

.services-link:hover {
    border-bottom: 1px solid var(--color-accent);
}

.services-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

@media (max-width: 899px) {
    .services-section {
        padding-block: 64px;
    }

    .services-title {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    .services-cards {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 599px) {
    .services-title h2 {
        font-size: 30px;
    }
}
</style>