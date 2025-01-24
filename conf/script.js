const submitButton = document.getElementById("btn");
const imgInfo = document.getElementById("imgInfo")
const imgError = document.getElementById("imgError");
const nameBox = document.getElementById("nameBox");
const emailBox = document.getElementById("emailBox");
const emailError = document.getElementById("emailError");
const gitBox = document.getElementById("gitBox");
submitButton.addEventListener("click", (event) => {imgInfo.classList.add("invalid"); imgError.classList.add("invalid"); emailError.classList.add("invalid"); emailBox.classList.add("invalid"); gitBox.classList.add("invalid");})

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]/;
    return emailRegex.test(email.value);
  }

  // Function to validate if the input is empty or doesn't start with @
  function validateField(input, git) {
    if ((git && (input.value.trim() === "" || input.value[0] != "@")) || (!git && input.value.trim() === "")) {
      input.classList.add("invalid"); // Add red border
      return false;
    } else {
      input.classList.remove("invalid"); // Add red border
      return true;
    }
  }

  function validateEmail(input, errorMessage) {
  if (!isValidEmail(input)) {
        errorMessage.classList.add("invalid"); // Show error message
        input.classList.add("invalid"); // Add red border
        return false;
      } else {
        errorMessage.classList.remove("invalid"); // Hide error message
        input.classList.remove("invalid"); // Add red border
        return true;
      }

  }

  let nameTouch = false;
  nameBox.addEventListener("blur", () => {nameTouch = true; validateField(nameBox, false);});
  let emailTouch = false;
  emailBox.addEventListener("blur", () => {emailTouch = true; validateEmail(emailBox, emailError);});
  let userTouch = false;
  gitBox.addEventListener("blur", () => {userTouch = true; validateField(gitBox, true);});