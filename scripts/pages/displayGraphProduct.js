import idParams from "../utils/searchParams.js";

const container = document.querySelector(".photograph_product");

const displayGraphProduct = (list) => {
  const arrProduct = [];
  const name = [];
  let mediaFile;

  for (let i = 0; i < list.photographers.length; i++) {
    if (list.photographers[i].id == idParams) {
      name.push(list.photographers[i].name);
    }
  }

  for (let i = 0; i < list.media.length; i++) {
    if (list.media[i].photographerId == idParams) {
      arrProduct.push(list.media[i]);
    }
  }

  const item = arrProduct
    .map((person) => {
      const { image, title, likes, video } = person;

      if (image) {
        mediaFile = `
            <img src="../../assets/images/${name}/${image}" alt="${title}" >
            `;
      } else if (video) {
        mediaFile = `
            <video controls>
              <source src="../../assets/images/${name}/${video}"  type="video/mp4">
            </video>
            `;
      }

      return `
        <article>
          ${mediaFile}
          <div class="info">
            <h2>${title}</h2>
            <div>
              <span>${likes}</span>
              <div>asd</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  container.innerHTML = item;
};

export default displayGraphProduct;
