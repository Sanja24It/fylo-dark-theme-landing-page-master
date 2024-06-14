let form = document.querySelector(".form");
let input_email = document.querySelector(".email");
let p_mess = document.querySelector(".mess");
let mess = "Please enter a valid email address";

const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.setAttribute("novalidate", "");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input_email.value === "" || !input_email.value.match(re)) {
    p_mess.innerHTML = mess;
  } else {
    p_mess.innerHTML = "";
  }
});
