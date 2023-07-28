"use strict";

// récupérer des dom
const FORM = document.getElementById("userForm");
const MODAL = document.getElementById("contact_modal");
const USERFIRSTNAME = document.getElementById("prenom");
const USERLASTNAME = document.getElementById("nom");
const USEREMAIL = document.getElementById("email");
const USERMESSAGE = document.getElementById("message");
const VALIDATE = document.querySelector(".validate");
const CONFIRMATION = document.querySelector(".confirmation");

// open modal
function displayModal(id) {
  document.body.classList.add("s_no-scroll");
  MODAL.style.display = "block";
  validateForm(id);
}

// fermer modal
function closeModal() {
  document.body.classList.remove("s_no-scroll");
  MODAL.style.display = "none";
}

// button escape key pour fermer modal
function keyPress(event) {
  if(event.keyCode === 27) {
    window.location.reload()
  }
}

// Form Validation
function validateForm(id) {
  FORM.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();

    // récupérer value input
    let infoClient = {
      contact: {
        firstName: USERFIRSTNAME.value,
        lastName: USERLASTNAME.value,
        email: USEREMAIL.value,
        message: USERMESSAGE.value,
        userId: id,
      },
    };

    // vérification des valeurs
    if (
      // prénom
      USERFIRSTNAME.value !== "" &&
      USERFIRSTNAME.value.length >= 3 &&
      isValidName(USERFIRSTNAME.value) &&

      // nom
      USERLASTNAME.value !== "" &&
      USERLASTNAME.value.length >= 3 &&
      isValidName(USERLASTNAME.value) &&

      // email
      isValidEmail(USEREMAIL.value)

    ) {
      // Enregistrer dans localstorage
      const DATA = JSON.stringify(infoClient);
      window.localStorage.setItem("message", DATA);

      // pour Success message
      VALIDATE.style.display = "none";
      CONFIRMATION.style.display = "flex";

      // Vérification des valeurs console.log()
      console.log(`Prénom : ${infoClient.contact.firstName} `);
      console.log(`Nom : ${infoClient.contact.lastName} `);
      console.log(`Email : ${infoClient.contact.email} `);

    } else {
      return null;
    }
  });

  // Regular Expressions pour Email
  const isValidEmail = (email) => {
    const RE =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return RE.test(String(email).toLowerCase());
  };

  // Regular Expressions pour type string: nom et prénom
  const isValidName = (name) => {
    const RE = /^[a-zA-Z]*$/;
    return RE.test(String(name).toLowerCase());
  };

  // Form Validation pour chaque input
  function validateInputs() {
    const FIRSTNAMEVAR = USERFIRSTNAME.value.trim();
    const LASTNAMEVAR = USERLASTNAME.value.trim();
    const EMAILVAR = USEREMAIL.value.trim();

    // user prénom
    if (FIRSTNAMEVAR === "") {
      setError(USERFIRSTNAME, "Le prénom est requis.");

    } else if (
      USERFIRSTNAME.value.length > 0 &&
      USERFIRSTNAME.value.length < 3
    ) {
      setError(USERFIRSTNAME, "Doit au moins contenir 3 caractères");

    } else if (!isValidName(FIRSTNAMEVAR)) {
      setError(
        USERFIRSTNAME,
        "Doit être en alphanumérique et/ou le trait d'union"
      );

    } else {
      setSuccess(USERFIRSTNAME);
    }

    // user nom
    if (LASTNAMEVAR === "") {
      setError(USERLASTNAME, "Le nom est requis");

    } else if (USERLASTNAME.value.length > 0 && USERLASTNAME.value.length < 3) {
      setError(USERLASTNAME, "Doit au moins contenir 3 caractères");

    } else if (!isValidName(LASTNAMEVAR)) {
      setError(
        USERLASTNAME,
        "Doit être en alphanumérique et/ou le trait d'union"
      );

    } else {
      setSuccess(USERLASTNAME);
    }

    // user email 
    if (EMAILVAR === "") {
      setError(USEREMAIL, "L'adresse électronique est requis");

    } else if (!isValidEmail(EMAILVAR)) {
      setError(USEREMAIL, "Le format n'est pas valide");

    } else {
      setSuccess(USEREMAIL);
    }
  };

  // phrase d'erreur
  const setError = (element, message) => {
    let inputControl = element.parentElement;
    let errDisplay = inputControl.querySelector(".error");

    // ajouter message
    errDisplay.innerText = message;

    // action style
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };

  // phrase succès
  const setSuccess = (element) => {
    let inputControl = element.parentElement;
    let errDisplay = inputControl.querySelector(".error");

    // vide message
    errDisplay.innerText = "";

    // action style
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
}

validateForm();
