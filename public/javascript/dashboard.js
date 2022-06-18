let searchButton = document.querySelector('.searchButton');
let appointmentButton = document.querySelector('.appointmentButton');
let reportButton = document.querySelector('.reportButton');

let searchDiv = document.querySelector('.searchDiv');
let appointmentDiv = document.querySelector('.appointmentDiv');
let reportDiv = document.querySelector('.reportDiv');


searchButton.addEventListener('click',function( ){
  searchDiv.style.display = "block";
  appointmentDiv.style.display = "none";
  reportDiv.style.display = "none";

})


appointmentButton.addEventListener('click' ,function(){
appointmentDiv.style.display = "block";
searchDiv.style.display = "none";
  reportDiv.style.display = "none";
})


reportButton.addEventListener('click' ,function(){
reportDiv.style.display = "block";
appointmentDiv.style.display = "none";
searchDiv.style.display = "none";
 
  
})

function logout(){
  location.href = "index.html";
}
let userProfile = JSON.parse(localStorage.getItem('user'));
let userName = document.querySelector('.userName');
userName.innerHTML = userProfile.firstName + " " + userProfile.lastName;

let locations = document.querySelector('.location');
locations.innerHTML = userProfile.address;
let covidStatusText = document.querySelector('.covidStatusText');
let vaccineStatus = document.querySelector('.vaccineStatus');

covidStatusText.innerHTML = userProfile.covidStatus;
vaccineStatus.innerHTML = userProfile.vaccinated;