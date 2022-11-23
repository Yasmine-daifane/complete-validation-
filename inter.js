const form = document.getElementById("form");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telph = document.getElementById("telph");
const Genre = document.getElementsByName("M");
const mis1 = document.querySelector(".mis1");
let arr=[]
form.addEventListener("submit", (e) => {

  checkInputs();
  if(arr.length != 6) e.preventDefault();
 
});

/*-- version 2 ---*/
function validatefname(lprenom) {
  if (lprenom.value.trim() === "") {
    setErrorFor(lprenom, "First name is required");
  } else if ((lprenom.value.length <= 2) || (lprenom.value.length > 30)) {
    setErrorFor(lprenom, "First name is invalid");
  } else {
    setSuccessFor(lprenom, "Looks Good!");
	

  }
}
function validatelname(lnom) {
  if (lnom.value.trim() === "") {
    setErrorFor(lnom, "Last name is required");
  } else if ((lnom.value.length <= 2) || (lnom.value.length > 30)) {
    setErrorFor(lnom, "Last name is invalid");
  } else {
    setSuccessFor(lnom, "Looks Good!");
	
  }
}
function validateemail(ema) {
  if (ema.value.trim() === "") {
    setErrorFor(ema, "Email  is required");
  } else if (ema.value.match(/^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/g)) {
    setSuccessFor(ema, "Looks Good!");
  } else {
    setErrorFor(ema, "Email is invalid");
  }
}
function validatephone(phone) {
  if (phone.value.trim() === "") {
    setErrorFor(phone, "Phone number  is required");
  } else if (
    phone.value.match(
      /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/
    )
  ) {
    setSuccessFor(phone, "Looks Good!");
  } else {
    setErrorFor(phone, "Phone number is invalid");
  }
}
prenom.addEventListener("keyup", function () {
  validatefname(prenom);
});
nom.addEventListener("keyup", function () {
  validatelname(nom);
});
email.addEventListener("keyup", function () {
  validateemail(email);
});
telph.addEventListener("keyup", function () {
  validatephone(telph);
});
/*-- version 2  fin ---*/
function checkInputs() {
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const telphValue = telph.value.trim();
  if (prenomValue === "") {
    setErrorFor(prenom, "First name is required");
  } else if ((prenom.value.length <= 2) || (prenom.value.length > 30)) {
    setErrorFor(prenom, "First name is invalid");
  } else {
    setSuccessFor(prenom, "Looks Good!");
	arr.push(true);
  }
  if (nomValue === "") {
    setErrorFor(nom, "Last name is required");
  } else if ((nom.value.length <= 2) || (nom.value.length > 30)) {
    setErrorFor(nom, "le nom is invalid");
	
  } else {
    setSuccessFor(nom, "Looks Good!");
	arr.push(true);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email, "Looks Good!");
	arr.push(true);
  }
  if (telphValue === "") {
    setErrorFor(telph, "Phone number  is required");
  } else if ( phone.value.match( /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/)) {
    setSuccessFor(telph, "Looks Good!");
	arr.push(true);
  } else { 
    setErrorFor(telph, "Phone number is invalid");
  }
  for (let i = 0; i < Genre.length; i++) {
  
    if (Genre[i].checked) {
      successFor(Genre[i], "Looks Good!");
	  arr.push(true);
	 
	  break;
    } else {
      errorFor(Genre[i], "Not a valid phone number");
	
    }
  }
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let chosencheckboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      chosencheckboxes.push(check_box);
    }
  });
  if (chosencheckboxes.length >= 2 && chosencheckboxes.length <= 3) {
    text.innerHTML += "Looks Good !!";
	arr.push(true);
    text.style.color = "green";
  } else {
    text.innerHTML += "Pleaze You must chose Max 3 Options !!!";
    text.style.color = "red";
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "inputbox-error";
  small.innerText = message;
}
function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const samp = formControl.querySelector("small");
  formControl.className = "inputbox-success";
  samp.innerText = message;
}
function errorFor(input, message) {
	const formControl = (input.parentElement).parentElement;

	const small = formControl.querySelector("small");
	formControl.className = "inputbox-error";
	small.innerText = message;
  }
  function successFor(input, message) {
	const formControl = (input.parentElement).parentElement;
	
	const samp = formControl.querySelector("small");
	
	formControl.className = "inputbox-success";
	samp.innerText = message;
  }
function isEmail(email) {
  return /^\w+([\.-]?\w+)*@*(ofppt)*(\.ma)+$/.test(email);
}
function istelph(telph) {
  var phoneRe = /^((\+212)?[ -])?(06|05|07)(\d{1})[ -]?(\d{3})[ -]?(\d{4})+$/;
  return phoneRe.test(telph);
}


function validate() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let chosencheckboxes = [];
  let text = document.getElementById("confirm");
  text.innerHTML = " ";
  checkbox.forEach((check_box) => {
    if (check_box.checked) {
      chosencheckboxes.push(check_box);
    }
  });
  if (chosencheckboxes.length >= 2 && chosencheckboxes.length <= 3) {
    text.innerHTML += "Looks Good !!";
	
    text.style.color = "green";
  } else {
    text.innerHTML += "Pleaze You must chose Max 3 Options !!!";
    text.style.color = "red";
  }
}
