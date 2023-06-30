import displayGraphProduct from "./displayGraphProduct.js";

const displayGraphTrier = (arrProducts, name) => {
  
  document.getElementById("handlePop").addEventListener("click", function () {
    handlePopSort();
  });

  function handlePopSort(){
    arrProducts.sort((a, b) => b.likes - a.likes);
  
    displayGraphProduct(arrProducts, name);
  };

  document.getElementById("handleDate").addEventListener("click", function () {
    arrProducts.sort((a, b) => new Date(b.date) - new Date(a.date));

    displayGraphProduct(arrProducts, name);
  });

  document.getElementById("handleAbc").addEventListener("click", function () {
    function SortArray(x, y) {
      if (x.title < y.title) {
        return -1;
      }
      if (x.title > y.title) {
        return 1;
      }
      return 0;
    }
    arrProducts.sort(SortArray);

    displayGraphProduct(arrProducts, name);
  });
};



export default displayGraphTrier;
