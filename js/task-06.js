const input = document.querySelector("#validation-input");
input.addEventListener("input", function () {
  if (input.value.length === parseInt(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
