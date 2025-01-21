  // Function to validate email format
  function isValidEmail(email) {
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]/;
    return emailRegex.test(email.value);
  }

  // Function to validate if the input is empty
  function validateField(input, errorMessage) {
    if (input.value.trim() === "") {
      errorMessage.style.display = "block"; // Show the error message
      input.classList.add("invalid"); // Add red border
      return false;
    } else {
      errorMessage.style.display = "none"; // Hide the error message
      input.classList.remove("invalid"); // Add red border
      return true;
    }
  }

  function validateEmail(input, errorMessage) {
  if (!isValidEmail(input)) {
        errorMessage.style.display = "block"; // Show error message
        input.classList.add("invalid"); // Add red border
        return false;
      } else {
        errorMessage.style.display = "none"; // Hide error message
        input.classList.remove("invalid"); // Add red border
        return true;
      }

  }




  // Add event listeners for blur (when the user clicks out of the field)
  const firstnameInput = document.getElementById("firstname");
  const firstnameError = document.getElementById("fnameError");
  let fnameTouch = false;
  firstnameError.style.display = "none";
  firstnameInput.addEventListener("blur", () => {fnameTouch = true; validateField(firstnameInput, firstnameError);});

  const lastnameInput = document.getElementById("lastname");
  const lastnameError = document.getElementById("lnameError");
  let lnameTouch = false;
  lastnameError.style.display = "none";
  lastnameInput.addEventListener("blur", () => {lnameTouch = true; validateField(lastnameInput, lastnameError)});
  
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  let emailTouch = false;
  emailError.style.display = "none";
  emailInput.addEventListener("blur", () => {emailTouch = true; validateEmail(emailInput, emailError);});

  const msgInput = document.getElementById("msg");
  const msgError = document.getElementById("msgError");
  let msgTouch = false;
  msgError.style.display = "none";
  msgInput.addEventListener("blur", () => {msgTouch = true; validateField(msgInput, msgError)});
  
  function validateConsent(input, errorMessage) {
    if (!input.checked) {
          errorMessage.style.display = "block"; // Show error message
          return false;
        } else {
          errorMessage.style.display = "none"; // Hide error message
          return true;
        }
  
    }

  const consentInput = document.getElementById('consent');
  const consentError = document.getElementById("consentError");
  consentError.style.display = "none";

  consentInput.addEventListener("click", () => validateConsent(consentInput, consentError));
  
  const form = document.getElementById("form");

  let queryInput = false;
  queryError = document.getElementById("queryError");
  queryError.style.display = "none"
  document.querySelectorAll('.query-option input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === null) {
      queryError.style.display = "block";
      queryInput = false;
    } else {
      queryError.style.display = "none"
      queryInput = true;
    }
  });
});

/*
let submitClick = false;
document.getElementById('submit').addEventListener('click', (event) => {submitClick = true;})
  */

document.getElementById('submitButton').addEventListener('click', (event) => {
      let isValid = true;

      if (!validateField(firstnameInput, firstnameError)) {
        isValid = false;
      }
      if (!validateField(lastnameInput, lastnameError)) {
        isValid = false;
      }
      if (!validateField(msgInput, msgError)) {
        isValid = false;
      }
      if (!validateEmail(emailInput, emailError)) {
        isValid = false;
      }
      if (!validateConsent(consentInput, consentError)) {
        isValid = false;
      }
      if (!queryInput) {
        isValid = false;
        queryError.style.display = "block";
      }


      if (isValid) {

        alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");
        // Uncomment the line below to submit the form programmatically
        //document.getElementById('form').submit();
      } else {
        event.preventDefault(); // Prevent form submission
      }

      isValid = true;

    });
