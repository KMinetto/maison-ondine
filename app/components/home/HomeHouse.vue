<template>
    <section ref="root" class="house-section">
        <div class="house-image">
            <NuxtImg
                src="/images/team/team.webp"
                alt="L'équipe de coiffeurs de la maison Ondine"
                sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
                loading="lazy"
                class="image-screen"
            />
        </div>
        <div class="house-content">
            <div class="house-title">
                <span class="house-subtitle overline" data-animate>La Maison</span>
                <h2 class="house-title" data-animate>
                    Un atelier, huit paires de <br>
                    mains, auxune <br>
                    précipitation.
                </h2>
            </div>
            <div class="content">
                <p data-animate>
                    Maison Ondine est née en 2019 dans un ancien atelier de passementerie.
                    Nous travaillons sur rendez-vous uniquement, avec un créneau de trente
                    minutes entre chaque client — ke temps de ranger, d'aérer, et de vous
                    accueillir sans file d'attente.
                </p>
                <blockquote>
                    <p data-animate>« On ne coupe jamais avant d'avoir compris la matière. »</p>
                </blockquote>
                <span class="house-owner overline" data-animate>Léa Vanneau — Fondatrice</span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const root = ref<HTMLElement | null>(null);

useSectionAnimation(root, (el, split) => {
    // Parallax image
    $gsap.to('.house-image img', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.house-image',
            start: 'top bottom',
            end: 'clamp(bottom top)',
            scrub: true
        }
    });

    // Text animation
    const subtitle = split('.house-subtitle','words');
    const title = split('.house-title', 'words, chars');
    const text = split('.content > p', 'words');
    const quote = split('blockquote p', 'words, chars');
    const owner = split('.house-owner', 'words');
    $gsap.set(['.house-subtitle', '.house-title', '.content > p', 'blockquote p', '.house-owner'], { autoAlpha: 1 });

    const tl = $gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
            trigger: '.house-content',
            start: 'clamp(top 75%)',
            once: true
        }
    });

    tl
        .from(subtitle.words, { autoAlpha: 0, y: 10, duration: 0.5, stagger: { amount: 0.2 } })
        .from(title.chars, { autoAlpha: 0, y: 30, duration: 0.7, stagger: { amount: 1 } }, '-=0.2')
        .from(text.words, { autoAlpha: 0, y: 12, duration: 0.5, stagger: { amount: 1.2 } }, '-=0.3')
        .from(quote.chars, { autoAlpha: 0, y: 20, duration: 0.6, stagger: { amount: 1 } }, '-=0.2')
        .from(owner.words, { autoAlpha: 0, y: 10, duration: 0.5, stagger: { amount: 0.3 } }, '-=0.2')
    ;
});
</script>

<style lang="css" scoped>
.house-section {
    display: flex;
    min-height: 100dvh;
    background-color: var(--color-surface);
}

.house-image,
.house-content {
    flex: 1 1 0;
    min-width: 0;
}

.house-image {
    position: relative;
    overflow: hidden;
}

.house-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--gutter);
}

.house-title {
    font-size: clamp(56px, 8vw, 84px);
    letter-spacing: -0.02em;
    line-height: 0.98;
    margin: 50px 0;
}

.content {
    font-size: 22px;
    font-weight: var(--fw-regular);
    line-height: 1.7;
    max-width: 600px;
    text-wrap: pretty;
    margin: 0 0 50px;
}

blockquote {
    font-size: clamp(22px, 2.4vw, 28px);
    font-style: italic;
    line-height: 1.45;
    color: var(--color-accent);
    border-left: 1px solid var(--color-accent);
    padding-left: 22px;
    margin: 40px 0;
}

.house-owner {
    font-size: 16px;
    font-weight: var(--fw-regular);
    text-transform: uppercase;
    letter-spacing: .24em;
    color: var(--color-text-muted);
}

@media (max-width: 899px) {
    .house-section {
        flex-direction: column;
        min-height: 0;
    }
    .house-image {
        flex: none;
        aspect-ratio: 4 / 3;
    }

    .house-content {
        flex: none;
        padding: 64px var(--gutter);
    }
    
    .house-title br {
        display: none;
    }
}

@media (max-width: 599px) {
    .house-title {
        margin: 32px 0;
    }

    .content {
        font-size: 18px;
    }
}
</style>