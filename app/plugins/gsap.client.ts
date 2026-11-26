import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

    return {
        provide: {gsap, ScrollTrigger, SplitText, ScrollSmoother}
    };
});