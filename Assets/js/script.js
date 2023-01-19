
// I was able to get the date to display through dayjs
$(function displayDate(){
  var currentDate = dayjs().format('dddd/MMMM/YYYY');
console.log(currentDate);
$('#currentDay').text(currentDate)
});

//Here I was aboe to get my click event and I got my local storage to work here.
$('.saveBtn').click(function clickcalendartime(){
  var userText = $(this).siblings('.description').val();
  console.log(userText);
  var hours = $(this).parent().attr('id');
  console.log(hours);
  localStorage.setItem(hours, userText);
  $("#hour9 .description").val(localStorage.getItem(hours));
});

// Made code where the past,present,future is compared is the current hour.
 $(function timetracker(){
   var TimeRightNow = dayjs().hour();
console.log(TimeRightNow)
$('.time-block').each(function TimeBlockTracker(){
  var BLockTime = parseInt($(this).attr('id').split('hour-')[1]);
console.log(BLockTime)
  if(BLockTime < TimeRightNow){
    $(this).removeClass('future');
    $(this).removeClass('present');
    $(this).addClass('past');
  }
    else if (BLockTime === TimeRightNow){
      $(this).removeClass('future');
      $(this).addClass('present');
      $(this).removeClass('past');
    }
     else { (BLockTime > TimeRightNow)
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
    }
})
 });
 //Got the locstorage to display
 $("#hour-9 .description").val(localStorage.getItem('hour-9'));
 $("#hour-10 .description").val(localStorage.getItem('hour-10'));
 $("#hour-11 .description").val(localStorage.getItem('hour-11'));
 $("#hour-12 .description").val(localStorage.getItem('hour-12'));
 $("#hour-13 .description").val(localStorage.getItem('hour-13'));
 $("#hour-14 .description").val(localStorage.getItem('hour-14'));
 $("#hour-15 .description").val(localStorage.getItem('hour-15'));
 $("#hour-16 .description").val(localStorage.getItem('hour-16'));
 $("#hour-17 .description").val(localStorage.getItem('hour-17'));
 
