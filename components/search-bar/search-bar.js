export function createSearchBar({ onSubmit }) {
  const newSearchBar = document.createElement("form");
  newSearchBar.classList.add("search-bar");
  newSearchBar.addEventListener("submit", onSubmit);
  newSearchBar.innerHTML = `
    <input
        name="query"
        class="search-bar__input"
        type="text"
        placeholder="search characters"
        aria-label="character name"
    />
    <button class="search-bar__button" aria-label="search for character">
        <img
            class="search-bar__icon"
            src="assets/magnifying-glass.png"
            alt=""
        />
    </button>
`;

  //   <form action="" class="search-bar" data-js="search-bar">
  //   <input
  //     name="query"
  //     class="search-bar__input"
  //     type="text"
  //     placeholder="search characters"
  //     aria-label="character name"
  //   />
  //   <button class="search-bar__button" aria-label="search for character">
  //     <img
  //       class="search-bar__icon"
  //       src="assets/magnifying-glass.png"
  //       alt=""
  //     />
  //   </button>
  // </form>

  return newSearchBar;
}
