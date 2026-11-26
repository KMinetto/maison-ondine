<template>
    <section ref="root" class="features">
        <FeaturesItem
            v-for="feature in features"
            :key="feature.number"
            v-bind="feature"
            data-animate
        />
    </section>
</template>

<script setup lang="ts">
import { features } from '~/data/home';

const { $gsap } = useNuxtApp();
const root = ref<HTMLElement | null>(null);

useSectionAnimation(root, (el) => {
    $gsap.from('.features > *', {
        autoAlpha: 0,
        y: 50,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.4,
        scrollTrigger: {
            trigger: el,
            start: 'clamp(top 80%)',
            once: true
        }
    });
});
</script>

<style lang="css" scoped>
.features {
    min-height: 300px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: var(--line);
    background-color: var(--color-surface);
}

@media (max-width: 899px) {
    .features {
        grid-template-columns: 1fr;
    }
}
</style>