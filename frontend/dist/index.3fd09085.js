const openFormLeavingButtons = document.querySelectorAll(".openFormLeavingBtn");
const formLeaving = document.getElementById("formLeaving");
const closeFormMobileBtn = document.getElementById("closeFormLeavingBtn");
const overlay = document.getElementById("overlayFormLeaving");
openFormLeavingButtons.forEach((button)=>{
    button.addEventListener("click", function() {
        formLeaving.classList.add("show");
        overlay.classList.add("show");
    });
});
closeFormMobileBtn.addEventListener("click", function() {
    formLeaving.classList.remove("show");
    overlay.classList.remove("show");
}) // overlayFormLeaving
;

//# sourceMappingURL=index.3fd09085.js.map
