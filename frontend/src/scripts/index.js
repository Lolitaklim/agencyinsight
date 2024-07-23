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
document.addEventListener('DOMContentLoaded', function () {
  const mainNewsSwiper = new Swiper('#mainNewsSwiper', {
    modules: [Autoplay, Pagination],
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 4000,
      // disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  })
})
