const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const counterValue = document.querySelector(".counter span");

incBtn.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});

decBtn.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

resetBtn.addEventListener("click", () => (counterValue.textContent = "0"));
