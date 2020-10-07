import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section2TL = gsap.timeline();
section2TL.from("#specials h1",{duration:.5, alpha:0, y:100})
        .from("#contact-us h1",{duration:.5, alpha:0, y:-100});


export function section2Animation(){

    ScrollTrigger.create({
        markers: true,
        scrub: true,
        animation: section2TL,
        toggleActions: "play",
        trigger: "#section-2",
        start:"top",
        end: "bottom"
    });
}
