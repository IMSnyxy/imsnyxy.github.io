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

// Start the slideshow
setInterval(changeBackgroundImage, slideshowInterval);

// Check if the element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add "show" class to the sections when they are in the viewport
function showSections() {
  var firstSection = document.querySelector('.first-section');
  var secondSection = document.querySelector('.second-section');

  if (isElementInViewport(firstSection)) {
    firstSection.classList.add('show');
  }

  if (isElementInViewport(secondSection)) {
    secondSection.classList.add('show');
  }
}

// Listen for scroll event and show the sections
window.addEventListener('scroll', showSections);

// Show the sections initially if they are in the viewport on page load
window.addEventListener('load', showSections);

var cardTexts = document.getElementsByClassName('card-text-truncate');
for (var i = 0; i < cardTexts.length; i++) {
  $clamp(cardTexts[i], { clamp: 3 });
}

$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
});
