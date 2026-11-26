<template>
    <div class="footer-container">
        <div class="footer-main">
            <div class="footer-brand">
                <NuxtLink to="/" class="brand-name">Ondine</NuxtLink>
                <address class="footer-muted">
                    14 rue de Saintonge<br>
                    75003 Paris
                </address>
                <p class="footer-muted">Mar — Sam · 9h — 19h</p>
            </div>

            <nav class="footer-col" aria-labelledby="footer-maison">
                <p id="footer-maison" class="footer-title">Maison</p>
                <ul>
                    <li><NuxtLink to="/">Le salon</NuxtLink></li>
                    <li><NuxtLink to="/equipe">L'équipe</NuxtLink></li>
                    <li><NuxtLink to="/prestations">Prestations</NuxtLink></li>
                </ul>
            </nav>
            <nav class="footer-col" aria-labelledby="footer-rdv">
                <p id="footer-rdv" class="footer-title">Rendez-vous</p>
                <ul>
                    <li><NuxtLink to="/reservation">Réserver en ligne</NuxtLink></li>
                    <li><NuxtLink to="/profile">Espace client</NuxtLink></li>
                    <li><NuxtLink to="/cartes-cadeaux">Cartes-cadeaux</NuxtLink></li>
                </ul>
            </nav>
            <div class="footer-col">
                <p class="footer-title">Contact</p>
                <ul>
                    <li><a href="tel:+33184220917">01 84 22 09 17</a></li>
                    <li><a href="mailto:bonjour@maison-ondine.fr">bonjour@maison-ondine.fr</a></li>
                    <li>
                        <a 
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram (nouvel onglet)"
                        >Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© {{ year }} Maison Ondine</p>
            <ul class="footer-legal">
                <li><NuxtLink to="/mentions-legales">Mentions légales</NuxtLink></li>
                <li><NuxtLink to="/confidentialite">Politique de confidentialité</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style lang="css" scoped>
.footer-container {
    --footer-muted: color-mix(in srgb, var(--color-bg) 60%, var(--color-text));
    --footer-rule: color-mix(in srgb, var(--color-bg) 15%, transparent);
    padding: 72px var(--gutter) 32px;
    background-color: var(--color-text);
    font-size: 16px;
    line-height: 1.9;
}

.footer-main {
    display: grid;
    grid-template-columns: 1.4fr repeat(3, minmax(0, 1fr));
    gap: 40px;
    padding-bottom: 56px;
}

/* Brand */
.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

.brand-name {
    margin-bottom: 8px;
    font-family: var(--font-display);
    font-size: 26px;
    line-height: 1;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--color-bg);
}

.footer-muted {
    font-style: normal;
    color: var(--footer-muted);
}

/* Columns */
.footer-title {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: var(--fw-regular);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--footer-muted)
}

.footer-col a,
.footer-bottom a {
    color: var(--color-bg);
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition);
}

.footer-col a:hover,
.footer-bottom a:hover {
    border-color: currentColor;
}

.footer-container a:focus-visible {
    outline: 2px solid var(--color-bg);
    outline-offset: 4px;
}

/* Bottom page */
.footer-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid var(--footer-rule);
    font-size: 14px;
    color: var(--footer-muted);
}

.footer-legal {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
}

/* Responsive */

@media (max-width: 899px) {
    .footer-main {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .footer-brand {
        grid-column: 1 / -1;
    }
}

@media (max-width: 599px) {
    .footer-container {
        padding-top: 56px;
    }

    .footer-main {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .footer-bottom {
        flex-direction: column;
    }
}
</style>