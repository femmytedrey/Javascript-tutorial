let count = 0;
const decrementBtn = document.querySelector("#decrease");
const incrementBtn = document.querySelector("#increase");
const counterDisplay = document.querySelector("p");

function updateUI(count){
  counterDisplay.textContent = count;

  decrementBtn.disabled = count === 0
  incrementBtn.disabled = count === 20
}

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI(count)
  }
});

incrementBtn.addEventListener("click", () => {
  if (count < 20) {
    count++;
    updateUI(count)
  }
});

count++