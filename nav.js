let menuSwitch = document.querySelector('.menu-switch')
let menuNav = document.querySelector('.menu')

menuSwitch.addEventListener('click', function () {
  menuNav.classList.toggle('close')
  menuNav.classList.toggle('open')
  return false
})
