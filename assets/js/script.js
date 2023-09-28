// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  //current date in the header of the page
  const currentDate = new Date();
  const header = document.querySelector('header');
  const dateDisplay = document.createElement('p');
  dateDisplay.textContent = $('<p>').text(`Today is ${currentDate.toLocaleDateString()} and the time is ${currentDate.toLocaleTimeString()}.`);
  header.append(dateDisplay);
   //save button function to save to local storage 
   $(".saveBtn").click(function() {
    const description = $(this).siblings('.description').val();
    const timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, description);
   });
    //listener for click events on the save button. 
   $('.description').each(function())
    const timeBlockId = $(this).parent().attr('id');
    const savedDescription = localStorage.getItem(timeBlockId);
    if (savedDescription) {
      $(this).val(savedDescription);
     }
    });
    
    
    // the past, present, or future class to each time
    // block by comparing the id to the current hour.
    const currentHour = dayjs().hour();
    $(".time-block").each(function() {
      const timeBlockHour = parseInt($(this).attr("id"));
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
    
  //refresh storage
  $("#Refresh").click(function() {
   location.reload();
  });
