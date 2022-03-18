// Moving the cards in and out



// const aboutClass = document.getElementsByClassName("about");
// const skillsClass = document.getElementsByClassName("skills");
// const whyMeClass = document.getElementsByClassName("why-me");
// const portfolioClass = document.getElementsByClassName("portfolio");
// const hireMeClass = document.getElementsByClassName("hire-me");
// const newsLetterClass = document.getElementsByClassName("news-letter");

const aboutId = document.getElementById("about");
// const skillsId = document.getElementById("skills");
// const whyMeId = document.getElementById("why-me");
// const portfolioId = document.getElementById("portfolio");
// const hireMeId = document.getElementById("hire-me");
// const newsLetterId = document.getElementById("news-letter");

// Moving the card in

// aboutId.addEventListener("click", slide());

function aboutSlide() {
    var element = document.getElementById("about-out");
    element.classList.add("about-in");
}

// const arrow = document.getElementsByClassName("card-btn");