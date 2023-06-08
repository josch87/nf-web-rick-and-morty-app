export function createButton({ text, classes = [], onClick }) {
  const newButton = document.createElement("button");

  newButton.textContent = text;
  newButton.classList.add("button", ...classes);
  newButton.addEventListener("click", onClick);

  return newButton;
  // <button class="button button--prev" data-js="button-prev">
  //     previous
  //   </button>
}
