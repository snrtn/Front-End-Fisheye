"use strict";

// appeler js file
import displayGraphProduct from "./displayGraphProduct.js";

// récupérer des dom
const CHEVRON = document.querySelector(".select-box__icon");
const SELECTBUTTON = document.querySelector(".selectButton");

// Trier par
CHEVRON.onclick = function () {
  let isToggle;
  let isForm;

  if(document.querySelector(".select-box__list").style.display === "none") {
    isToggle = "block";
    isForm = "translateY(-50%) rotate(180deg)"
    
  } else {
    isToggle = "none";
    isForm = "translateY(-50%)"
  }

  document.querySelector(".select-box__list").style.display = isToggle;
  document.querySelector(".select-box__icon").style.transform = isForm;
}
SELECTBUTTON.onclick = function () { 
  let isForm;

  if(document.querySelector(".select-box__icon").style.transform === "translateY(-50%)") {
    isForm = "translateY(-50%) rotate(180deg)"
  } else {
    isForm = "translateY(-50%)"
  }

  document.querySelector(".select-box__icon").style.transform = isForm;
}

// Trier photographer page 
const displayGraphTrier = (arrProducts, name) => {

  // Popularité
  document.getElementById("handlePop").addEventListener("click", function () {
    arrProducts.sort((a, b) => b.likes - a.likes);
    displayGraphProduct(arrProducts, name);
  });

  // Date
  document.getElementById("handleDate").addEventListener("click", function () {
    arrProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
    displayGraphProduct(arrProducts, name);
  });

  // Titre
  document.getElementById("handleAbc").addEventListener("click", function () {
    function SortArray(a, b) {
      if (a.title < b.title) {
        return -1;
      }

      if (a.title > b.title) {
        return 1;
      }

      return 0;
    }

    arrProducts.sort(SortArray);
    displayGraphProduct(arrProducts, name);
  });
};

export default displayGraphTrier;
