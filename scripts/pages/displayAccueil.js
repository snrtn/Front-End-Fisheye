const container = document.querySelector(".photographer_section");

const display = (list) => {
  const item = list.photographers
    .map((person) => {
      const { name, city, country, portrait, price, tagline, id } = person;
      return `
        <article>
          <a href="/photographer.html?id=${id}">
            <img src="../../assets/images/Photographers/${portrait}" alt="profile photo ${name}"/>
            <h2>${name}</h2>
            <h4>${city}, ${country}</h4>
            <span>${tagline}</span>
            <span>${price}€/jour</span>
          </a>
        </article>
      `;
    })
    .join("");
  container.innerHTML = item;
};

export default display;
