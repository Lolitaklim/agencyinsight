import Swiper from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import { SERVER_URL } from '../globalVariables.js'

const state = {}
const slideTemplate = (
  href,
  imageUrl,
  altImage,
  title,
  description,
  cssClass
) => `
<a href="${href}" class="${cssClass}">
<div class="container_img">
  <img src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}"/>
</div>
  <p class="title">${title}</p>
  <p class="description">${description}</p>
</a>
`

function createSwiper(element) {
  new Swiper(element, {
    modules: [Autoplay, Pagination],
    spaceBetween: 10,
    // loop: true,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  })
}

function slidesHtml(cssClass) {
  return state.dataNews
    .map((item) =>
      slideTemplate(
        `#${item.href}`,
        item.image_url,
        item.alt_image,
        item.title,
        item.description,
        cssClass
      )
    )
    .join('')
}

async function loadSwiperData(element, wrapper, script, cards = undefined) {
  try {
    const response = await fetch(`${SERVER_URL}/api/${script}`)
    state.dataNews = await response.json()
    const swiperWrapper = document.getElementById(wrapper)

    swiperWrapper.innerHTML = slidesHtml('swiper-slide')
    if (cards) {
      const newsCards = document.getElementById(cards)
      newsCards.innerHTML = slidesHtml('card')
    }

    createSwiper(element)
  } catch (error) {
    console.error('Ошибка загрузки данных для Swiper:', error)
  }
}

loadSwiperData(
  '#newsSwiper',
  'newsSwiperWrapper',
  'get_homepage_news.php',
  'newsCards'
)

loadSwiperData(
  '#mainNewsSwiper',
  'mainNewsSwiperWrapper',
  'get_swiper_hero.php'
)
