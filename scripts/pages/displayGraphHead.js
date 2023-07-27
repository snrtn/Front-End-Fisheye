"use strict";

import idParams from "../utils/searchParams.js";

const CONTAINER = document.querySelector(".photograph_header");
const PERSONS = document.querySelector(".personName");

// header : Page detail << photographer >>
const displayGraphHead = (list) => {
  let arrHeader  = [];

  for (let i = 0; i < list.photographers.length; i++) {
    // rechercher id
    if (list.photographers[i].id == idParams) {
      // push info dans arrHeader
      arrHeader.push(list.photographers[i]);

    }
  }

  const ITEM = arrHeader
    .map((items) => {
      let { name, city, country, portrait, tagline, id } = items;

      // pour title modal contact
      PERSONS.innerHTML = name;
      
      return `
        <article>
          <div>
            <h2 aria-label="Photographer ${name}">${name}</h2>
            <h4 aria-label="ville ${city}, village ${country}">${city}, ${country}</h4>
            <span aria-label="présentation ${tagline}">${tagline}</span>
          </div>
          <button class="contact_button" onclick="displayModal(${id})" aria-label="bouton ouvrir modal" tabindex="1">
            Contactez-moi
          </button>
          <img 
            src="../../assets/images/Photographers/${portrait}"
            alt="profile photo ${name}"
            aria-label="profile photo ${name}"
          />
        </article>
      `;
    })
    .join("");

    CONTAINER.innerHTML = ITEM;
};
export default displayGraphHead;
