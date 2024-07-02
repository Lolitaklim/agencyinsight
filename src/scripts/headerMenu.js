document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleMenu')
  const panelRight = document.getElementById('panelRight')
  const panelLeft = document.getElementById('panelLeft')

  toggleButton.addEventListener('click', function () {
    panelRight.classList.toggle('opened-right')
    panelLeft.classList.toggle('opened-left')
  })
})
