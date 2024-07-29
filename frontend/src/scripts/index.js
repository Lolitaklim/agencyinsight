import Typewriter from 'typewriter-effect/dist/core.js'
import Swiper from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'

function handleResize() {
  // checkScreenWidthScroll()
  // updateCasesDisplay()
  // checkScreenWidthServices()
}
window.addEventListener('resize', handleResize)

// typewriter
// new Typewriter('#typewriter', {
//   strings: [
//     'решения',
//     'концепции',
//     'стратегии',
//     'инновации',
//     'прорыв',
//     'успех',
//   ],
//   autoStart: true,
//   loop: true,
// })

// мобильные кнопки, затухание при scroll
// let timeout
// const buttonsContainer = document.getElementById('mobile-buttons')
// const handleScroll = () => {
//   buttonsContainer.classList.add('scrolled')
//   clearTimeout(timeout)
//   timeout = setTimeout(() => {
//     buttonsContainer.classList.remove('scrolled')
//   }, 300)
// }

// const checkScreenWidthScroll = () => {
//   if (window.innerWidth <= 650) {
//     window.addEventListener('scroll', handleScroll)
//   } else {
//     window.removeEventListener('scroll', handleScroll)
//     buttonsContainer.classList.remove('scrolled')
//   }
// }
// checkScreenWidth()

// темплейт главного свайпера
const slideTemplate = (href, imageUrl, altImage, title, description) => `
    <a href="${href}" class="swiper-slide">
      <div class="container_img">
        <img src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}"/>
      </div>
        <p class="title">${title}</p>
        <p class="description">${description}</p>
    </a>
`

async function loadSwiperData(element, wrapper, script) {
  try {
    const response = await fetch(`${SERVER_URL}/api/${script}`)
    const data = await response.json()
    const swiperWrapper = document.getElementById(wrapper)
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
    const swiper = new Swiper(element, {
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
loadSwiperData(
  '#mainNewsSwiper',
  'mainNewsSwiperWrapper',
  'get_swiper_hero.php'
)
loadSwiperData('#newsSwiper', 'newsSwiperWrapper', 'get_homepage_news.php')

// carousel
// const carouselContainer = document.getElementById('carouselContainer')
// const carouselItems = carouselContainer.innerHTML
// carouselContainer.innerHTML += carouselItems
// let scrollLeft = 0
// const scrollSpeed = 3
// function animateCarousel(timestamp) {
//   if (!lastTimestamp) {
//     lastTimestamp = timestamp
//   }
//   const deltaTime = timestamp - lastTimestamp
//   lastTimestamp = timestamp
//   scrollLeft += (scrollSpeed * deltaTime) / 60
//   if (scrollLeft >= carouselContainer.scrollWidth / 2) {
//     scrollLeft = 0
//   }
//   carouselContainer.style.transform = `translateX(-${scrollLeft}px)`
//   requestAnimationFrame(animateCarousel)
// }
// let lastTimestamp = null
// requestAnimationFrame(animateCarousel)

// Карточки услуг
// const buttons = document.querySelectorAll('.btnServices')
// function toggleButton(button) {
//   button.classList.toggle('active')
//   const card = button.closest('.card')
//   const content = card.querySelector('.content')
//   const expanded = button.classList.toggle('expanded')
//   if (expanded) {
//     content.style.maxHeight = content.scrollHeight + 'px'
//   } else {
//     content.style.maxHeight = null
//   }
// }
// function enableButtons() {
//   buttons.forEach((button) => {
//     button.disabled = false
//     button.addEventListener('click', () => toggleButton(button))
//   })
// }
// function disableButtons() {
//   buttons.forEach((button) => {
//     button.disabled = true
//     button.removeEventListener('click', () => toggleButton(button))
//   })
// }
// function checkScreenWidthServices() {
//   if (window.innerWidth < 670) {
//     enableButtons()
//   } else {
//     disableButtons()
//   }
// }
// checkScreenWidthServices()
