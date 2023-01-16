// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeblockEl = $('.saveBtn');
var DisplayCurrentDate = $('#currentDay');
function displayDate(){
  var currentDate = dayjs().format('MM/DD/YYYY');
console.log(currentDate);
DisplayCurrentDate.text(currentDate)
}
displayDate()
$(function calendartime() {
  // var time = localStorage.getItem('time');
  // if (time) {
  //   time = JSON.parse(time);
  // } else {
  //   time = [];
  // }
  // return time;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
// function savecalendartime(time){
// localStorage.setItem('time',JSON.stringify(time));
// }
function clickcalendartime(){
  console.log('hello world')
  var userText = $(this).siblings('.description').val()
  console.log(userText)
  var hours = $(this).parent().attr('id')
  console.log(hours)
  localStorage.setItem(hours, userText);
 
 
 
 
  // var time = calendartime();
  // time.push(Newtime);
  // savecalendartime(time);
}

timeblockEl.on('click', clickcalendartime);
$("#hour9 .description").val(localStorage.getItem('#hour9'));