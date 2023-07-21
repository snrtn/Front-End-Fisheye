const container = document.querySelector(".photographer_section");
// items home page
const displayIndex = (list) => {
  const item = list.photographers
    .map((person) => {
      const { name, city, country, portrait, price, tagline, id } = person;
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
  container.innerHTML = item;
};
export default displayIndex;
