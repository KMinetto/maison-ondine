<template>
    <section ref="root" class="reservation-section">
        <div class="reservation-titles">
            <span class="reservation-subtitle overline" data-animate>Réservation en ligne</span>
            <h2 class="reservation-title" data-animate>
                Choisissez votre geste, votre coiffeur et votre créneau en moins d'une minute.
            </h2>
        </div>
        <div class="reservation-button" data-animate>
                <Button
                    to="/reservation"
                    variant="light"
                    size="lg"
                >Prendre rendez-vous</Button>
            </div>
    </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const root = ref<HTMLElement | null>(null);

useSectionAnimation(root, (el, split) => {
    const subtitle = split('.reservation-subtitle', 'words');
    const title = split('.reservation-title', 'words, chars');
    $gsap.set(['.reservation-subtitle', '.reservation-title'], { autoAlpha: 1 });

    const tl = $gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
            trigger: el,
            start: 'clamp(top 75%)',
            once: true
        }
    });

    tl
        .from(subtitle.words, { autoAlpha: 0, y: 10, duration: 0.5, stagger: { amount: 0.2 } })
        .from(title.chars, { autoAlpha: 0, y: 30, duration: 0.6, stagger: { amount: 0.2 } }, '-=0.2')
        .from('.reservation-button', { autoAlpha: 0, y: 30, duration: 0.7 }, '-=0.2')
    ;
});
</script>

<style lang="css" scoped>
.reservation-section {
    padding: 96px var(--gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    background-color: var(--color-accent);
    color: var(--color-bg)
}

.reservation-titles {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.reservation-subtitle {
    color: var(--color-bg);
    opacity: 0.7;
}

.reservation-title {
    font-size: 70px;
    line-height: 1.05;
    max-width: 750px;
}

@media (max-width: 899px) {
    .reservation-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;
        padding-block: 64px;
    }
}

@media (max-width: 599px) {
    .reservation-titles {
        gap: 24px;
    }
}
</style>