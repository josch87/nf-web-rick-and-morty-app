export function createButton({ text, classes = [], onClick }) {
  const newButton = document.createElement("button");

  newButton.textContent = text;
  newButton.classList.add("button", ...classes);
  newButton.addEventListener("click", onClick);

  return newButton;
}
