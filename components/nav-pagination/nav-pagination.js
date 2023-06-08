export function createPagination({ text }) {
  const newPagination = document.createElement("span");
  newPagination.textContent = text;
  newPagination.classList.add("navigation__pagination");
  //<span class="navigation__pagination" data-js="pagination">1 / 1</span>

  return newPagination;
}
