const images = [
  "homemain1.png",
  "homemain2.png",
  "homemain3.png",
  "homemain4.png"
];

let currentImageIndex = 0;
const slideshowInterval = 5000;

function changeBackgroundImage() {
  const hheader = document.querySelector(".hheader");
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImageUrl = images[nextImageIndex];

  hheader.style.backgroundImage = `url(${nextImageUrl})`;
  currentImageIndex = nextImageIndex;
}

setInterval(changeBackgroundImage, slideshowInterval);

// Truncation and Ellipsis
var cardTexts = document.getElementsByClassName('card-text-truncate');
for (var i = 0; i < cardTexts.length; i++) {
  $clamp(cardTexts[i], { clamp: 3 });
}

// Dropdown
$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
});

// Animation
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();

  $(".slide-up").each(function() {
    var elementOffset = $(this).offset().top;
    
    if (scrollTop > elementOffset - windowHeight + 200) {
      $(this).addClass("active");
      console.log("Detected");
    }
  });
}

$(window).on("scroll", handleScroll);

handleScroll();

