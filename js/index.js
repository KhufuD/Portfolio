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


fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@khufudev')
   .then((res) => res.json())
   .then((data) => {
      // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items //This is an array with the content. No feed, no info about author etc..
      const posts = res.filter(item => item.categories.length > 4) // That's the main trick* !

      // Functions to create a short text out of whole blog's content
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }

      // Put things in right spots of markup
      let output = '';
      posts.slice(0,3).forEach((item) => {
        output += `
            <li class="blog__post" >
               <a href="${item.link}" target="_blank">
                  <img src="${item.thumbnail}" class="blog__topImg"></img>
                  <div class="blog__content">
                     <div class="blog_preview">
                        <h2 class="blog__title">${shortenText(item.title)}</h2>
                        <p class="blog__intro">${shortenText(toText(item.content),0, 160)}</p>
                     </div>
                     <hr>
                     <div class="blog__info">
                        <span class="blog__author">${item.author}</span>
                        <span class="blog__date">${shortenText(item.pubDate,0 ,10)}</span>
                     </div>
                  </div>
               <a/>
            </li>`
   
        
      })
      document.querySelector('.blog__slider').innerHTML = output

})


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "khufudev@gmail.com",
        Password : "Roronoa.zoro1",
        To : 'khufudev@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Email from the website",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}