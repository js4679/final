import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section4TL = gsap.timeline();
section4TL.from("#text-card",{duration:1, alpha:0, x:-100});


export function section4Animation(){

    ScrollTrigger.create({
        markers:true,
        scrub: true,
        animation: section4TL,
        toggleActions: "play",
        trigger: "#section-4",
        start:"top 60%",
        end: "bottom 50%"
    });
}