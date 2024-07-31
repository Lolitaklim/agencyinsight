// мобильные кнопки, затухание при scroll

state.buttonsContainer = document.getElementById('mobile-buttons')

function handleScroll() {
  state.buttonsContainer.classList.add('scrolled')
  clearTimeout(state.timeoutScroll)
  state.timeoutScroll = setTimeout(() => {
    state.buttonsContainer.classList.remove('scrolled')
  }, 300)
}

function checkScreenWidthScroll() {
  if (window.innerWidth <= 650) {
    window.addEventListener('scroll', handleScroll)
  } else {
    window.removeEventListener('scroll', handleScroll)
    state.buttonsContainer.classList.remove('scrolled')
  }
}
// handleResize
checkScreenWidthScroll()
