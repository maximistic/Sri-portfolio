document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(SplitText);

    const texts = document.querySelectorAll('.text-wrapper p');
    const tl = gsap.timeline({ repeat: -1 });

    // Initially hide all texts except the first one
    gsap.set(texts, { autoAlpha: 0 });
    gsap.set(texts[0], { autoAlpha: 1 });

    texts.forEach((text, index) => {
        const splitText = new SplitText(text, { type: "chars" });

        tl.from(splitText.chars, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: 50,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
        })
        .to(splitText.chars, {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            y: -50,
            rotationX: -180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01,
            delay: 1
        })

        if (index !== texts.length - 1) {
            tl.set(text, { autoAlpha: 0 })
              .set(texts[index + 1], { autoAlpha: 1 });
        } else {
            tl.set(text, { autoAlpha: 0 })
              .set(texts[0], { autoAlpha: 1 });
        }
    });
});