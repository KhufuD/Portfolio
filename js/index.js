window.addEventListener('scroll', () => {
    let movingtext = document.getElementById("moving-text");
    let scrolled = window.pageYOffset;
    let left = scrolled * 3;
    movingtext.style.transform = `translate3d(-${left}px, 0px, 0px)`;

    let reverseMove = document.getElementById("reverse-movement");
    let right = left;
    reverseMove.style.transform = `translate3d(-${right}px, 0px, 0px)`;
})