const form = document.querySelector("form#contact-form");

const successMessage = document.querySelector("#success-message");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");

const submitBtn = document.querySelector(".submit-btn");

form.addEventListener("submit", formValidator);

/*
Validates the form/inputs. using the inputLength and emailValidator functions. 
calling on the createErrorMessage function if "they are not". And the correctindicator if they are.
If all the inputs are "true"(using the "Check" variables). A Success Message is shown.
*/
function formValidator(event) {
  event.preventDefault();

  let nameCheck = true;
  let subjectCheck = true;
  let emailCheck = true;
  let messageCheck = true;

  if (!inputLength(nameInput.value, 5)) {
    nameCheck = false;
    createError(nameError, nameInput, "Name must be atleast 5 characters");
  } else {
    nameCheck = true;
    correctIndicator(nameInput, nameError);
  }

  if (!emailValidator(emailInput.value)) {
    subjectCheck = false;
    createError(emailError, emailInput, "Please enter a valid email address");
  } else {
    subjectCheck = true;
    correctIndicator(emailInput, emailError);
  }

  if (!inputLength(subjectInput.value, 15)) {
    emailCheck = false;
    createError(subjectError, subjectInput, "Subject must be atleast 15 characters");
  } else {
    emailCheck = true;
    correctIndicator(subjectInput, subjectError);
  }

  if (!inputLength(messageInput.value, 25)) {
    messageCheck = false;
    createError(messageError, messageInput, "Your message must be atleast 25 characters");
    messageInput.className = "form-textarea error-class";
  } else {
    messageCheck = true;
    correctIndicator(messageInput, messageError);
    messageInput.className = "form-textarea success-class";
  }
  if (nameCheck && subjectCheck && emailCheck && messageCheck) {
    successMessage.style.display = "block";
    homeBtn.style.display = "block";
    submitBtn.style.opacity = "50%";
  } else {
    successMessage.style.display = "none";
    homeBtn.style.display = "none";
    submitBtn.style.opacity = "100%";
  }
}

/*
Checking the value's length as the first parameter, and if the value's length is greater or equal to the second parameter it returns true.
*/
function inputLength(value, minLength) {
  return value.trim().length >= minLength;
}

/*
Checking if the parameter(email) past in matches the regEx pattern. If it do, it returns true.
*/
function emailValidator(email) {
  const pattern = /\S+@\S+\.\S+/;
  const patternMatches = pattern.test(email);
  return patternMatches;
}

/*
Function for creating error messages to the input fields.
The first parameter div element which display the message.
the second select the input field and adds the error-class to it.
the third is the message/text which will be displayed.
*/
function createError(messageBox, inputField, messageText) {
  messageBox.innerHTML = messageText;
  messageBox.className = "form-error-message";
  inputField.className = "form-field error-class";
}

/*
Function to indicate that the value of the from passes validaton, and removing the the error message, by removing it's innerHtml.
The first parameter is the input field and it adds the success-class to it. 
The second parameter is the error message div, which is set to an emty string.
*/
function correctIndicator(successMarker, removeError) {
  successMarker.className = "form-field success-class";
  removeError.innerHTML = "";
}

const homeBtn = document.querySelector(".contact-back-home");
