<template>
    <section ref="root" class="hero-section">
        <div class="hero-title">
            <span class="street overline">Paris 3e — Rue de Saintonge</span>
            <h1 class="title">
                <span class="line"><span>Le calme,</span></span>
                <span class="line"><span>puis le</span></span> 
                <span class="line">
                    <span class="title-blue">geste juste.</span>
                </span>
            </h1>
            <p class="description">
                Une maison de coiffure de dix places, où l'on prend le temps du diagnostic
                avant la coupe. Couleurs végétales, balayages main levée, rituels de soin.
            </p>
            <div class="hero-links">
                <Button to="/reservation" size="lg">
                    Prendre rendez-vous
                </Button>
                <Button to="/prestations" variant="outline" size="lg">
                    Voir les prestations
                </Button>
            </div>
            <hr>
            <div class="availability">
                <span class="days">Mar — Sam • 9h — 19h</span>
                <span class="separator" aria-hidden="true">|</span>
                <a href="tel:+33184220917" class="phone">01 84 22 09 17</a>
            </div>
        </div>
        <div class="hero-image">
            <NuxtImg
                src="/images/hero/salon.webp"
                alt="Intérieur du salon Ondine : miroirs ronds, suspensions et fauteuils"
                sizes="xs:100vw sm:100vw md:100vw lg:50vw xl:50vw 2xl:50vw"
                loading="eager"
                fetchpriority="high"
                :preload="{ fetchPriority: 'high' }"
                class="image-screen"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
const root = ref<HTMLElement | null>(null);

useSectionAnimation(root, () => {
    $gsap.to('.hearo-image img', { scale: 1, duration: 1.8, ease: 'power2.out' });

    // Parallax image
    $gsap.to('.hero-image img', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-image',
            start: 'top top',
            end: 'clamp(bottom top)',
            scrub: true
        }
    });
});
</script>

<style lang="css" scoped>
.hero-section {
    display: flex;
    min-height: calc(100dvh - var(--header-h));
}

.hero-title,
.hero-image {
    flex: 1 1 0;
    min-width: 0;
}

.hero-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--gutter);
}

.hero-image {
    position: relative;
    overflow: hidden;
}

.hero-image img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.06);
    will-change: transform;
}

.title {
    font-size: clamp(56px, 8vw, 120px);
    letter-spacing: -0.02em;
    line-height: 0.98;
    margin: 50px 0;
}

.title .line {
    display: block;
    overflow: hidden;
    padding: 0.06em 0 0.16em;
    margin: -0.06em 0 -0.16em;
}

.title .line > span {
    display: inline-block;
}

.title-blue {
    color: var(--color-accent);
}

.description {
    font-size: 22px;
    line-height: 1.7;
    max-width: 600px;
    text-wrap: pretty;
    margin: 0 0 50px;
}

.hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 100px;
}

hr {
    width: 100%;
    border: 0;
    border-top: var(--line);
    margin: 0 0 50px;
}

.availability {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    font-size: 20px;
    color: var(--color-text-muted);
}

.phone {
    color: inherit;
}

.street,
.description,
.hero-links > *,
.availability {
    animation: hero-fade-up 0.9s var(--ease) both;
}

.title .line > span {
    animation: hero-line-up 1s var(--ease) both;
}

.street { animation-delay: 0s; }
.title .line:nth-child(1) > span { animation-delay: 0.1s; }
.title .line:nth-child(2) > span { animation-delay: 0.2s; }
.title .line:nth-child(3) > span { animation-delay: 0.24s; }
.description { animation-delay: 0.45s; }
.hero-links > :nth-child(1) { animation-delay: 0.6s; }
.hero-links > :nth-child(2) { animation-delay: 0.7s; }
.availability { animation-delay: 0.85s; }

@keyframes hero-fade-up {
    from {
        opacity: 0;
        transform: translateY(16px);
    }
}

@keyframes hero-line-up {
    from {
        transform: translateY(105%);
    }
}

@media (max-width: 899px) {
    .hero-section {
        flex-direction: column;
        min-height: 0;
    }

    .hero-title {
        flex: none;
        padding: 64px var(--gutter);
    }

    .hero-image {
        flex: none;
        aspect-ratio: 4 / 5;
    }

    .hero-links {
        margin-bottom: 56px;
    }
}

@media (max-width: 599px) {
    .title {
        margin: 32px 0;
    }

    .description {
        font-size: 18px;
        margin-bottom: 32px;
    }

    .hero-links {
        flex-direction: column;
        align-items: stretch;
    }

    hr {
        margin-bottom: 32px;
    }

    .availability {
        font-size: 16px;
        gap: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .street,
    .title .line > span,
    .description,
    .hero-links > *,
    .availability {
        animation: none;
    }

    .hero-image img {
        transform: none;
    }

    .description {
        animation: none;
    }
}
</style>
