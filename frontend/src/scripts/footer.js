const openFormMobileBtn = document.getElementById('openFormMobileBtn')
const formContainerMobile = document.getElementById('formLeaving')
const closeFormMobileBtn = document.getElementById('closeFormLeavingBtn')

openFormMobileBtn.addEventListener('click', function () {
  formContainerMobile.classList.add('show')
})

closeFormMobileBtn.addEventListener('click', function () {
  formContainerMobile.classList.remove('show')
})
