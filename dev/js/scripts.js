import {section1Animation} from "./sections/section-1.js";
import {section2Animation} from "./sections/section-2.js";

section1Animation();
section2Animation();



// var $burger = $("#burger-icon");
// var $nav = $('nav[data-nav]');
// var $navA = $('nav[data-nav] a');
// var isVisible = false;

// function mouseClick(){

//     console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// }

// $burger.on( "click", mouseClick);
// // close the mobile menu when menu link is clicked
// $navA.on( "click", mouseClick);

// import {gsap} from "gsap";





// gsap.registerPlugin(ScrollTrigger);


// var squareTimeline = gsap.timeline();
// squareTimeline.from("#red-box",{duration:5, xPercent: 300, rotation:360, alpha:0 })
//             .from("#orange-box",{duration:5, xPercent: 300, rotation:180, alpha:0 }, "-=0.5")
//             .from("#yellow-box",{duration:5, xPercent: 300, rotation:360, alpha:0 }, "-=0.5"); 
            

// ScrollTrigger.create({
//     trigger: "#orange-box",
//     start: "top 50%",
//     end: "bottom 50%",
//     animation: squareTimeline,
//     toggleActions: "restart none reverse none",
//     scrub: 1,
//     id: "#red",
//     markers: true
// });