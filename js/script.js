var close = document.querySelector(".form-close");
var modal = document.querySelector(".reservation-form")

modal.classList.add("modal-out")
close.addEventListener("click", function(){
  modal.classList.toggle("modal-out");
})
modal.classList.remove("modal-in")
close.addEventListener("click", function(){
  modal.classList.toggle("modal-in");
})
