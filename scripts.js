const list = document.querySelector("ul");
const input = document.querySelector("input");
const submitButton = document.querySelector("form button");
const footer = document.querySelector("footer");
const closeFooterButton = document.querySelector("div button");

// Adicionar item à lista

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

// Remover item da lista

list.addEventListener("click", (event) => {
  /* Ao observar o click dentro da lista o closest retorna o elemento em si 
  ou o seu parente mais próximo dependendo do seletor CSS que você passe para a função */
  const isDeleteButton = event.target.closest("button");

  /* Garante que está realmente clicando no item de lixeira, pois é o único button 
   com uma img dentro */
  if (isDeleteButton && isDeleteButton.querySelector("img")) {
    // Recupera o li ao qual o button que foi clicado é filho
    const listItem = isDeleteButton.closest("li");
    if (listItem) {
      listItem.remove();
      showFooter();
    }
  }
});

// Fazer o aviso de item deletado aparecer e sumir da tela de forma passiva
function showFooter() {
  footer.style = `
    opacity: 1;
    transition: opacity 1s;
  `;

  setTimeout(() => {
    footer.style = `
    opacity: 0;
    transition: opacity 1s;
  `;
  }, 4000);
}

// Evento para fechar o botão com ação ativa do usuário
closeFooterButton.addEventListener("click", () => {
  footer.style = "opacity: 0";
});
