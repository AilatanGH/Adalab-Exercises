
// Validación

var nameElement = document.getElementById("name");
var surnameElement = document.getElementById("surname");
var emailElement = document.getElementById("email");
var reemailElement = document.getElementById("reemail");
var passwordElement = document.getElementById("password");
var buttonElement = document.getElementById("button");


function validateForm(){
  if(validateName() && validateEmail() && validatePasswordpassword()){
    alert("Muchas gracias por enviar el formulario");
  }
}

function validateName(){

  if(nameElement.value == "" || nameElement.value.length == 0){
    alert("[ERROR] Introduzca un nombre");
    return false;
  } else {
    return true;
  }
}

function validateEmail(){
  var emailOk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!emailOk.test(emailElement.value)){
    alert ("[ERROR] Introduzca una dirección de email correcta.");
    return false;
  } else if(!emailOk.test(reemailElement.value)){
    alert ("[ERROR] Introduzca una dirección de email correcta.");
    return false;
  } else {
    return true;
  }
}

function validatePassword(){

  if(passwordElement.value == ""){
    alert ("[ERROR] Instroduzca una contraseña.");
    return false;
  } else {
    return true;
  }
}

buttonElement.addEventListener("click", validateForm);

var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "septimbre", "octubre", "noviembre", "diciembre"];
var startDay = 1;
var endDay = 31;
var startYear = 1929;
var endYear = 2017;

function loadSelects(){
  fillDaySelect();
  fillMonthSelect();
  fillYearSelect();
}

function fillDaySelect(){
  var daySelect = document.querySelector(".day");
  for(var i = startDay; i <= endDay; i++){
    daySelect.options[i] = new Option(i);
  }
}

function fillMonthSelect(){
  var monthSelect = document.querySelector(".month");
  for(var i = 0; i < months.length; i++){
    monthSelect.options[i+1] = new Option(months[i]);
  }
}

function fillYearSelect(){
  var yearSelect = document.querySelector(".year");
  var range = endYear - startYear;
  for(var j = 1; j <= range; j++){
    yearSelect.options[j] = new Option(j + startYear);
  }
}
