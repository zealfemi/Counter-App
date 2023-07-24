let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total");

function increment() {
  count++;
  countEl.textContent = count;
}

function saveEntry() {
  let prevCount = count;
  saveEl.textContent += prevCount + " - ";

  let total = Number(totalEl.textContent) + count;
  totalEl.textContent = total;
  count = 0;

  countEl.textContent = count;
}

function clearEntry() {
  count = 0;
  saveEl.textContent = "";
  countEl.textContent = count;
  totalEl.textContent = count;
}
