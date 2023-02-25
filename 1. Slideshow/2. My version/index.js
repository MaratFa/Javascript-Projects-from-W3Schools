// Function for buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

function nextImage(direction) { 
  if (direction == 'next') {
    index++;
  }
  if (direction == 'prev') {
    index--;
  }
  if (index < 0) {
    index = images.length + index;
  }
  if (index > images.length - 1) {
    index = 0;
  }  
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}

prev.addEventListener('click', () => {
  nextImage('prev');
})

next.addEventListener('click', () => {
  nextImage('next');
})

// Function for dots
const dots = document.querySelector(".dots").children;

function displayImage(currentDot) {
  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  for(let j = 0; j < dots.length; j++) {
    dots[j].classList.remove('dotActive');
    dots[j].classList.add('dot');
  }
  images[currentDot].classList.add('main');  
  dots[currentDot].classList.add('dotActive');
}
