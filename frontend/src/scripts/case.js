const SERVER_URL = 'http://localhost:8080'
// const state = {}

const caseHeadTmp = (imageUrl, altImage, title, category, logo, altLogo) => `
    <div class="case-head">
        <img class="logo" src="${SERVER_URL}/uploads/${logo}" alt="${altLogo}" />
        <h1>${title}</h1>
        <p class="category">${category}</p>
        <div class="container_main_img">
            <img class="main-img" src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}" />
        </div>
    </div>
`

const alsoCaseTmp = (href, imageUrl, altImage, title, category) => `
    <a href="${href}" class="also-case">
        <div class="container_img">
            <img src="${SERVER_URL}/uploads/${imageUrl}" alt="${altImage}" />
        </div>
        <p class="category">${category}</p>
        <p class="also-case-title">${title}</p>
    </a>
`

function renderAcquaintance(block) {
  const points = block.points
    .map((point) => {
      return `
        <p class="point">
            ${point.text}
        </p>`
    })
    .join('')
  const html = `
    <div class="acquaintance">
        <p class="title">${block.title}</p>
        <div class="line-points">
        <span class="line"></span>
        <div class="points">
            ${points}
        </div>
        </div>
    </div>
  `
  return html
}

function renderColorBlock(block) {
  const points = block.points
    .map((point) => {
      return `
        <p class="point">
            ${point.text}
        </p>`
    })
    .join('')
  const html = `
    <div class="color-block">
        <p class="title">${block.title}</p>
        <div class="points">
            ${points}
        </div>
    </div>
  `
  return html
}

function renderOrdinaryBlock(block) {
  const points = block.points
    .map((point) => `<p class="point">${point.text}</p>`)
    .join('')
  const html = `
    <div class="ordinary-block">
        <p class="title">${block.title}</p>
        <div class="points">
            ${points}
        </div>
    </div>
  `
  return html
}

function renderMarkNumList(block) {
  const points = block.points
    .map((point, index) => {
      const ul = point.ul
        ? point.ul.map((item) => `<li>${item}</li>`).join('')
        : ''
      return `
        <div class="point">
          <div class="num">${String(index + 1).padStart(2, '0')}</div>
          <div class="list">
            <p class="title-point">${point.title_point}</p>
            ${ul ? `<ul>${ul}</ul>` : ''}
          </div>
        </div>
      `
    })
    .join('')
  const html = `
      <div class="mark-num-list">
        <p class="title">${block.title}</p>
        <div class="points">
          ${points}
        </div>
      </div>
    `
  return html
}

function renderResults(block) {
  const points = block.points
    .map((point) => {
      return `
        <div class="point">
            <p class="top">${point.top}</p>
            <p class="bottom">${point.bottom}</p>
        </div>
      `
    })
    .join('')
  const html = `
      <div class="results">
          <p class="title">${block.title}</p>
          <div class="points">
              ${points}
          </div>
      </div>
    `
  return html
}

function renderSimpleParagraph(block) {
  const html = `
      <div class="simple-paragraph">
        ${block.content}
      </div>
    `
  return html
}

function renderContent(data) {
  const caseData = data.case[0]

  document.title = caseData.title_page

  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', caseData.description)

  document
    .querySelector('meta[name="keywords"]')
    .setAttribute('content', caseData.keywords)

  console.log(caseData)
  const caseHead = caseHeadTmp(
    caseData.image_url,
    caseData.alt_image,
    caseData.title,
    caseData.category,
    caseData.logo_url,
    caseData.alt_logo
  )
  let htmlContent = caseHead

  // const pageData = JSON.parse(data.case[0].page_data)
  const pageData = data.case[0].page_data

  pageData.case_blocks.forEach((block) => {
    let blockHtml = ''
    switch (block.class) {
      case 'acquaintance':
        blockHtml = renderAcquaintance(block)
        break
      case 'color-block':
        blockHtml = renderColorBlock(block)
        break
      case 'ordinary-block':
        blockHtml = renderOrdinaryBlock(block)
        break
      case 'mark-num-list':
        blockHtml = renderMarkNumList(block)
        break
      case 'results':
        blockHtml = renderResults(block)
        break
      case 'simple-paragraph':
        blockHtml = renderSimpleParagraph(block)
        break
      default:
        console.log('Неизвестный класс:', block.class)
    }
    htmlContent += blockHtml
  })
  document.getElementById('caseContainer').innerHTML = htmlContent

  const alsoCases = data.also_cases
    .map((item) =>
      alsoCaseTmp(
        `#${item.href}`,
        item.image_url,
        item.alt_image,
        item.title,
        item.category
      )
    )
    .join('')
  document.getElementById('alsoCasesContainer').innerHTML = alsoCases
}

async function loadCase() {
  try {
    const urlParams = new URLSearchParams(window.location.search)
    const caseId = urlParams.get('case')

    const response = await fetch(
      `${SERVER_URL}/api/get_case.php?case=${encodeURIComponent(caseId)}`
    )

    const data = await response.json()

    renderContent(data)
  } catch (error) {
    console.error('Error fetching the case:', error)
  }
}
loadCase()
