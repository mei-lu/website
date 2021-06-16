
document.addEventListener("mousemove", function(e) {
    rotationXVal = window.innerWidth
    rotationYVal = 
    gsap.to(".intro-container", {
        rotationX: rotationXVal, 
        rotationY: rotationYVal,
        delay: 0.5,
        })
});