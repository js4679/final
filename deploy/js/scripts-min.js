import{section1Animation}from"./sections/section-1.js";import{section2Animation}from"./sections/section-2.js";function mouseClick(){console.log("click"),!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}section1Animation(),section2Animation(),$burger.on("click",mouseClick),$navA.on("click",mouseClick);import{gsap}from"gsap";