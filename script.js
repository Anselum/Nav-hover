let texts = document.querySelectorAll(".text");

texts.forEach(text => {
    let letter = new SplitType(text);
})

texts.forEach(txt => {
    txt.addEventListener("mouseenter", () => {
        let chars = txt.querySelectorAll(".char");
        let tl = gsap.timeline();
        tl.to(chars, { y: -70, duration: 0.4, stagger: 0.03 })
            .fromTo(chars, { y: 70, duration: 0.4, stagger: 0.03 }, { y: 0, duration: 0.4, stagger: 0.03, color: "orange" }, "+=0.07")
    })
    txt.addEventListener("mouseleave", () => {
        let chars = txt.querySelectorAll(".char");
        let tl = gsap.timeline();
        tl.to(chars, { y: 70, duration: 0.4, stagger: 0.03 })
            .fromTo(chars, { y: -70, duration: 0.4, stagger: 0.03 }, { y: 0, duration: 0.4, stagger: 0.03, color: "black" }, "+=0.07")
    })
})