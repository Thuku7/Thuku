// variables

const pageTrigger = document.querySelectorAll(".page-trigger");

pageTrigger.forEach(page => {
  let pageName = page.querySelector(".page-name");
  let pageContent = page.querySelector('.page-content');
  let footer = page.querySelector(".footerz");

  gsap.set(pageName, {
    xPercent: -100,
    opacity: 0
  })

  gsap.set(pageContent, {
    xPercent: 100,
    opacity: 0
  })

  gsap.set(footer, {
    xPercent: 100,
    opacity: 0

  })

  gsap.to(pageName, {
    scrollTrigger: {
      trigger: page,
      start: "top bottom",
      end:"bottom 95%",
      markers: true,
      scrub: true
    },
    xPercent:0,
    opacity: 1

  })

  gsap.to(pageContent, {
    scrollTrigger: {
      trigger: page,
      start: "top bottom",
      end:"bottom 95%",
      markers: true,
      scrub: true
    },
    xPercent:0,
    opacity: 1

  })

  gsap.to(footer, {
    scrollTrigger: {
      trigger: page,
      start: "top bottom",
      end:"bottom 95%",
      markers: true,
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
