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

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: 0.4
            })
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: 0.4
            })
        });

        // 'MouseEvent' it is basically give the details about our cursor movement
        // 'dets' is a keyword used for detail

        // console.log(elem.getBoundingClientRect())
        // 'getBoundingClientRect()' this function give DOM rect value which later help us to maintain the boundary of the cursor free movement for given image

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                ease: "power2.out",
                x: dets.x - elem.getBoundingClientRect().x - 70,
                y: dets.y - elem.getBoundingClientRect().y - 120
            })
        })
    });
}

function page3VideoAnimation() {
    var page3Center = document.querySelector("#page3-center");
    var video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1.1) scaleY(1.1)",
            opacity: 1,
            borderRadius: 50,
        });
    });
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(1.1) scaleY(1.1)",
            opacity: 0,
            borderRadius: 50,
        });
    })
}

navAnimation()
page2Animation()
page3videoAnimation()