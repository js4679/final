import {gsap} from "gsap";

export function section1Animation (){
    gsap.from("#section-1 h1", {duration:2, alpha:0, y:300});
}