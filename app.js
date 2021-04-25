const first = document.querySelector('.first');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');



let timeline = new TimelineMax();

 timeline
.fromTo(first,1, {height: "0%"},{height:'80%',ease: Power2.easeInOut})
.fromTo(first,1.2,{width:'100%'},{width:'80%',ease: Power2.easeInOut});

