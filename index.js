import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";
let urlParameter = {
  page: `page=${page}`,
};

function getUrl(props) {
  let url = "https://rickandmortyapi.com/api/character";

  //if (props.page) {
  url += `?${props.page}`;
  //}

  if (props.name) {
    url += `&${props.name}`;
  }

  // console.log(urlParameter);
  // console.log(url);

  return url;
}

async function fetchCharaters(page, urlParameter) {
  try {
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

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    urlParameter.page = `page=${page}`;
    fetchCharaters(page, urlParameter);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    urlParameter.page = `page=${page}`;
    fetchCharaters(page, urlParameter);
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  searchQuery = data.query;
  page = 1;
  urlParameter.page = `page=${page}`;
  urlParameter.name = `name=${searchQuery}`;
  fetchCharaters(page, urlParameter);
});
