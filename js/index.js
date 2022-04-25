var countDownDate = new Date("June 1, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("portfolio-timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var scrollPosition = window.scrollY;
var navBar = document.getElementById('navigate');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 325.68) {
        navBar.classList.add('nav-scrolled');
    } else {
        navBar.classList.remove('nav-scrolled');
    }

});

var arrowScrollPosition = window.scrollY;
var topArrow = document.getElementById('arrow-up');

window.addEventListener('scroll', function() {

    arrowScrollPosition = window.scrollY;

    if (arrowScrollPosition >= 325.68) {
        topArrow.classList.add('show-arrow');
    } else {
        topArrow.classList.remove('show-arrow');
    }

});

topArrow.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


