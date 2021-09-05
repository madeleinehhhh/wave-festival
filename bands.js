let bandsToggle = document.getElementById("bands-toggle")
let bandsList = document.getElementById("bands-slideshow")

bandsToggle.addEventListener('click', function () {
  bandsList.classList.toggle('close')
  bandsList.classList.toggle('open')
  return false
})
