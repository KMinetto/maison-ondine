<template>
    <div ref="root" class="header-container">
        <NuxtLink to="/" class="header-brand" >
            <span class="brand-name">Ondine</span>
            <span class="brand-tagline">Maison de coiffure</span>
        </NuxtLink>
        <nav id="site-nav" ref="nav" class="header-nav" :class="{ 'is-open': isOpen }" aria-label="Navigation principale" @click="onNavClick">
            <ul>
                <li ><NuxtLink to="/">Le salon</NuxtLink></li>
                <li ><NuxtLink to="/prestations">Prestations</NuxtLink></li>
                <li ><NuxtLink to="/equipe">L'équipe</NuxtLink></li>
                <li ><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
            <div class="header-nav-extra">
                <NuxtLink to="/profile" class="header-account">Espace client</NuxtLink>
                <Button to="/reservation" class="header-nav-cta">Prendre rendez-vous</Button>
            </div>
        </nav>
        <div class="header-actions">
            <NuxtLink to="/profile" class="header-account" >Espace client</NuxtLink>
            <Button to="/reservation" class="header-cta" >Prendre rendez-vous</Button>
            <button
                ref="burger"
                type="button"
                class="header-burger"
                
                aria-controls="site-nav"
                :aria-expanded="isOpen"
                :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
                @click="setOpen(!isOpen)"
            >
                <span /><span /><span /> 
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $ScrollSmoother} = useNuxtApp();
const route = useRoute();

const root = ref<HTMLElement | null>(null);
const nav = ref<HTMLElement | null>(null);
const burger = ref<HTMLButtonElement | null>(null);
const isOpen = ref(false);

/* Mobile Menu */
function setOpen(open: boolean) {
    isOpen.value = open;

    $ScrollSmoother.get()?.paused(open);
    document.documentElement.style.overflow = open ? 'hidden' : '';

    if (open) nextTick(() => nav.value?.querySelector<HTMLElement>('a')?.focus());
}

function close(returnFocus = false) {
    if (!isOpen.value) return;
    setOpen(false);
    if (returnFocus) burger.value?.focus();
}

function onNavClick(event: MouseEvent) {
    if ((event.target as Element).closest('a')) close();
}

function onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') close(true);
}

function onBreakPoint(event: MediaQueryListEvent) {
    if (event.matches) close();
}

watch(() => route.fullPath, () => close());

let desktop: MediaQueryList | undefined;

onMounted(() => {
    document.addEventListener('keydown', onKeyDown);
    desktop = window.matchMedia('(min-width: 1100px)');
    desktop.addEventListener('change', onBreakPoint);
});

onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeyDown);
    desktop?.removeEventListener('change', onBreakPoint);
});
</script>

<style lang="css" scoped>
.header-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 32px;
    height: var(--header-h);
    padding: 0 var(--gutter);
    border-bottom: var(--line);
}

.header-brand {
    justify-self: start;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--color-text);
}

.brand-name {
    font-family: var(--font-display);
    font-size: 32px;
    line-height: 1;
    letter-spacing: .3em;
    text-transform: uppercase;
}

.brand-tagline {
    font-size: 10px;
    letter-spacing: .65em;
    text-transform: uppercase;
}

/* Navigation */
.header-nav ul {
    display: flex;
    align-items: center;
    gap: 40px;
}

.header-nav ul a {
    display: inline-block;
    padding: 4px 0;
    font-size: 18px;
    font-weight: var(--fw-regular);
    letter-spacing: .1em;
    border-bottom: 1px solid transparent;
    transition: border-color var(--transition);
}

.header-nav ul a:hover,
.header-nav ul a[aria-current='page'] {
    border-color: currentColor;
}

.header-nav-extra {
    display: none;
}

/* Actions */
.header-actions {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 32px;
}

.header-account {
    font-weight: var(--fw-regular);
    text-transform: uppercase;
}

/* Burger */
.header-burger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 44px;
    height: 44px;
    padding: 0 10px;
    background: none;
    border: 0;
    color: var(--color-text);
    cursor: pointer;
}

.header-burger span {
    display: block;
    height: 1px;
    background-color: currentColor;
    transition:
        transform var(--transition),
        opacity var(--transition)
    ;
}

.header-burger[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.header-burger[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
}

.header-burger[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

/* Keyboard Focus */
.header-container a:focus-visible,
.header-burger:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
}

.header-brand,
.header-nav li,
.header-actions > * {
    animation: header-fade-down 0.8s var(--ease) both;
}

.header-nav li:nth-child(1) { animation-delay: 0.1s; }
.header-nav li:nth-child(2) { animation-delay: 0.2s; }
.header-nav li:nth-child(3) { animation-delay: 0.3s; }
.header-nav li:nth-child(4) { animation-delay: 0.4s; }
.header-actions > :nth-child(1) { animation-delay: 0.3s; }
.header-actions > :nth-child(2) { animation-delay: 0.4s; }
.header-actions > :nth-child(3) { animation-delay: 0.5s; }

@keyframes header-fade-down {
    from {
        opacity: 0;
        transform: translateY(-16px);
    }
}

/* Mobile panel */
@media (max-width: 1099px) {
    .header-container {
        display: flex;
        justify-content: space-between;
    }

    .header-burger {
        display: inline-flex;
    }

    .header-actions {
        gap: 16px;
    }

    .header-actions .header-account {
        display: none;
    }

    .header-nav {
        position: fixed;
        top: var(--header-h);
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 48px;
        padding: 48px var(--gutter);
        overflow-y: auto;
        background-color: var(--color-bg);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-8px);
        transition:
            opacity var(--transition),
            transform var(--transition),
            visibility 0s linear var(--duration)
        ;
    }

    .header-nav ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }

    .header-nav ul a {
        font-family: var(--font-display);
        font-size: 36px;
        letter-spacing: 0;
    }

    .header-nav.is-open {
        opacity: 1;
        visibility: visible;
        transform: none;
        transition:
            opacity var(--transition),
            transform var(--transition),
            visibility 0s
        ;
    }

    .header-nav-extra {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        padding-top: 32px;
        border-top: var(--line);
    }

    .header-nav-extra .header-nav-cta {
        display: none;
    }
}

@media(max-width: 599px) {
    .brand-name {
        font-size: 26px;
    }

    .header-actions .header-cta {
        display: none;
    }

    .header-nav-extra .header-nav-cta {
        display: inline-flex;
    }
}

@media (prefers-reduced-motion: reduce) {
    .header-brand,
    .header-nav li,
    .header-actions > * {
        animation: none;
    }

    .header-nav,
    .header-nav.is-open,
    .header-burger span {
        transition: none;
    }
}
</style>