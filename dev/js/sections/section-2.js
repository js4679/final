import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const section2TL = gsap.timeline();
section2TL.from("#specials h1",{duration:0.5,alpha:0,x:300})
        .from("#contact-us h1",{duration:0.5,alpha:0,x:-300});


export function section2Animation(){

    ScrollTrigger.create({
        // markers: true,
        animation: section2TL,
        toggleActions: "play none",
        trigger: "#section-2",
        start:"top, 50%",
        end: "bottom 50%"
    });
}
