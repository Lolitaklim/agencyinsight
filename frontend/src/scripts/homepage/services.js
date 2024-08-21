// Карточки услуг
const buttons = document.querySelectorAll('.btnServices')

function toggleButton(button) {
  button.classList.toggle('active')
  const card = button.closest('.card')
  const content = card.querySelector('.content')
  const expanded = button.classList.toggle('expanded')

  if (expanded) {
    content.style.maxHeight = content.scrollHeight + 'px'
  } else {
    content.style.maxHeight = null
  }
}

function enableButtons() {
  buttons.forEach((button) => {
    button.disabled = false
    button.addEventListener('click', () => toggleButton(button))
  })
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true
    button.removeEventListener('click', () => toggleButton(button))
  })
}

export function checkScreenWidthServices() {
  if (window.innerWidth < 670) {
    enableButtons()
  } else {
    disableButtons()
  }
}

// handleResize
checkScreenWidthServices()
