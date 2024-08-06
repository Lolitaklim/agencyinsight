document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && event.target.tagName === 'INPUT') {
    event.preventDefault()
  }
})

document.getElementById('href').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^a-z\-]/g, '')
})

function autoResizeTextarea(textarea) {
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

function removePoint(button) {
  const pointWrapper = button.parentElement
  pointWrapper.remove()
}

function boldText(button) {
  event.preventDefault()
  const pointContainer = button.parentElement
  const textarea = pointContainer.querySelector('.point')
  const selectedText = getSelectedText(textarea)

  if (selectedText) {
    const boldedText = `<span>${selectedText}</span>`
    textarea.value = textarea.value.replace(selectedText, boldedText)
  }
}

function getSelectedText(textarea) {
  return textarea.value.substring(
    textarea.selectionStart,
    textarea.selectionEnd
  )
}

function validateAndSubmit() {
  const inputs = document.querySelectorAll('input, textarea')
  let isValid = true
  let firstInvalidElement = null

  inputs.forEach((input) => {
    input.classList.remove('invalid')
    if (!input.value.trim()) {
      input.classList.add('invalid')
      if (!firstInvalidElement) {
        firstInvalidElement = input
      }
      isValid = false
    }
  })

  if (firstInvalidElement) {
    firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    firstInvalidElement.focus()
  }

  return isValid
}

document.addEventListener('DOMContentLoaded', function () {
  fetch('./../scripts/get_categories_add_case.php')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('category').innerHTML = data.options
    })
    .catch((error) => console.error('Ошибка:', error))
})

acquaintanceBlockCount = 0
function addAcquaintance() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="acquaintance dynamic-form">
                <input type="hidden" name="formType" value="acquaintance">
                <input class="title" type="text" name="title" placeholder="Заголовок" required>
                <div class="line-points">
                    <span class="line"></span>
                    <div class="points" id="acquaintanceBlock${acquaintanceBlockCount}">
                    </div>
                </div>
                <button class="add-point" onclick="addAcquaintancePoint(${acquaintanceBlockCount})">Добавить абзац</button>
                <button class="delete-point" onclick="removePoint(this)">Удалить блок</button>
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
  addAcquaintancePoint(acquaintanceBlockCount)
  acquaintanceBlockCount++
}
function addAcquaintancePoint(acquaintanceBlockCount) {
  event.preventDefault()
  const container = document.getElementById(
    `acquaintanceBlock${acquaintanceBlockCount}`
  )
  formHtml = `<div class="point-container">
                  <textarea onInput="autoResizeTextarea(this)" class="point"></textarea>
                  <button class="bold-text" onclick="boldText(this)">Выделить</button>
                  <button class="delete-point" onclick="removePoint(this)">х</button>
                </div>`
  container.insertAdjacentHTML('beforeend', formHtml)
}

colorBlockCount = 0
function addColorBlock() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="color-block dynamic-form">
                <input type="hidden" name="formType" value="color-block">
                <input class="title" type="text" name="title" placeholder="Заголовок">
                <div class="points" id="colorBlock${colorBlockCount}">
                </div>
                <button class="add-point" onclick="addColorBlockPoint(${colorBlockCount})">Добавить абзац</button>
                <button class="delete-point" onclick="removePoint(this)">Удалить блок</button>
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
  addColorBlockPoint(colorBlockCount)
  colorBlockCount++
}
function addColorBlockPoint(colorBlockCount) {
  event.preventDefault()
  const container = document.getElementById(`colorBlock${colorBlockCount}`)
  formHtml = `<div class="point-container">
                    <textarea onInput="autoResizeTextarea(this)" class="point"></textarea>
                    <button class="bold-text" onclick="boldText(this)">Выделить</button>
                    <button class="delete-point" onclick="removePoint(this)">х</button>
                  </div>`
  container.insertAdjacentHTML('beforeend', formHtml)
}

ordinaryBlockCount = 0
function addOrdinaryBlock() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="ordinary-block dynamic-form">
                <input type="hidden" name="formType" value="ordinary-block">
                <input class="title" type="text" name="title" placeholder="Заголовок">
                <div class="points" id="ordinaryBlock${ordinaryBlockCount}">
                </div>
                <button class="add-point" onclick="addOrdinaryBlockPoint(${ordinaryBlockCount})">Добавить абзац</button>
                <button class="delete-point" onclick="removePoint(this)">Удалить блок</button>
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
  addOrdinaryBlockPoint(ordinaryBlockCount)
  ordinaryBlockCount++
}
function addOrdinaryBlockPoint(ordinaryBlockCount) {
  event.preventDefault()
  const container = document.getElementById(
    `ordinaryBlock${ordinaryBlockCount}`
  )
  formHtml = `<div class="point-container">
                    <textarea onInput="autoResizeTextarea(this)" class="point"></textarea>
                    <button class="bold-text" onclick="boldText(this)">Выделить</button>
                    <button class="delete-point" onclick="removePoint(this)">х</button>
                </div>`
  container.insertAdjacentHTML('beforeend', formHtml)
}

markNumListCount = 0
function addMarkNumList() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="mark-num-list dynamic-form">
                <input type="hidden" name="formType" value="mark-num-list">
                <input class="title" type="text" name="title" placeholder="Заголовок">
                <div class="points" id="markNumList${markNumListCount}">
                </div>
                <button class="add-point" onclick="addMarkNumListPoint(${markNumListCount}, this)">Доб. нум. пункт</button>
                <button class="delete-point" onclick="removePoint(this)">Удалить блок</button>
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
  addMarkNumListPoint(markNumListCount)
  markNumListCount++
}
function addMarkNumListPoint(markNumListCount, btn) {
  if (btn) event.preventDefault()
  const container = document.getElementById(`markNumList${markNumListCount}`)
  let markNumListPointCount = container.children.length + 1

  formHtml = `<div class="point">
                    <div class="num">№</div>
                    <div class="list">
                      <textarea onInput="autoResizeTextarea(this)" class="title-point" placeholder="Подзаголовок"></textarea>
                      <ul id="markNumList${markNumListCount}-${markNumListPointCount}">
                      </ul>
                    </div>
                    <button class="add-point" onclick="addMarkNumListSubPoint(${markNumListCount}, ${markNumListPointCount})">Доб. марк. пункт</button>
                    <button class="delete-point" onclick="removePoint(this)">х</button>
                </div>`
  container.insertAdjacentHTML('beforeend', formHtml)
}

function addMarkNumListSubPoint(markNumListCount, markNumListPointCount) {
  event.preventDefault()
  const ul = document.getElementById(
    `markNumList${markNumListCount}-${markNumListPointCount}`
  )
  let subPointHtml = `<li class="sub-point">•<textarea onInput="autoResizeTextarea(this)" placeholder="Элемент списка"></textarea>
  <button class="delete-point" onclick="removePoint(this)">х</button>
  </li>`
  ul.insertAdjacentHTML('beforeend', subPointHtml)
}

resultsCount = 0
function addResults() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="results dynamic-form">
                <input type="hidden" name="formType" value="results">
                <input class="title" type="text" name="title" placeholder="Заголовок">
                <div class="points" id="results${resultsCount}">
                </div>
                
                    <button class="add-point" onclick="addResultsPoint(${resultsCount})">Доб. мини-блок</button>
                    <button class="delete-point" onclick="removePoint(this)">Удалить блок</button>
                
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
  addResultsPoint(resultsCount)
  resultsCount++
}
function addResultsPoint(resultsCount) {
  event.preventDefault()
  const container = document.getElementById(`results${resultsCount}`)
  formHtml = `<div class="point">
                  <input class="top" type="text" name="top" placeholder="Подзаголовок">
                  <input class="bottom" type="text" name="bottom">
                  <button class="delete-point" onclick="removePoint(this)">х</button>
              </div>`
  container.insertAdjacentHTML('beforeend', formHtml)
}

function addSimpleParagraph() {
  const caseContainer = document.getElementById('caseContainer')
  formHtml = `<form class="simple-paragraph dynamic-form">
                <input type="hidden" name="formType" value="simple-paragraph">
                <textarea class="point" onInput="autoResizeTextarea(this)" placeholder="Абзац"></textarea>
                <button class="delete-point" onclick="removePoint(this)">Удалить абзац</button>
            </form>`
  caseContainer.insertAdjacentHTML('beforeend', formHtml)
}

function submitAllForms() {
  event.preventDefault()

  if (!validateAndSubmit()) {
    return
  }

  const mainDataForm = document.getElementById('mainDataForm')
  let formData = new FormData(mainDataForm)

  const page_data = collectData()
  formData.append('page_data', page_data)

  fetch('./scripts/upload_case.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      console.log('Server response: ' + text)
      try {
        const data = JSON.parse(text)
        alert('Ответ от сервера: ' + JSON.stringify(data))
        window.location.href = './../index.php'
      } catch (e) {
        alert('Error parsing JSON: ' + e)
      }
    })
    .catch((error) => {
      alert('Error: ' + error)
    })
}

function collectData() {
  const forms = document.querySelectorAll('.dynamic-form')
  const data = []

  forms.forEach((form) => {
    const formType = form.querySelector('input[name="formType"]').value
    const title = form.querySelector('.title')
      ? form.querySelector('.title').value
      : ''
    const points = []

    if (
      formType === 'acquaintance' ||
      formType === 'color-block' ||
      formType === 'ordinary-block'
    ) {
      form.querySelectorAll('.point').forEach((point) => {
        points.push({ text: point.value })
      })
      data.push({ class: formType, title, points })
    } else if (formType === 'mark-num-list') {
      form.querySelectorAll('.point').forEach((point) => {
        const titlePoint = point.querySelector('.title-point').value
        const subPoints = []
        point.querySelectorAll('li textarea').forEach((subPoint) => {
          subPoints.push(subPoint.value)
        })
        points.push({ title_point: titlePoint, ul: subPoints })
      })
      data.push({ class: formType, title, points })
    } else if (formType === 'results') {
      form.querySelectorAll('.point').forEach((point) => {
        const top = point.querySelector('.top').value
        const bottom = point.querySelector('.bottom').value
        points.push({ top, bottom })
      })
      data.push({ class: formType, title, points })
    } else if (formType === 'simple-paragraph') {
      const content = form.querySelector('.point').value

      data.push({ class: formType, content })
    }
  })
  return JSON.stringify({ case_blocks: data })
}
