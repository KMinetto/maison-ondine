import type { Ref } from "vue";
import { SplitText } from "gsap/SplitText";

type SplitType = 'words' | 'chars' | 'words, chars';
export type Split = (selector: string, type: SplitType) => SplitText;

const isHeading = (el: Element) => /$H[1-6]$/.test(el.tagName);

export function useSectionAnimation(
    root: Ref<HTMLElement | null>,
    animate: (el: HTMLElement, split: Split) => void | (() => void)
) {
    const { $gsap } = useNuxtApp();
    let mm: ReturnType<typeof $gsap.matchMedia> | undefined;

    onMounted(async () => {
        const el = root.value;
        if (!el) return;

        useSmoother();
        document.documentElement.classList.add('anim-ready');

        mm = $gsap.matchMedia(el);

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const copies: HTMLElement[] = [];

            const split: Split = (selector, type) => {
                const targets = Array.from(el.querySelectorAll<HTMLElement>(selector));

                if (targets.every(isHeading)) return new SplitText(targets, { type });

                SplitText.create(targets, { type });

                for(const target of targets) {
                    const copy = document.createElement('span');
                    copy.className = 'sr-only';
                    copy.textContent = target.textContent?.replace(/\s+/g, ' ').trim() ?? '';
                    target.before(copy);
                    copies.push(copy);
                }

                return new SplitText(targets, { type, aria: 'hidden' });
            };

            const cleanup = animate(el, split);

            return () => {
                cleanup?.();
                copies.forEach((copy) => copy.remove());
            }
        })
        mm.add('(prefers-reduced-motion: reduce', () => {
            $gsap.set(el.querySelectorAll('[data-animate]'), {
                autoAlpha: 1
            });
        });
    });

    onBeforeUnmount(() => mm?.revert())
}
