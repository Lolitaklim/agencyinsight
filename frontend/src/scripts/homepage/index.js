import { checkScreenWidthScroll } from './mobileScroll'
import { checkScreenWidthServices } from './services'
import { updateCasesDisplay } from './cases'

function handleResize() {
  checkScreenWidthScroll()
  updateCasesDisplay()
  checkScreenWidthServices()
}
window.addEventListener('resize', handleResize)
