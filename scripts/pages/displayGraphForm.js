const form = document.getElementById("userForm");
const modal = document.getElementById("contact_modal");
const userFirstName = document.getElementById("prenom");
const userLastName = document.getElementById("nom");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const validate = document.querySelector(".validate");
const confirmation = document.querySelector(".confirmation");

function displayModal(id) {
  document.body.classList.add("s_no-scroll");
  modal.style.display = "block";
  validateForm(id);
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  document.body.classList.remove("s_no-scroll");
}

function validateForm(id) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();

    const infoClient = {
      contact: {
        firstName: userFirstName.value,
        lastName: userLastName.value,
        email: userEmail.value,
        message: userMessage.value,
        userId: id,
      },
    };

    if (
      userFirstName.value !== "" &&
      userFirstName.value.length > 2 &&
      userLastName.value !== "" &&
      userLastName.value.length > 2 &&
      isValidEmail(userEmail.value)
    ) {
      const data = JSON.stringify(infoClient);
      window.localStorage.setItem("message", data);

      // pour Success message
      validate.style.display = "none";
      confirmation.style.display = "flex";
    } else {
      return null;
    }
  });

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const isValidName = (name) => {
    const re = /^[a-zA-Z]*$/;
    return re.test(String(name).toLowerCase());
  };

  const validateInputs = () => {
    const userFirstNameValue = userFirstName.value.trim();
    const userLastNameValue = userLastName.value.trim();
    const userEmailValue = userEmail.value.trim();

    if (userFirstNameValue === "") {
      setError(userFirstName, "Le prénom est requis.");
    } else if (
      userFirstName.value.length > 0 &&
      userFirstName.value.length < 2
    ) {
      setError(userFirstName, "doit au moins contenir 2 caractères");
    } else if (!isValidName(userFirstNameValue)) {
      setError(
        userFirstName,
        "doit être en alphanumérique et/ou le trait d'union"
      );
    } else {
      setSuccess(userFirstName);
    }

    if (userLastNameValue === "") {
      setError(userLastName, "Le nom est requis");
    } else if (userLastName.value.length > 0 && userLastName.value.length < 2) {
      setError(userLastName, "doit au moins contenir 2 caractères");
    } else if (!isValidName(userLastNameValue)) {
      setError(
        userLastName,
        "doit être en alphanumérique et/ou le trait d'union"
      );
    } else {
      setSuccess(userLastName);
    }

    if (userEmailValue === "") {
      setError(userEmail, "Veuillez entrer votre L'adresse électronique.");
    } else if (!isValidEmail(userEmailValue)) {
      setError(userEmail, "Le format n'est pas valide");
    } else {
      setSuccess(userEmail);
    }
  };

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  };
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
}

validateForm();
