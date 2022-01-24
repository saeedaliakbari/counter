// const incBtn = document.querySelector(".increment");
// const decBtn = document.querySelector(".decrement");
// const resetBtn = document.querySelector(".reset");
const counterValue = document.querySelector(".counter span");
const btns = document.querySelectorAll(".btn");
let count = 0;
// incBtn.addEventListener("click", () => {
//   counterValue.textContent = parseInt(counterValue.textContent) + 1;
// });

// decBtn.addEventListener("click", () => {
//   counterValue.textContent = parseInt(counterValue.textContent) - 1;
// });

// resetBtn.addEventListener("click", () => (counterValue.textContent = "0"));

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("increment")) count++;
    else if (btn.classList.contains("decrement")) count--;
    else count = 0;

    if (count > 0) counterValue.style.color = "green";
    else counterValue.style.color = "red";

    counterValue.textContent = count;
  });
});
