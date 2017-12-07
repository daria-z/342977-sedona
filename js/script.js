var close = document.querySelector(".form-close");
var modal = document.querySelector(".reservation-form");
var arrival = document.querySelector("[name=arrival]");
var departure = document.querySelector("[name=departure");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

modal.classList.add("modal-out")
close.addEventListener("click", function(){
  modal.classList.toggle("modal-out");
})
modal.classList.remove("modal-in")
close.addEventListener("click", function(){
  modal.classList.remove("modal-error");
  modal.classList.toggle("modal-in");
})
modal.addEventListener("submit", function (evt){
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
    modal.classList.remove("modal-error");
    modal.classList.add("modal-error");
  }
})
