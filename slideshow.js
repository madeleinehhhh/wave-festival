// on page load, display first slide
let currentSlide = 0

let slideNumber

let widthSlideshow = style.getPropertyValue('--width-slideshow')
console.log(widthSlideshow)

// how many slides total?
let totalSlides = document.querySelectorAll('#holder div').length

// this sets the text for the slide counter
let stepsText = function(slide) {
  slideNumber = slide + 1
  document.querySelector('#steps').textContent = slideNumber + ' / ' + totalSlides
}

// this sets the slide counter to start at 1
stepsText(currentSlide)

// this moves the slide to the left and runs the slide counter
let moveSlide = function(slide) {
  let leftPosition = (slide * widthSlideshow) + 'vw'
  document.getElementById('holder').style.left=leftPosition
  stepsText(slide)
}

// this moves the slide forward
let nextSlide = function() {
  if(currentSlide >= totalSlides-1) {
    currentSlide = 0
  } else {
    currentSlide = currentSlide + 1
  }
  moveSlide(currentSlide)
}

// this moves the slide back
let previousSlide = function() {
  if(currentSlide < 0) {
    currentSlide = totalSlides - 1
  } else {
    currentSlide = currentSlide - 1
  }
  moveSlide(currentSlide)
}

// this auto moves the slides 
let autoSlide = setInterval(function() {
  nextSlide()
}, 3000)
