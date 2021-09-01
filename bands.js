let bandsToggle = document.getElementById("bands-toggle")
let bandsList = document.getElementById("bands-list")

bandsToggle.addEventListener('click', function () {
  bandsList.classList.toggle('close')
  bandsList.classList.toggle('open')
  return false
})
