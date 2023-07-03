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