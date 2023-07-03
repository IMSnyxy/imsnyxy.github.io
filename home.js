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



var cardTexts = document.getElementsByClassName('card-text-truncate');
for (var i = 0; i < cardTexts.length; i++) {
  $clamp(cardTexts[i], { clamp: 3 });
}

$(document).ready(function() {
  $('.dropdown-toggle').dropdown();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scrolling and add animation classes to sections
function handleScroll() {
  var firstSection = document.querySelector('.first-section');
  var secondSection = document.querySelector('.second-section');
  var thirdSection = document.querySelector('.third-section');

  if (isInViewport(firstSection)) {
    firstSection.classList.add('slide-up');
  }

  if (isInViewport(secondSection)) {
    secondSection.classList.add('slide-up');
  }

  if (isInViewport(thirdSection)) {
    thirdSection.classList.add('slide-up');
  }
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
window.addEventListener('DOMContentLoaded', handleScroll);
