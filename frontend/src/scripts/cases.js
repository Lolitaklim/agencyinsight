// Добавление обработчика для обновления при изменении размера окна (updateCasesDisplay) => handleResize

const casesContainer = document.getElementById('casesContainer')
const categoriesContainer = document.getElementById('categoriesContainer')
const SERVER_URL = 'http://localhost:8080'
const state = {}
const caseTemplate = (
  href,
  imageUrl,
  altImage,
  title,
  category,
  gridArea,
  category_id
) => `
    <a href="case.html?case=${encodeURIComponent(
      href
    )}" class="case" style="grid-area: ${gridArea}">
        <div class="container_img">
            <img src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}" />
        </div>
        <p class="category" data-category="${category_id}">${category}</p>
        <p class="title">${title}</p>
    </a>
`

async function loadCases() {
  try {
    const response = await fetch(`${SERVER_URL}/api/get_all_cases.php`)

    state.data = await response.json()
    state.layout = []

    // handleResize
    updateCasesDisplay()
    displayCategories(state.data.categories)
  } catch (error) {
    console.error('Ошибка загрузки данных для Cases:', error)
  }
}

loadCases()

// Обновление отображения случаев в зависимости от ширины экрана
const updateCasesDisplay = () => {
  casesContainer.innerHTML = ''
  if (window.innerWidth >= 1200) {
    displaySnakeCases(4, '16vw', state.data.cases)
  } else if (window.innerWidth <= 1200 && window.innerWidth >= 900) {
    displaySnakeCases(3, '21.8vw', state.data.cases)
  } else if (window.innerWidth <= 900) {
    displayCases(state.data.cases)
  }
}

const updateCasesDisplayWithFilteredCases = (cases) => {
  casesContainer.innerHTML = ''
  if (window.innerWidth >= 1200) {
    displaySnakeCases(4, '16vw', cases)
  } else if (window.innerWidth <= 1200 && window.innerWidth >= 900) {
    displaySnakeCases(3, '21.8vw', cases)
  } else if (window.innerWidth <= 900) {
    displayCases(cases)
  }
}

// Функция отображения случаев в формате "змейка"
function displaySnakeCases(maxRowLength, heightCase, cases) {
  const trimData = cases
  state.layout.length = 0
  displayCases(trimData)

  // Заполнение пустых ячеек для полного ряда
  if (state.layout.length % maxRowLength > 0) {
    const missingCells = maxRowLength - (state.layout.length % maxRowLength)
    state.layout.push(...Array(missingCells).fill('.'))
  }

  // Формирование шаблона сетки для CSS Grid
  let gridTemplateAreas = ''
  for (let i = 0; i < state.layout.length; i += maxRowLength) {
    const row = state.layout.slice(i, i + maxRowLength)
    if ((i / maxRowLength) % 2 === 1) {
      row.reverse()
    }
    gridTemplateAreas += `'${row.join(' ')}' `
  }

  const gridTemplateRows = Math.ceil(state.layout.length / maxRowLength)
  casesContainer.style.gridTemplateRows = `repeat(${gridTemplateRows}, ${heightCase})`
  casesContainer.style.gridTemplateAreas = gridTemplateAreas.trim()
}

// Функция отображения случаев
function displayCases(cases) {
  const slidesHtml = cases
    .map((item) => {
      const itemName = `item-${item.case_id}`
      const count = item.block_size == 1 ? 1 : 2
      state.layout.push(...Array(count).fill(itemName))

      return caseTemplate(
        `${item.href}`,
        item.image_url,
        item.alt_image,
        item.title,
        item.category,
        `item-${item.case_id}`,
        item.category_id
      )
    })
    .join('')
  casesContainer.innerHTML = slidesHtml
}

const categoryTemplate = (category_id, category) => `
    <h3 class="category ${
      category_id === 'all' ? 'active' : ''
    }" data-category="${category_id}" >${category}</h3>
`

function displayCategories(categories) {
  const allCategory = { category_id: 'all', category: 'Все' }
  const updatedCategories = [allCategory, ...categories]
  const slidesHtml = updatedCategories
    .map((item) => {
      return categoryTemplate(item.category_id, item.category)
    })
    .join('')
  categoriesContainer.innerHTML = slidesHtml
  addClickHandlers()
}

function addClickHandlers() {
  const categories = document.querySelectorAll('.category')
  categories.forEach((category) => {
    category.addEventListener('click', function () {
      const activeCategory = document.querySelector('.active')
      // if (activeCategory) {
      activeCategory.classList.remove('active')
      // }
      category.classList.add('active')

      filterCases(category.dataset.category)
    })
  })
}

function filterCases(categoryId) {
  const filteredCases =
    categoryId === 'all'
      ? state.data.cases
      : state.data.cases.filter((item) => item.category_id === categoryId)

  updateCasesDisplayWithFilteredCases(filteredCases)
}
