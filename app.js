const first = document.querySelector('.first');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');



let timeline = new TimelineMax();

 timeline
.fromTo(first,1, {height: "0%"},{height:'80%',ease: Power2.easeInOut})
.fromTo(first,1.2,{width:'100%'},{width:'80%',ease: Power2.easeInOut})
.fromTo(logo,1.2,{x:"250px"},{x:"10px"} ,"-=2")
.fromTo(headline,1,{opacity:"0"},{opacity:"1"},"-=1.2")
.fromTo(headline ,1.2 ,{y:"-100%"},{y:"0%"});

