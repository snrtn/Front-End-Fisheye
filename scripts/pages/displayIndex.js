"use strict";

// récupérer des dom
const CONTAINER = document.querySelector(".photographer_section");

// home page
const displayIndex = (list) => {
  let item = list.photographers
    .map((items) => {
      let { name, city, country, portrait, price, tagline, id } = items;
      
      return `
        <article class="itemContainer">
          <a href="/photographer.html?id=${id}" aria-label="ancre page detail de ${name}" target="_self">
            <img 
              src="../../assets/images/Photographers/${portrait}"
              alt="profile photo ${name}"
              aria-label="profile photo ${name}"
            />
          </a>
          <div class="descContainer">
            <h2 aria-label="Photographer ${name}">${name}</h2>
            <h4 aria-label="ville ${city}, village ${country}">${city}, ${country}</h4>
            <span aria-label="présentation ${tagline}">${tagline}</span>
            <span aria-label="prix ${price}€ par jour">${price}€/jour</span>
          </div>
        </article>
      `;
    })
    .join("");

  CONTAINER.innerHTML = item;
};

export default displayIndex;
