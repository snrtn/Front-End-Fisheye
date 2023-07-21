import idParams from "../utils/searchParams.js";
const container = document.querySelector(".photograph_header");
const persons = document.querySelector(".personName");
// header photographer page 
const displayGraphHead = (list) => {
  const arrHead = [];
  // rechercher le id person
  for (let i = 0; i < list.photographers.length; i++) {
    if (list.photographers[i].id == idParams) {
      arrHead.push(list.photographers[i]);
    }
  }
  const item = arrHead
    .map((person) => {
      const { name, city, country, portrait, tagline, id } = person;
      // pour title modal contact
      persons.innerHTML = name;
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
  container.innerHTML = item;
};
export default displayGraphHead;
