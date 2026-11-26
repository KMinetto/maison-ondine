import { ScrollSmoother } from "gsap/ScrollSmoother";

export function useSmoother() {
    if (import.meta.server) return null;

    const existing = ScrollSmoother.get();

    if (existing) return existing;

    const allowed = window.matchMedia(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    ).matches
    if (!allowed) return null;

    return ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.2,
        effects: false
    });
}
