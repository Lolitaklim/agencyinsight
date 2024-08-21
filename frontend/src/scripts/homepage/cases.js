import { SERVER_URL } from './../globalVariables'
const state = {}
// Добавление обработчика для обновления при изменении размера окна (updateCasesDisplay) => handleResize

const casesContainer = document.getElementById('casesContainer')

const caseTemplate = (href, imageUrl, altImage, title, category, gridArea) => `
    <a href="${href}" class="case" style="grid-area: ${gridArea}">
        <div class="container_img">
            <img src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}" />
        </div>
        <p class="category">${category}</p>
        <p class="title">${title}</p>
    </a>
`

// Функция обрезки массива случаев до нужного размера
function trimCases(cases, targetSize) {
  let totalSize = 0
  let trimmedCases = []
  for (let i = 0; i < cases.length; i++) {
    let caseSize = parseInt(cases[i].block_size, 10)

    if (totalSize + caseSize <= targetSize) {
      totalSize += caseSize
      trimmedCases.push(cases[i])
    } else if (totalSize + 1 == targetSize && caseSize == 2) {
      // Создаем копию элемента и изменяем ее
      let modifiedCase = { ...cases[i], block_size: '1' }
      totalSize += 1
      trimmedCases.push(modifiedCase)
    }
    if (totalSize === targetSize) break
  }
  return trimmedCases
}

async function loadCases() {
  try {
    const response = await fetch(`${SERVER_URL}/api/get_homepage_cases.php`)
    state.data = await response.json()
    state.layout = []

    // handleResize
    updateCasesDisplay()
  } catch (error) {
    console.error('Ошибка загрузки данных для Cases:', error)
  }
}

loadCases()

// Обновление отображения случаев в зависимости от ширины экрана
export const updateCasesDisplay = () => {
  casesContainer.innerHTML = ''
  if (window.innerWidth >= 1200) {
    displaySnakeCases(4, 8)
  } else if (window.innerWidth <= 1200 && window.innerWidth >= 900) {
    displaySnakeCases(3, 6)
  } else if (window.innerWidth <= 900 && window.innerWidth >= 650) {
    displayCases(state.data.slice(0, 4))
  } else if (window.innerWidth <= 650) {
    displayCases(state.data.slice(0, 3))
  }
}

// Функция отображения случаев в формате "змейка"
function displaySnakeCases(maxRowLength, maxBlocks) {
  const trimData = trimCases(state.data, maxBlocks)

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
  casesContainer.style.gridTemplateAreas = gridTemplateAreas.trim()
}

// Функция отображения случаев
function displayCases(cases) {
  const slidesHtml = cases
    .map((item) => {
      const itemName = `item-${item.display_order}`
      const count = item.block_size == 1 ? 1 : 2
      state.layout.push(...Array(count).fill(itemName))

      return caseTemplate(
        `#${item.href}`,
        item.image_url,
        item.alt_image,
        item.title,
        item.category,
        `item-${item.display_order}`
      )
    })
    .join('')
  casesContainer.innerHTML = slidesHtml
}
