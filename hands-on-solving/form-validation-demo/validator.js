document.addEventListener('DOMContentLoaded', () => {
  // 1) Cache DOM elements
  const form = document.getElementById('validationForm');

  const usernameInput = document.getElementById('username');
  const usernameError = document.getElementById('username-error');
  const usernameSuccess = document.getElementById('username-success');

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailSuccess = document.getElementById('email-success');

  const passwordInput = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  const passwordSuccess = document.getElementById('password-success');

  const ageInput = document.getElementById('age');
  const ageError = document.getElementById('age-error');
  const ageSuccess = document.getElementById('age-success');

  const countryInput = document.getElementById('country');
  const countryError = document.getElementById('country-error');
  const countrySuccess = document.getElementById('country-success');

  const bioInput = document.getElementById('bio');
  const bioError = document.getElementById('bio-error');
  const bioSuccess = document.getElementById('bio-success');
  const charCounter = document.getElementById('char-counter');

  const termsCheck = document.getElementById('terms');
  const termsError = document.getElementById('terms-error');

  const submitBtn = document.getElementById('submitBtn');

  const resultCard = document.getElementById('resultCard');
  const resultContent = document.getElementById('resultContent');

  submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(validateAge() && validateBio() && validateCountry() && validateEmail() && validatePassword() && validateTerms() && validateUsername()){
      resultCard.classList.add("visible")
      resultContent.textContent = `${usernameInput.value}
      ${passwordInput.value}`
    }
  })
  // 2) Helper: render validation state
  function render(value, ok, errorDom, successDom, errorMessage) {
    if (!value || (typeof value === 'string' && value.length === 0)) {
      errorDom.classList.remove('show');
      successDom.classList.remove('show');
      return false;
    }
    if (ok) {
      errorDom.classList.remove('show');
      successDom.classList.add('show');
      return true;
    } else {
      successDom.classList.remove('show');
      errorDom.textContent = errorMessage;
      errorDom.classList.add('show');
      return false;
    }
  }

  // 3) Field validators
  function validateUsername() {

    if(usernameInput.value.length >= 3){
      
      return render(usernameInput.value, true, usernameError, usernameSuccess, "");
    } else {
      return render(usernameInput.value, false, usernameError, usernameSuccess, "Error: Username is less than 2 characters long");
    }
  }

  function validateEmail() {
    const v = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(v);
    return render(emailInput.value, isValid, emailError, emailSuccess, "Error: Must be a valid email")
    
    
  }

  function validatePassword() {
    if(passwordInput.value.length < 6){
      return render(passwordInput.value, false, passwordError, passwordSuccess, "Error: Must be at least 6 characters long")
    } else {
      return render(passwordInput.value, true, passwordError, passwordSuccess, "")
    }
  }

  function validateAge() {
    if(ageInput.value > 120 || ageInput < 1){
      return render(ageInput.value, false, ageError, ageSuccess, "Invalid age")
    } else {
      return render(ageInput.value, true, ageError, ageSuccess, "")
    }
  }

  function validateCountry() {
    const isValid = countryInput.value.length > 0
    return render(countryInput.value, isValid, countryError, countrySuccess, "Error: Choose a valid country")
    
  }

  function validateBio() {
    if (bioInput.value.length > 200 || bioInput.value.length < 1){
      return render(bioInput.value, false, bioError, bioSuccess, "Error: bio must be between 1 and 200 characters")
    } else {
      return render(bioInput.value, true, bioError, bioSuccess, "Error: bio must be between 1 and 200 characters")
    }
  }

  function validateTerms() {
    const isChecked = termsCheck.checked
    if(!isChecked){
      termsError.textContent = "Check here"
      termsError.classList.add("show")
    } else {
      termsError.classList.remove("show")
    }
    return isChecked
  }

  // 4) Live character counter for bio
  function updateBioCounter() {
    const count = bioInput.value.length;
    charCounter.textContent = `${count} / 200 characters`;
  }

  // 5) Register event listeners
  usernameInput.addEventListener('input', validateUsername);
  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  ageInput.addEventListener('input', validateAge);
  countryInput.addEventListener('change', validateCountry);
  bioInput.addEventListener('input', () => {
    validateBio();
    updateBioCounter();
  });
  termsCheck.addEventListener('change', validateTerms);

});