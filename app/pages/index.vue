<template>
    <div class="page">
        <HomeHero />
        <HomeFeatures />
        <HomeServices />
        <HomeHouse />
        <HomeReservation />
    </div>
</template>

<script setup lang="ts">
const site = useSiteConfig();

const title = 'Maison Ondine — Salon de coiffure à Paris 3e';
const description = 'Salon de coiffure de dix places rue de Saintonge (Paris 3e): diagnostic inclus, couleurs végétales, balayages main levée. Réservation en ligne.'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description
});

useHead({
    titleTemplate: null,
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'HairSaon',
                '@id': `${site.url}/#salon`,
                name: 'Maison Ondine',
                description: description,
                url: site.url,
                image: `${site.url}/images/og/onding.jpg`,
                telephone: '+33184220917',
                email: 'bonjour@maison-ondine.fr',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: '14 rue de Saintonge',
                    postalCode: '75003',
                    addressLocality: 'Paris',
                    addressCountry: 'FR'
                },
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        opens: '09:OO',
                        closes: '19:00'
                    }
                ],
                sameAs: ['https://www.instagram.com/']
            })
        }
    ]
});
</script>