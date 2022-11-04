
var timeDisplayEl = $('#currentDay');
var rightNow = dayjs().format('HH');
var saveEl = document.querySelectorAll('.saveBtn');
var text = document.querySelectorAll('textarea');
console.log(saveEl);
var appointments = []


// started with the time card
$(function () {
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);
  console.log(displayTime);
 var hourCard = document.querySelectorAll('.row');
  for (var i = 0; i < hourCard.length; i++) {
    if (hourCard[i].id === rightNow) {
      hourCard[i].classList.add('present');
    }
    if (hourCard[i].id < rightNow) {
      hourCard[i].classList.add('past');
    } else {
      hourCard[i].classList.add('future');
    }
  }

  var appointment = localStorage.getItem('appointments');
  function saveAppointment(event) {
    var appointmentDetails = this.parentElement.children[1].value;
    var apptTime = this.parentElement.id;
    var appointment = {
      details: appointmentDetails,
      time: apptTime,
    };
    appointments.push(appointment);
    storeAppointment();
  }
  
    function readAppointment() {
    var appointments = localStorage.getItem('appointments');
    if (appointments) {
      appointments = JSON.parse(appointments);
    } else {
      appointments = [];
    }
  }
   if (appointments === "") {
      return;
    }
    
    // adding the json method to be able to put an array into strings
  function storeAppointment (){
  localStorage.setItem('appointments', JSON.stringify(appointments));
  }

  function init() {
    var storedAppointments = JSON.parse(localStorage.getItem("appointments")) ?? [];
    if (storedAppointments !== null) {
      appointments = storedAppointments;
    }
    for(i = 0; i < appointments.length; i++){
      var hourCard = document.getElementById(appointments[i].time)
      var hourTextarea = hourCard.children[1]
      hourTextarea.textContent = appointments[i].details
    }
 }
  document.querySelectorAll('.row .saveBtn').forEach((item) => {
    item.addEventListener('click', saveAppointment);

  })
  init()
  
});


