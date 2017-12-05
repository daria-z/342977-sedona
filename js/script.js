var close = document.querySelector(".form-close");
var modal = document.querySelector(".reservation-form")

modal.classList.remove("modal-out")
close.addEventListener("click", function(){
  modal.classList.toggle("modal-out");
})
