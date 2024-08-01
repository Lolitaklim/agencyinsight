const openFormLeavingButtons = document.querySelectorAll('.openFormLeavingBtn')
const formLeaving = document.getElementById('formLeaving')
const closeFormMobileBtn = document.getElementById('closeFormLeavingBtn')

openFormLeavingButtons.forEach((button) => {
  button.addEventListener('click', function () {
    formLeaving.classList.add('show')
  })
})

closeFormMobileBtn.addEventListener('click', function () {
  formLeaving.classList.remove('show')
})
