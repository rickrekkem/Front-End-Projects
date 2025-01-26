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

  function validateImg(image) {
    if (image.src != null) {
        return true;
    }
    return false;
  }

    const avatarInput = document.getElementById("avatar");
    const avatarPreview = document.getElementById("avatarPreview");
    const avatarImage = document.getElementById("avatarImage");
    const uploadInstructions = document.getElementById("uploadInstructions");
    const actionButtons = document.getElementById("actionButtons");
    const removeImageButton = document.getElementById("removeImage");
    const changeImageButton = document.getElementById("changeImage");
    
    const uploadBox = document.querySelector(".upload-box");
    let seen = false;

    uploadBox.addEventListener('click', () => {
        if (!seen) {
            avatarInput.click();
        }
        if (actionButtons.classList.contains("hidden")) {
            seen = false;
        }
    });

    avatarInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file && file.size <= 500 * 1024) { // Limit file size to 500KB
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarPreview.classList.add("shown");
                avatarImage.src = e.target.result;
                avatarImage.classList.remove("hidden");
                uploadInstructions.classList.add("hidden");
                actionButtons.classList.remove("hidden");
                imgError.classList.remove("invalid");
                imgInfo.classList.remove("invalid");
                seen = true;
            };
            reader.readAsDataURL(file);
        } else {
            imgError.classList.add("invalid");
            imgInfo.classList.add("invalid");
            avatarPreview.classList.remove("shown");
            avatarInput.value = ""; // Reset the input
        }
    });

    removeImageButton.addEventListener("click", function () {
        event.preventDefault();
        avatarImage.src = "";
        avatarImage.classList.add("hidden");
        uploadInstructions.classList.remove("hidden");
        actionButtons.classList.add("hidden");
        avatarPreview.classList.remove("shown");
        avatarInput.value = ""; // Reset the input
    });

    changeImageButton.addEventListener("click", function () {
        event.preventDefault();
        avatarInput.click(); // Trigger file input
    });

  let nameTouch = false;
  nameBox.addEventListener("blur", () => {nameTouch = true; validateField(nameBox, false);});
  let emailTouch = false;
  emailBox.addEventListener("blur", () => {emailTouch = true; validateEmail(emailBox, emailError);});
  let userTouch = false;
  gitBox.addEventListener("blur", () => {userTouch = true; validateField(gitBox, true);});

  
submitButton.addEventListener('click', (event) => {
    let isValid = true;
    alert("aa");

    if (!validateField(nameBox, false)) {
        alert("bb");
      isValid = false;
    }
    if (!validateField(gitBox, true)) {
        alert("cc");
      isValid = false;
    }
    if (!validateImg(avatarImage)) {
        alert("dd");
      isValid = false;
    }
    if (!validateEmail(emailInput, emailError)) {
        alert("ee");
      isValid = false;
    }

    if (isValid) {

      alert("Message Sent! Thanks for completing the form. We'll be in touch soon!");
      // Uncomment the line below to submit the form programmatically
      //document.getElementById('form').submit();
    } else {
        alert("FFFFF");
      event.preventDefault(); // Prevent form submission
    }

    isValid = true;

  });