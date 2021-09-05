let bandsToggle = document.getElementById("bands-toggle")
let bandsList = document.getElementById("bands-slideshow")
let steps = document.getElementById("steps")

bandsToggle.addEventListener('click', function () {
  bandsList.classList.toggle('close')
  bandsList.classList.toggle('open')

  steps.classList.toggle('close')
  steps.classList.toggle('open')
  return false
})
