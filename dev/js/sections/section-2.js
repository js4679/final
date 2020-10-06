import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section2TL = gsap.timeline();
section2TL.from("#specials h1",{duration:1, alpha:0, y:100})
        .from("#contact-us h1",{duration:1, alpha:0, y:-100});


export function section2Animation(){

    ScrollTrigger.create({
        
        animation: section2TL,
        toggleActions: "play none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
}
