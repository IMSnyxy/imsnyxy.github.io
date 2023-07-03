const images = [
    "homemain1.png",
    "homemain2.png",
    "homemain3.png",
    "homemain4.png"
  ];
  
  let currentImageIndex = 0;
  const slideshowInterval = 5000; // Interval in milliseconds (5 seconds)
  
  function fadeToBlack(element) {
    let opacity = 1;
    const fadeInterval = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.01;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInterval);
        fadeIn(element);
      }
    }, 10);
  }
  
  function fadeIn(element) {
    let opacity = 0;
    element.style.backgroundImage = `url(${images[currentImageIndex]})`;
  
    const fadeInterval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.01;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInterval);
      }
    }, 10);
  }
  
  function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  }
  
  function changeBackgroundImage() {
    const hheader = document.querySelector(".hheader");
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    const nextImageUrl = images[nextImageIndex];
  
    preloadImage(nextImageUrl)
      .then(() => {
        fadeToBlack(hheader);
        setTimeout(() => {
          currentImageIndex = nextImageIndex;
        }, 1000); // Delay the removal of nextImage to match fade out effect
      })
      .catch((error) => {
        console.error("Failed to preload image:", error);
      });
  }
  
  // Start the slideshow
  setInterval(changeBackgroundImage, slideshowInterval);
  