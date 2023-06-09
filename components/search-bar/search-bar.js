export function createSearchBar({ placeholder, ariaLabel, onSubmit }) {
  const newSearchBar = document.createElement("form");
  newSearchBar.classList.add("search-bar");
  newSearchBar.addEventListener("submit", onSubmit);
  newSearchBar.innerHTML = `
    <input
        name="query"
        class="search-bar__input"
        type="text"
        placeholder="${placeholder}"
        aria-label="${ariaLabel}"
    />
    <button class="search-bar__button" aria-label="search for character">
    <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>

    </button>
`;

  return newSearchBar;
}

{
  /* <img
class="search-bar__icon"
src="assets/magnifying-glass.png"
alt=""
/> */
}
