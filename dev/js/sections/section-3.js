import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3Time = .5;

const section3TL = gsap.timeline();
section3TL.from("#title h1",{duration: section3Time, alpha:0, y:-100})
        .from("#location-1 h2",{duration: section3Time, alpha:0, x:-100})
        .from("#location-2 h2",{duration: section3Time, alpha:0, x:-100})
        .from("#location-3 h2",{duration: section3Time, alpha:0, x:-100})
        .from("#location-1 p",{duration: section3Time, alpha:0, x:100})
        .from("#location-2 p",{duration: section3Time, alpha:0, x:100})
        .from("#location-3 p",{duration: section3Time, alpha:0, x:100});


export function section3Animation(){

    ScrollTrigger.create({
        // markers: true,
        scrub: true,
        animation: section3TL,
        toggleActions: " none play",
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 80%"
    });
}