var imageIndex = 0;
var images = [
    "./assets/img/banner0.jpg",
    "./assets/img/banner1.jpg",
    
];
var timer = setInterval(nextImage, 3000);

function nextImage() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  document.getElementById("image").src = images[imageIndex];
}

function previousImage() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  document.getElementById("image").src = images[imageIndex];
}
