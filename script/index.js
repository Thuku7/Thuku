// variables

const pageTrigger = document.querySelectorAll(".page-trigger");

pageTrigger.forEach(triggerz => {
  let pageName = triggerz.querySelector(".page-name");
  let pageContent = triggerz.querySelector('.page-content');
  let footer = triggerz.querySelector(".footerz");

  gsap.set(pageName, {
    xPercent: -100,
    opacity: 0
  })

  gsap.set(pageContent, {
    xPercent: -100,
    opacity: 0
  })

  gsap.set(footer, {
    xPercent: 100,
    opacity: 0

  })

  gsap.to(pageName, {
    ScrollTrigger: {
      trigger: triggerz,
      start: "top bottom",
      end:"bottom 90%",
      marker: true,
      scrub: true
    },
    xPercent:0,
    opacity: 1

  })

  gsap.to(pageContent, {
    ScrollTrigger: {
      trigger: triggerz,
      start: "top bottom",
      end:"bottom 90%",
      marker: true,
      scrub: true
    },
    xPercent:0,
    opacity: 1

  })
   
})


















//smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
