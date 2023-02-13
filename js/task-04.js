const counterEl = document.getElementById("counter");
const decrementEl = counterEl.firstElementChild;
const incrementEl = counterEl.lastElementChild;
const spanEl = document.getElementById("value");

decrementEl.addEventListener("click", handleDecrementButtonClik);
incrementEl.addEventListener("click", handleIncrementButtonClik);

let counterValue = 0;

function handleDecrementButtonClik() {
  counterValue -= 1;
  // console.log(counterValue);
  spanEl.textContent = counterValue;
}

function handleIncrementButtonClik() {
  counterValue += 1;
  // console.log(counterValue);
  spanEl.textContent = counterValue;
}