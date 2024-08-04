// document.addEventListener('DOMContentLoaded', function () {
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')

const panelRight = document.getElementById('panelRight')
const panelLeft = document.getElementById('panelLeft')
openMenu.addEventListener('click', function () {
  panelRight.classList.toggle('opened')
  panelLeft.classList.toggle('opened')
})
closeMenu.addEventListener('click', function () {
  panelRight.classList.toggle('opened')
  panelLeft.classList.toggle('opened')
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

const buttonChevron = document.getElementById('buttonDropdownMenu')

buttonChevron.addEventListener('click', () => {
  const content = document.getElementById('dropdownContentMenu')
  const chevron = document.getElementById('chevronMenu')
  const informationMenu = document.getElementById('informationMenu')

  const expanded = chevron.classList.toggle('expanded')
  if (window.innerHeight / window.innerWidth < 2 && window.innerWidth < 650) {
    informationMenu.classList.toggle('display')
  }

  if (expanded) {
    content.style.maxHeight = content.scrollHeight + 'px'
  } else {
    content.style.maxHeight = null
  }
})
