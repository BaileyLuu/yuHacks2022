// Countdown to event date
var countDownDate = new Date("Feb 18, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "D " + hours + "H "
        + minutes + "M " + seconds + "S ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
  
  document.addEventListener('DOMContentLoaded', () => {
    countDown('days', 'hours', 'minutes', 'seconds', new Date(2022, 02, 18));
  });
  
  // Scroll to top
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  var rootElement = document.documentElement;
  
  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  scrollToTopBtn.addEventListener('click', scrollToTop);
  
  //Smooth Scroll Effect that works for all browser //
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
//-----------------------------------------------------//


  // Track switching
  var data = {
    track1: {
      track: 'track1',
      title: 'Education Challenge',
      content:
        'Tired of Zoom University? This challenge is open to teams who want to rethink education. Whether tackling the struggles of online education or developing an app that enhances traditional education, teams will have their work cut out for them with this track!',
      imagePath: 'dist/images/Kids_Studying_from_Home-pana_2.svg'
    },
    track2: {
      track: 'track2',
      title: 'Environment Challenge',
      content:
        'Have an idea for a hack that looks to solve pressing environmental issues? This challenge is open to teams who want to tackle big problems like climate change, food waste, and biodiversity loss (just to name a few).',
      imagePath: 'dist/images/Environment-rafiki.svg'
    },
    track3: {
      track: 'track3',
      title: 'Media Challenge',
      content:
        'Looking to solve the spread of misinformation? Interested in tackling the issues highlighted by the Social Dilemma? This challenge is open to teams who would like to take on modern media. Problems such as social media dependency, fake news, and body shaming need solving!',
      imagePath: 'dist/images/Mobile_Marketing-cuate_3.svg'
    },
    track4: {
      track: 'track4',
      title: 'Economy Challenge',
      content:
        'Economic challenges such as poverty, rise of powers, and pandemics have the potential to destabilize entire continents. This challenge is open to teams who would like to explore solutions to some of the biggest problems available.',
      imagePath: 'dist/images/Finance-cuate.svg'
    },
    track5: {
      track: 'track5',
      title: 'Open Challenge',
      content:
        'Have an idea that doesn’t quite fit the bill of our other challenges? This challenge is open to teams who would like to put their creativity to the test and submit a project that does not meet the theme of the other yuHacks challenges.',
      imagePath: 'dist/images/Creative_thinking-pana_1.svg'
    },
    track6: {
      track: 'track6',
      title: 'New Hacker Challenge',
      content:
        'New to hackathons? This challenge is open to teams where a majority of the members are attending their first hackathon.',
      imagePath: 'dist/images/Coding-pana.svg'
    },
    track7: {
      track: 'track7',
      title: 'Non-Technical Challenge',
      content:
        'Not much of a developer? Still want to tackle challenges and explore ideas? This challenge is open to teams who are submitting a project in which they did not write any code. Examples: business proposals, powerpoint presentations, or merely a pitch.',
      imagePath: 'dist/images/Mind_map-cuate.svg'
    }
  };
  
  var icons = document.querySelector('#icons');
  icons.addEventListener('click', switchClick, false);
  
  function switchClick(track) {
    // Remove all active class
    var allIcon = document.querySelectorAll('#icons .btn i');
    allIcon.forEach((icon) => {
      icon.classList.remove('active');
    });
  
    var title = document.getElementById('trackTitle');
    var content = document.getElementById('trackContent');
    var image = document.getElementById('trackImage');
  
    var clickedIcon = track.target.id;
    var length = Object.keys(data).length;
    for (i = 0; i < length; i++) {
      var o = Object.values(data);
      if (o[i].track === clickedIcon) {
        title.innerHTML = o[i].title;
        content.innerHTML = o[i].content;
        image.src = o[i].imagePath;
        track.target.classList.add('active');
      }
    }
  
    // Fade in animation
    $('.track-content-text').css({
      position: 'relative',
      opacity: 0,
      left: '+=100'
    });
    $('.track-content-text').animate({ left: 0, opacity: 1 }, 500);
    $('.track-content-image').css({
      position: 'relative',
      opacity: 0,
      right: '+=100'
    });
    $('.track-content-image').animate({ right: 0, opacity: 1 }, 500);
  }
  
  // Init AOS
  AOS.init();
  
  // Navbar collapse on link click
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  
  $(".rotate").click(function(){
    $(this).toggleClass("down")  ; 
   })