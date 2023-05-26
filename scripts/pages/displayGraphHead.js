import idParams from "../utils/searchParams.js";

const container = document.querySelector(".photograph_header");
const persons = document.querySelector(".personName");

const displayGraphHead = (list) => {
  const arrHead = [];

  for (let i = 0; i < list.photographers.length; i++) {
    if (list.photographers[i].id == idParams) {
      arrHead.push(list.photographers[i]);
    }
  }

  const item = arrHead
    .map((person) => {
      const { name, city, country, portrait, tagline, id } = person;
      persons.innerHTML = name;
      return `
        <article>
          <div>
            <h2>${name}</h2>
            <h4>${city}, ${country}</h4>
            <span>${tagline}</span>
          </div>
          <button class="contact_button" onclick="displayModal(${id})">
            Contactez-moi
          </button>
          <img src="../../assets/images/Photographers/${portrait}" alt="profile photo ${name}"/>
        </article>
      `;
    })
    .join("");
  container.innerHTML = item;
};

export default displayGraphHead;
