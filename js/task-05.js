const inputEl = document.getElementById("name-input");
inputEl.addEventListener("input", changeUserName);

const spanEl = document.getElementById("name-output");

function changeUserName(event) {
    if (event.currentTarget.value) {
      spanEl.textContent = this.value;
    }
    else { spanEl.textContent = "Anonymous"; }
}
