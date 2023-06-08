export function createPagination({ text }) {
  const newPagination = document.createElement("span");
  newPagination.textContent = text;
  newPagination.classList.add("navigation__pagination");

  return newPagination;
}
