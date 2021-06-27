const tym=gsap.timeline({defaults:{ease:"power1.out"}});

tym.to('.text',{y:"0%", duration: 1, stagger:0.25});
tym.to('.slider',{y:"-100%",duration:1.25, delay:0.5});
tym.to('.intro',{y:"-100%",duration:1},"-=1");
tym.fromTo('nav',{opacity:0},{opacity:1, duration:2});
tym.fromTo('.big',{opacity:0},{opacity:1, duration:2},"-=2");