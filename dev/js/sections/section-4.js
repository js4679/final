import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section4TL = gsap.timeline();
section4TL.from("#text-card",{duration:1, alpha:0, x:-100});


export function section4Animation(){

    ScrollTrigger.create({
        
        animation: section4TL,
        toggleActions: "play play",
        trigger: "#section-4",
        start:"top, 50%",
        end: "bottom 50%"
    });
}