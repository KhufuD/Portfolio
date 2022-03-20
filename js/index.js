// Moving the cards in and out



// const aboutClass = document.getElementsByClassName("about");
// const skillsClass = document.getElementsByClassName("skills");
// const whyMeClass = document.getElementsByClassName("why-me");
// const portfolioClass = document.getElementsByClassName("portfolio");
// const hireMeClass = document.getElementsByClassName("hire-me");
// const newsLetterClass = document.getElementsByClassName("news-letter");


// const skillsId = document.getElementById("skills");
// const whyMeId = document.getElementById("why-me");
// const portfolioId = document.getElementById("portfolio");
// const hireMeId = document.getElementById("hire-me");
// const newsLetterId = document.getElementById("news-letter");

// Moving the card in

// aboutId.addEventListener("click", slide());

const aboutId = document.getElementById("about");

function aboutSlideIn() {
    let element = document.getElementById("about-card");
    element.classList.add("about-in");
    element.classList.remove("card-out");

}

// Moving the card out

const arrow = document.getElementById("card-btn");

function aboutSlideOut() {
    let element = document.getElementById("about-card");
    element.classList.add("card-out");
    element.classList.remove("about-in");

}