const list = document.querySelector("ul");
const input = document.querySelector("input");
const submitButton = document.querySelector("form button");

let inputValue = "";

input.addEventListener("change", (event) => {
  inputValue = event.target.value;
});

function addItem(itemName) {
  const item = document.createElement("li");

  item.innerHTML = `
    <label>
      <input type="checkbox" name="shopping-item" id="shopping-item" />
      <span></span>
    </label>
    <p class="paragraph">${itemName}</p>
    <button type="button">
      <img src="assets/icons/trash.svg" alt="ícone de lixeira" />
    </button>
  `;

  list.append(item);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!inputValue) {
    alert("Nome do item não pode ser vazio.");
    return;
  }

  addItem(inputValue);

  input.value = "";
  inputValue = "";
});
