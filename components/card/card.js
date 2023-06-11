export function createCharacterCard(props) {
  const newCard = document.createElement("li");
  newCard.classList.add("card", "animate__animated", "animate__fadeIn");

  let statusClass = "";
  let speciesClass = "";
  let typeClass = "";
  let genderIcon = "";
  let genderClass = "";
  let originClass = "";
  let locationClass = "";

  if (props.status === "unknown") {
    statusClass = " card__info-description--nodata";
  }

  if (props.species === "unknown") {
    speciesClass = " card__info-description--nodata";
  }

  if (!props.type) {
    props.type = "/";
    typeClass = " card__info-description--nodata";
  }

  if (!props.gender) {
    console.log("No gender available");
  } else if (props.gender === "Male") {
    genderIcon = `
      <span class="card__gender-icon">
        <i class="fa-solid fa-mars" style="color: #0056eb;"></i>
      </span>`;
  } else if (props.gender === "Female") {
    genderIcon = `
      <span class="card__gender-icon">
      <i class="fa-solid fa-venus" style="color: #eb0089;"></i>
      </span>`;
  } else if (props.gender === "Genderless") {
    genderIcon = `
      <span class="card__gender-icon">
        <i class="fa-solid fa-genderless" style="color: #33c10b;"></i>
      </span>`;
  } else if (props.gender === "unknown") {
    genderClass = " card__info-description--nodata";
  }

  if (props.origin.name === "unknown") {
    originClass = " card__info-description--nodata";
  }

  if (props.location.name === "unknown") {
    locationClass = " card__info-description--nodata";
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
        <dd class="card__info-description${statusClass}">${props.status}</dd>
        <dt class="card__info-title">Species</dt>
        <dd class="card__info-description${speciesClass}">${props.species}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description${typeClass}">${props.type}</dd>
        <dt class="card__info-title">Gender</dt>
        <dd class="card__info-description${genderClass}">${genderIcon}${props.gender}</dd>
        <dt class="card__info-title">Origin</dt>
        <dd class="card__info-description${originClass}">${props.origin.name}</dd>
        <dt class="card__info-title">Location</dt>
        <dd class="card__info-description${locationClass}">${props.location.name}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${props.episode.length}</dd>
      </dl>
    </div>`;

  return newCard;
}
