export function createCharacterCard(props) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  let typeClass = "";
  if (!props.type) {
    props.type = "/";
    typeClass = " card__info-description--nodata";
  }
  newCard.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src="${props.image}"
        alt="${props.name}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${props.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${props.status}</dd>
        <dt class="card__info-title">Species</dt>
        <dd class="card__info-description">${props.species}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description${typeClass}">${props.type}</dd>
        <dt class="card__info-title">Gender</dt>
        <dd class="card__info-description">${props.gender}</dd>
        <dt class="card__info-title">Origin</dt>
        <dd class="card__info-description">${props.origin.name}</dd>
        <dt class="card__info-title">Location</dt>
        <dd class="card__info-description">${props.location.name}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${props.episode.length}</dd>
      </dl>
    </div>`;

  return newCard;
}
