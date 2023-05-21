function displayModal(id) {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  console.log(id);
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
