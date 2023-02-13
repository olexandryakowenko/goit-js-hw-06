const validInputEl = document.getElementById("validation-input");
validInputEl.addEventListener("blur", borderColorChange);

function validEl(validIn, invalidIn) {
  validInputEl.classList.add(validIn);
  validInputEl.classList.remove(invalidIn);
}

function borderColorChange() {
  const enterSymbols = this.value.trim();
  if (enterSymbols.length === Number(validInputEl.dataset.length)) {
    validEl("valid", "invalid");
  } else {
    

    validEl("invalid", "valid");
  }
}

