function handleResize() {
  checkScreenWidthScroll()
  updateCasesDisplay()
  checkScreenWidthServices()
}
window.addEventListener('resize', handleResize)
