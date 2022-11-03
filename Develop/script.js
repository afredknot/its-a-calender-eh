// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
var hourCard = document.querySelectorAll(".row");
var  rightNow = dayjs().format('HH');
var save = document.querySelectorAll('.saveBtn');
console.log(save)
console.log(hourCard)
$(function () {
 
  
 function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
 }

  displayTime();
  setInterval(displayTime, 1000);
  console.log(displayTime);

 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listenerfunction  function 
  
  function saveAppointment(event) {
      localStorage.setItem('log', JSON.stringify());
    }
  function readAppointment() {
    var appointment = localStorage.getItem('log');
    if (appointment) {
      appointment = JSON.parse(appointment);
    } else {
      appointment = [];
  }
    return appointment;
 };
   
 function printAppointmentData(){
    projectDisplayEl.empty();
    var appointment = readAppointment();

    for (var i = 0; i < appointment.length; i += 1) {
      var appointment = appointment[i];
      var appointmentDate = dayjs(appointment.date);
      // get date/time for start of today
      var today = dayjs().startOf('day');
    }
  }; 

  for (var i = 0; i < hourCard.length; i++){
  if (hourCard[i].id === rightNow){
  hourCard[i].classList.add('present')
  } if (hourCard[i].id < rightNow){
  hourCard[i].classList.add('past');
   } else{
       hourCard[i].classList.add('future');
    };
  }
  document.querySelectorAll('.saveBtn').forEach(item =>{
    item.addEventListener('click', saveAppointment);
  })

 



  // printAppointmentData()

});
console.log(hourCard[0].id)
// function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?relativeTime: {
    // dayjs('2019-01-25').toString()
    // future: "in %s",
    // past: "%s ago",
    // h: "an hour",
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.