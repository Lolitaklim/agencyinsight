import Typewriter from 'typewriter-effect/dist/core.js'
import Swiper from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'

new Typewriter('#typewriter', {
  strings: [
    'решения',
    'концепции',
    'стратегии',
    'инновации',
    'прорыв',
    'успех',
  ],
  autoStart: true,
  loop: true,
})

let timeout
const buttonsContainer = document.getElementById('mobile-buttons')
const handleScroll = () => {
  buttonsContainer.classList.add('scrolled')
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    buttonsContainer.classList.remove('scrolled')
  }, 300)
}
const checkScreenWidth = () => {
  if (window.innerWidth <= 650) {
    window.addEventListener('scroll', handleScroll)
  } else {
    window.removeEventListener('scroll', handleScroll)
    buttonsContainer.classList.remove('scrolled')
  }
}
checkScreenWidth()
window.addEventListener('resize', checkScreenWidth)

const slideTemplate = (href, imageUrl, altImage, title, description) => `
    <a href="${href}" class="swiper-slide">
      <div class="container_img">
        <img src="http://localhost:8080/uploads/${imageUrl}" alt="${altImage}"/>
      </div>
        <p class="title">${title}</p>
        <p class="description">${description}</p>
    </a>
`
async function loadSwiperData() {
  try {
    const response = await fetch('http://localhost:8080/get_swiper_hero.php')
    const data = await response.json()
    const swiperWrapper = document.getElementById('mainNewsSwiperWrapper')
    const slidesHtml = data
      .map((item) =>
        slideTemplate(
          `#${item.href}`,
          item.image_url,
          item.alt_image,
          item.title,
          item.description
        )
      )
      .join('')
    swiperWrapper.innerHTML = slidesHtml
    const swiper = new Swiper('#mainNewsSwiper', {
      modules: [Autoplay, Pagination],
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
    })
  } catch (error) {
    console.error('Ошибка загрузки данных для Swiper:', error)
  }
}
loadSwiperData()

const carouselContainer = document.getElementById('carouselContainer')
const carouselItems = carouselContainer.innerHTML
carouselContainer.innerHTML += carouselItems
let scrollLeft = 0
const scrollSpeed = 3
function animateCarousel(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp
  }
  const deltaTime = timestamp - lastTimestamp
  lastTimestamp = timestamp
  scrollLeft += (scrollSpeed * deltaTime) / 60
  if (scrollLeft >= carouselContainer.scrollWidth / 2) {
    scrollLeft = 0
  }
  carouselContainer.style.transform = `translateX(-${scrollLeft}px)`
  requestAnimationFrame(animateCarousel)
}
let lastTimestamp = null
requestAnimationFrame(animateCarousel)
