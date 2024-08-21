function handleScrollAbout(
  cards,
  startScrollY,
  maxScrollTop,
  maxScrollLeft,
  speedFactor
) {
  const currentScrollY = window.scrollY
  const scrollFraction =
    (currentScrollY - startScrollY) / (maxScrollTop - startScrollY)
  const adjustedScrollLeft = scrollFraction * maxScrollLeft * speedFactor
  cards.scrollLeft = Math.min(adjustedScrollLeft, maxScrollLeft)
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target
        const maxScrollTop =
          document.documentElement.scrollHeight - window.innerHeight
        const maxScrollLeft = cards.scrollWidth - cards.clientWidth
        const startScrollY = window.scrollY
        const speedFactor = 5 // Коэффициент скорости прокрутки

        document.addEventListener('scroll', () =>
          handleScrollAbout(
            cards,
            startScrollY,
            maxScrollTop,
            maxScrollLeft,
            speedFactor
          )
        )
        observer.unobserve(cards)
      }
    })
  },
  { threshold: 0.9 }
)

const cardsContainer = document.getElementById('aboutUsCards')
observer.observe(cardsContainer)
