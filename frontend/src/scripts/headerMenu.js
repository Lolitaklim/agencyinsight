document.addEventListener('DOMContentLoaded', function () {
  const toggleMenuButton = document.getElementById('toggleMenu')
  const panelRight = document.getElementById('panelRight')
  const panelLeft = document.getElementById('panelLeft')
  toggleMenuButton.addEventListener('click', function () {
    panelRight.classList.toggle('opened')
    panelLeft.classList.toggle('opened')
    toggleMenuButton.classList.toggle('close-btn')
  })

  let buttonsFillHover = document.querySelectorAll('.button-fill-hover')
  buttonsFillHover.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      x = e.offsetX
      y = e.offsetY
      button.style.setProperty('--mouse-x', x + 'px')
      button.style.setProperty('--mouse-y', y + 'px')
    })
  })

  // const toggleButton = document.getElementById('dropdown-toggle')
  // const dropdownMenu = document.getElementById('dropdown-menu')
  // const dropdownContent = document.getElementById('dropdown-content')
  // const chevron = document.getElementById('chevron')
  // toggleButton.addEventListener('click', function (event) {
  //   event.preventDefault()
  //   if (dropdownMenu.classList.contains('open')) {
  //     dropdownContent.style.maxHeight = null
  //   } else {
  //     dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'
  //   }
  //   dropdownMenu.classList.toggle('open')
  //   chevron.classList.toggle('open-span')
  // })
})
