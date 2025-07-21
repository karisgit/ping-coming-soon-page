const form = document.querySelector("#subscribeForm");

// safety check
if (form) {
  const input = form.querySelector("input[type='email']");
  const submitBtn = form.querySelector(".submit-button");
  const message = form.querySelector(".message");

  // Error handler
  function setError(msg) {
    input.classList.add("invalid");
    message.innerHTML = msg;
    message.style.display = "block";
    message.classList.add("error-message");
    submitBtn.disabled = true;

    form.style.gap = window.matchMedia("(min-width: 992px)").matches ? "16px" : "20px";
  }

  // success handler
  function setSuccess(msg) {
    input.classList.add("valid");
    message.innerHTML = msg;
    message.style.display = "block";
    message.classList.add("success-message");
    submitBtn.disabled = false;

    form.style.gap = window.matchMedia("(min-width: 992px)").matches ? "16px" : "20px";
  }

  // Reset UI
  function resetUi() {
    input.classList.remove("valid", "invalid");
    message.classList.remove("error-message", "success-message");
    message.innerHTML = "";
    message.style.display = "none"
    submitBtn.disabled = false;
  }



  // adding event listener to the email input
  input.addEventListener("input", () => {
    const value = input.value.trim();
    const isEmpty = value === "";
    const isValueValid = input.validity.valid;

    input.classList.remove("valid", "invalid");
    message.classList.remove("error-message", "success-message");


    if (isEmpty) {
      setError("This field is required  🙄 😏");
    } else if (!isValueValid) {
      setError("Please provide a valid email address 😉");
    } else {
      setSuccess("Looks good 👍");
    }
  });

  // Event listener
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetUi();
  });

}