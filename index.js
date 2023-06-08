import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const main = document.querySelector('[data-js="main"]');
const headerTitle = document.querySelector('[data-js="headerTitle"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";
let urlParameter = {
  page: `page=${page}`,
};

function resetUrlParameter() {
  urlParameter.page = "";
  urlParameter.name = "";
}

// Create Elements

const prevButton = createButton({
  text: "previous",
  classes: ["button--prev", "button--disabled"],
  onClick: () => {
    if (page > 1) {
      page--;
      urlParameter.page = `page=${page}`;
      fetchCharaters(page, urlParameter);
    }
    if (page <= 1) {
      prevButton.classList.add("button--disabled");
    }
    if (page < maxPage) {
      nextButton.classList.remove("button--disabled");
    }
  },
});

const nextButton = createButton({
  text: "next",
  classes: ["button--next"],
  onClick: () => {
    if (page < maxPage) {
      page++;
      urlParameter.page = `page=${page}`;
      fetchCharaters(page, urlParameter);
    }
    if (page > 1) {
      prevButton.classList.remove("button--disabled");
    }
    if (page >= maxPage) {
      nextButton.classList.add("button--disabled");
    }
  },
});

const pagination = createPagination({
  text: "0 / 0",
});

const searchBar = createSearchBar({
  placeholder: "search characters",
  ariaLabel: "character name",
  onSubmit: (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    searchQuery = data.query;
    page = 1;
    resetUrlParameter();
    urlParameter.page = `page=${page}`;
    urlParameter.name = `name=${searchQuery}`;
    fetchCharaters(page, urlParameter);
  },
});

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

// Implement Functionality

function getUrl(props) {
  let url = "https://rickandmortyapi.com/api/character";
  url += `?${props.page}`;

  if (props.name) {
    url += `&${props.name}`;
  }

  return url;
}

async function fetchCharaters(page, urlParameter) {
  try {
    //console.log(getUrl(urlParameter));

    const response = await fetch(getUrl(urlParameter));

    if (response.ok) {
      const data = await response.json();

      cardContainer.innerHTML = "";
      data.results.forEach((character) => {
        const newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });

      maxPage = data.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;
      main.scrollTop = 0;
    } else {
      console.error("Bad Response");

      const data = await response.json();

      if (data.error === "There is nothing here") {
        cardContainer.innerHTML = "There are no search results. ";
        page = 0;
        maxPage = 0;
        pagination.textContent = `${page} / ${maxPage}`;
      }
    }
  } catch (error) {
    console.error("Did not get a positive response from API.", error);
  }
}

fetchCharaters(page, urlParameter);

headerTitle.addEventListener("click", () => {
  page = 1;
  resetUrlParameter();
  urlParameter.page = `page=${page}`;
  fetchCharaters(page, urlParameter);
});
