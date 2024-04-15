function navAnimation() {
    var nav = document.querySelector("nav");
    var navMiddleElements = document.querySelectorAll(".nav-middle-element");

    navMiddleElements.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            // Timeline to animate the nav-bottom
            let tl = gsap.timeline();

            tl.to("#nav-bottom", {
                height: "21vh",
                duration: 0.5
            });
            tl.to(".nav-middle h5", {
                display: "block",
                duration: 0.1
            });
            tl.to(".nav-middle h5 span", {
                y: 0,
                stagger: {
                    amount: 0.5
                }
            });
        });
    });

    nav.addEventListener("mouseleave", function (event) {
        if (!nav.contains(event.relatedTarget) && event.relatedTarget.id !== "nav-bottom") {
            // Timeline to animate the nav-bottom
            var tl = gsap.timeline();

            tl.to(".nav-middle h5 span", {
                y: 25,
                stagger: {
                    amount: 0.2
                }
            });
            tl.to(".nav-middle h5", {
                display: "none",
                duration: 0.1
            });
            tl.to("#nav-bottom", {
                height: 0,
                duration: 0.2
            });
        }
    });
}

navAnimation()