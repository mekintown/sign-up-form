const form = document.querySelector(".sign-up-form");
const textInputs = document.querySelectorAll(`.sign-up-form input[type="text"]`);
const emailInput = document.querySelector(`.sign-up-form input[type="email"]`);
const emailError = document.querySelector(`.sign-up-form input[type="email"] + div.error`);
const numberInput = document.querySelector(`.sign-up-form input[type="tel"]`);
const numberError = document.querySelector(`.sign-up-form input[type="tel"] + div.error`);
const errors = document.querySelector(`.sign-up-form + div.error`);

emailInput.addEventListener("blur", () => {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (emailInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ""; // Reset the content of the message
      emailInput.classList.remove("invalid")
    } else {
      // If there is still an error, show the correct error
      emailInput.classList.add("invalid")
      showEmailError(emailError);
    }
  });

function showEmailError(emailError ) {
if (emailInput.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
} else if (emailInput.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
}
}

textInputs.forEach( (textInput) => {
    
    const textError = textInput.nextElementSibling;
    textInput.addEventListener("blur", () => {
    if (textInput.validity.valid) {
        textError.textContent = "";
        textInput.classList.remove("invalid")
      } else {
        // If there is still an error, show the correct error
        textInput.classList.add("invalid")
        showError(textInput, textError);
      }
    });
});

function showError(textInput, textError ) {
    if (textInput.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        textError.textContent = "You need to enter a text.";
    } else if (textInput.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        textError.textContent = "Entered value needs to be a text.";
    }
}

numberInput.addEventListener("blur", () => {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (numberInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      numberError.textContent = ""; // Reset the content of the message
      numberInput.classList.remove("invalid")
    } else {
      // If there is still an error, show the correct error
      numberInput.classList.add("invalid")
      showNumberError(numberError);
    }
  });

function showNumberError(emailError ) {
if (numberInput.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    numberError.textContent = "You need to enter a phone number.";
} else if (numberInput.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    numberError.textContent = "Entered value needs to be a number.";
}
}