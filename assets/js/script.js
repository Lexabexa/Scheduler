$(document).ready(function() {
  //display current day and time
  const currentDay = dayjs().format("dddd, MMMM D, YYYY");
  const currentTime = dayjs().format("hh:mm:ss a");
  $("#currentDay").text(currentDay);
  $("#currentTime").text(currentTime);
  
  //save button function to save to local storage 
  $(".saveBtn").click(function() {
    const description = $(this).siblings(".description").val();
    const timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, description);
  });
  
  //listener for click events on the save button. 
  $(".description").each(function(){
    const timeBlockId = $(this).parent().attr('id');
    const savedDescription = localStorage.getItem(timeBlockId);
    if (savedDescription) {
      $(this).val(savedDescription);
    }
  });
  
  // the past, present, or future class to each time
  // block by comparing the id to the current hour.
  const currentHour = moment().format("H");
  $(".time-block").each(function() {
    const timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
      }
    });
});
