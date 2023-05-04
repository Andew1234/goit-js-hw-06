const counter = {
  counterValue: 0,

  increaseValue(value) {
    this.counterValue += 1;
    console.log(this);
  },

  decreaseValue(value) {
    this.counterValue -= 1;
    console.log(this);
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

const btnIncrease = document.querySelector('button[data-action="increment"]');
const btnDecrease = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

btnIncrease.addEventListener("click", function () {
  counter.increaseValue();
  valueEl.textContent = counter.counterValue;
});

btnDecrease.addEventListener("click", function () {
  counter.decreaseValue();
  valueEl.textContent = counter.counterValue;
});
