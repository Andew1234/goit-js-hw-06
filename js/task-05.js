/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const inputEl = document.querySelector("#name-input");

const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", function () {
  outputEl.textContent = inputEl.value || "Anonymous";
});
